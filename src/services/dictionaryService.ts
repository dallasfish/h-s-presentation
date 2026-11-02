import { DictionaryEntry, findDictionaryEntry } from '../data/dictionary';

// In-memory cache for dynamic API lookups
const dynamicDictionaryCache = new Map<string, DictionaryEntry>();

export async function lookupWord(rawWord: string): Promise<DictionaryEntry | null> {
  const clean = rawWord.trim().toLowerCase().replace(/[^a-z0-9-]/g, '');
  if (!clean) return null;

  // 1. Check curated Easy English Bible Dictionary
  const curated = findDictionaryEntry(clean);
  if (curated) return curated;

  // 2. Check dynamic cache
  if (dynamicDictionaryCache.has(clean)) {
    return dynamicDictionaryCache.get(clean)!;
  }

  // 3. Fallback to public dictionary API with timeout
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2500);

    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(clean)}`, {
      signal: controller.signal
    });
    clearTimeout(timeoutId);

    if (response.ok) {
      const data = await response.json();
      if (Array.isArray(data) && data.length > 0) {
        const item = data[0];
        const phonetic = item.phonetic || item.phonetics?.find((p: { text?: string }) => p.text)?.text || '';
        const firstMeaning = item.meanings?.[0];
        const partOfSpeech = firstMeaning?.partOfSpeech || 'word';
        const rawDef = firstMeaning?.definitions?.[0]?.definition || '';
        const example = firstMeaning?.definitions?.[0]?.example || `Understanding the word "${clean}" in this context.`;

        // Simplify definition for Easy English reader
        const simplified: DictionaryEntry = {
          word: clean.charAt(0).toUpperCase() + clean.slice(1),
          phonetic: phonetic || undefined,
          partOfSpeech,
          easyDefinition: rawDef.replace(/;.*$/, '').trim(),
          exampleSentence: example,
          isKeyTheologicalTerm: false,
        };

        dynamicDictionaryCache.set(clean, simplified);
        return simplified;
      }
    }
  } catch {
    // network failure or aborted
  }

  // 4. Fallback default entry if lookup fails
  const basicEntry: DictionaryEntry = {
    word: clean.charAt(0).toUpperCase() + clean.slice(1),
    partOfSpeech: 'word',
    easyDefinition: `A common English word used in this sentence to communicate the story.`,
    exampleSentence: `Listen to how "${clean}" is pronounced in clear English.`,
    isKeyTheologicalTerm: false,
  };
  dynamicDictionaryCache.set(clean, basicEntry);
  return basicEntry;
}

export function speakEnglishWord(text: string, rate: number = 0.85) {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'en-US';
  utterance.rate = rate; // 0.85 is ideal for English language learners

  // Pick a natural English voice if available
  const voices = window.speechSynthesis.getVoices();
  const enVoice = voices.find(v => v.lang.startsWith('en') && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Samantha') || v.name.includes('Daniel')));
  if (enVoice) {
    utterance.voice = enVoice;
  }

  window.speechSynthesis.speak(utterance);
}

export function stopSpeaking() {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
}

// Local storage saved words helpers
const SAVED_WORDS_KEY = 'family_of_god_saved_words';

export function getSavedWords(): string[] {
  try {
    const raw = localStorage.getItem(SAVED_WORDS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function toggleSaveWord(word: string): boolean {
  try {
    const list = getSavedWords();
    const clean = word.toLowerCase();
    const index = list.indexOf(clean);
    let updated: string[];
    let isSaved = false;
    if (index >= 0) {
      updated = list.filter(w => w !== clean);
      isSaved = false;
    } else {
      updated = [...list, clean];
      isSaved = true;
    }
    localStorage.setItem(SAVED_WORDS_KEY, JSON.stringify(updated));
    return isSaved;
  } catch {
    return false;
  }
}

export function isWordSaved(word: string): boolean {
  const list = getSavedWords();
  return list.includes(word.toLowerCase());
}
