import React from 'react';
import { findDictionaryEntry } from '../data/dictionary';
import { DictionaryEntry } from '../data/dictionary';

interface InteractiveTextProps {
  text: string;
  onSelectWord: (entry: DictionaryEntry, anchorRect?: DOMRect) => void;
  onHoverWord?: (entry: DictionaryEntry | null, anchorRect?: DOMRect) => void;
  highlightKeyTerms?: boolean;
  className?: string;
}

export const InteractiveText: React.FC<InteractiveTextProps> = ({
  text,
  onSelectWord,
  onHoverWord,
  highlightKeyTerms = true,
  className = '',
}) => {
  // Tokenize string preserving whitespace and punctuation
  // Regex matches words (including hyphens/apostrophes) or non-words
  const tokens = React.useMemo(() => {
    // Check for phrases like "Holy Spirit" first
    const phrases = ['Holy Spirit', 'Garden of Eden', 'family of God', 'Jesus Christ', 'Son of God'];
    const parts: { text: string; isWord: boolean; phraseKey?: string }[] = [];

    // Simple word boundary tokenizer
    const rawTokens = text.split(/(\s+|[.,;!?"“”—–()]+)/);

    let i = 0;
    while (i < rawTokens.length) {
      const current = rawTokens[i];
      if (!current) {
        i++;
        continue;
      }

      // Check 2-word phrase ahead (e.g. "Holy" + " " + "Spirit")
      if (i + 2 < rawTokens.length && rawTokens[i + 1]?.match(/^\s+$/)) {
        const potentialPhrase = `${current} ${rawTokens[i + 2]}`;
        const matched = phrases.find(p => p.toLowerCase() === potentialPhrase.toLowerCase());
        if (matched) {
          parts.push({
            text: potentialPhrase,
            isWord: true,
            phraseKey: matched.toLowerCase().replace(/\s+/g, '_'),
          });
          i += 3;
          continue;
        }
      }

      const isWordCandidate = /[a-zA-Z0-9]/.test(current);
      parts.push({
        text: current,
        isWord: isWordCandidate,
      });
      i++;
    }

    return parts;
  }, [text]);

  const handleInteraction = (
    e: React.MouseEvent<HTMLSpanElement> | React.TouchEvent<HTMLSpanElement>,
    tokenText: string,
    phraseKey?: string,
    isHover = false
  ) => {
    const raw = phraseKey || tokenText;
    const entry = findDictionaryEntry(raw);
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();

    if (entry) {
      if (isHover && onHoverWord) {
        onHoverWord(entry, rect);
      } else {
        onSelectWord(entry, rect);
      }
    } else if (!isHover) {
      // Create on-the-fly entry for arbitrary word
      const clean = tokenText.replace(/[^a-zA-Z]/g, '');
      if (clean) {
        const fallback: DictionaryEntry = {
          word: clean.charAt(0).toUpperCase() + clean.slice(1).toLowerCase(),
          partOfSpeech: 'word',
          easyDefinition: `This English word means: to communicate this thought in the story. Tap the audio icon to listen to the pronunciation.`,
          exampleSentence: `In this sentence: "${text.slice(0, 80)}..."`,
          isKeyTheologicalTerm: false,
        };
        onSelectWord(fallback, rect);
      }
    }
  };

  return (
    <span className={`inline leading-relaxed ${className}`}>
      {tokens.map((token, idx) => {
        if (!token.isWord) {
          return <span key={idx}>{token.text}</span>;
        }

        const dictEntry = findDictionaryEntry(token.phraseKey || token.text);
        const isKeyTerm = dictEntry?.isKeyTheologicalTerm;
        const isHighlighted = highlightKeyTerms && isKeyTerm;

        return (
          <span
            key={idx}
            className={`word-interactive cursor-pointer select-none inline-block rounded px-0.5 -mx-0.5 py-0 transition-all duration-150 ${
              isHighlighted
                ? 'word-highlighted text-amber-950 dark:text-amber-200 font-medium'
                : 'hover:bg-amber-100/70 dark:hover:bg-amber-950/40 hover:text-stone-900 dark:hover:text-stone-100'
            }`}
            onClick={(e) => handleInteraction(e, token.text, token.phraseKey, false)}
            onMouseEnter={(e) => handleInteraction(e, token.text, token.phraseKey, true)}
            onMouseLeave={() => onHoverWord && onHoverWord(null)}
            title="Click or hover for Easy English definition"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleInteraction(e as unknown as React.MouseEvent<HTMLSpanElement>, token.text, token.phraseKey, false);
              }
            }}
          >
            {token.text}
          </span>
        );
      })}
    </span>
  );
};
