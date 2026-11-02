import React, { useState, useMemo } from 'react';
import { Search, Volume2, Bookmark, BookmarkCheck, X, Sparkles, BookOpen, Layers, CheckCircle } from 'lucide-react';
import { EASY_ENGLISH_DICTIONARY, DictionaryEntry } from '../data/dictionary';
import { speakEnglishWord, getSavedWords, toggleSaveWord } from '../services/dictionaryService';

interface GlossaryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialFilter?: 'all' | 'key' | 'saved';
  onSelectWord?: (entry: DictionaryEntry) => void;
}

export const GlossaryModal: React.FC<GlossaryModalProps> = ({
  isOpen,
  onClose,
  initialFilter = 'all',
}) => {
  const [search, setSearch] = useState('');
  const [filterMode, setFilterMode] = useState<'all' | 'key' | 'saved'>(initialFilter);
  const [savedWords, setSavedWords] = useState<string[]>(() => getSavedWords());
  const [speakingWord, setSpeakingWord] = useState<string | null>(null);
  const [isStudyMode, setIsStudyMode] = useState(false);
  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const allEntries = useMemo(() => {
    return Object.values(EASY_ENGLISH_DICTIONARY).sort((a, b) => a.word.localeCompare(b.word));
  }, []);

  const filteredEntries = useMemo(() => {
    return allEntries.filter(entry => {
      const matchesSearch = entry.word.toLowerCase().includes(search.toLowerCase()) ||
        entry.easyDefinition.toLowerCase().includes(search.toLowerCase());

      if (!matchesSearch) return false;

      if (filterMode === 'key') {
        return !!entry.isKeyTheologicalTerm;
      }
      if (filterMode === 'saved') {
        return savedWords.includes(entry.word.toLowerCase());
      }
      return true;
    });
  }, [allEntries, search, filterMode, savedWords]);

  const handleSpeak = (text: string) => {
    setSpeakingWord(text);
    speakEnglishWord(text, 0.85);
    setTimeout(() => setSpeakingWord(null), 1300);
  };

  const handleToggleSave = (word: string) => {
    toggleSaveWord(word);
    setSavedWords(getSavedWords());
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 overflow-y-auto">
      <div className="w-full max-w-4xl bg-[#FBF9F5] dark:bg-stone-900 border border-stone-300 dark:border-stone-800 rounded-2xl shadow-2xl max-h-[90vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-stone-200 dark:border-stone-800 flex items-center justify-between gap-4 bg-stone-100/60 dark:bg-stone-950/40">
          <div>
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-amber-700 dark:text-amber-400" />
              <h2 className="font-serif text-2xl font-bold tracking-tight text-stone-900 dark:text-stone-100">
                Easy English Bible Dictionary
              </h2>
            </div>
            <p className="text-xs text-stone-600 dark:text-stone-400 mt-1">
              Clear, short definitions of theological & biblical terms for English learners
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setIsStudyMode(!isStudyMode);
                setShowAnswer(false);
                setFlashcardIndex(0);
              }}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg flex items-center gap-1.5 transition-colors ${
                isStudyMode
                  ? 'bg-amber-600 text-white'
                  : 'bg-white dark:bg-stone-800 text-stone-700 dark:text-stone-300 border border-stone-300 dark:border-stone-700 hover:bg-stone-50'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              {isStudyMode ? 'Close Flashcards' : 'Practice Flashcards'}
            </button>
            <button
              onClick={onClose}
              className="p-2 text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100 rounded-lg hover:bg-stone-200 dark:hover:bg-stone-800"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Study Flashcard Mode */}
        {isStudyMode ? (
          <div className="p-8 flex flex-col items-center justify-center flex-1 max-w-xl mx-auto w-full text-center">
            {filteredEntries.length === 0 ? (
              <p className="text-stone-500">No words match this filter for flashcard practice.</p>
            ) : (
              <div className="w-full">
                <div className="text-xs text-stone-500 mb-4 font-mono">
                  Card {flashcardIndex + 1} of {filteredEntries.length}
                </div>

                {/* Card Container */}
                <div 
                  onClick={() => setShowAnswer(!showAnswer)}
                  className="bg-white dark:bg-stone-800 border-2 border-stone-200 dark:border-stone-700 rounded-2xl p-8 min-h-[260px] flex flex-col justify-center items-center shadow-md cursor-pointer hover:border-amber-400 transition-all"
                >
                  <div className="text-3xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-2">
                    {filteredEntries[flashcardIndex]?.word}
                  </div>
                  {filteredEntries[flashcardIndex]?.phonetic && (
                    <div className="text-sm font-mono text-stone-500 mb-4">
                      {filteredEntries[flashcardIndex]?.phonetic}
                    </div>
                  )}

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSpeak(filteredEntries[flashcardIndex]?.word);
                    }}
                    className="p-2 mb-4 bg-amber-50 dark:bg-stone-700 text-amber-700 dark:text-amber-300 rounded-full hover:scale-105 transition-transform"
                    title="Pronounce word"
                  >
                    <Volume2 className="w-5 h-5" />
                  </button>

                  {showAnswer ? (
                    <div className="space-y-3 pt-4 border-t border-stone-200 dark:border-stone-700 w-full animate-in fade-in">
                      <p className="text-base text-stone-800 dark:text-stone-200 font-medium">
                        {filteredEntries[flashcardIndex]?.easyDefinition}
                      </p>
                      {filteredEntries[flashcardIndex]?.biblicalNote && (
                        <p className="text-xs text-stone-500 dark:text-stone-400 italic">
                          "{filteredEntries[flashcardIndex]?.biblicalNote}"
                        </p>
                      )}
                    </div>
                  ) : (
                    <div className="text-xs text-amber-700 dark:text-amber-400 uppercase tracking-wider font-semibold mt-4">
                      Tap card to reveal definition
                    </div>
                  )}
                </div>

                {/* Card Navigation */}
                <div className="flex items-center justify-between mt-6">
                  <button
                    onClick={() => {
                      setShowAnswer(false);
                      setFlashcardIndex(prev => Math.max(0, prev - 1));
                    }}
                    disabled={flashcardIndex === 0}
                    className="px-4 py-2 text-sm bg-white dark:bg-stone-800 border border-stone-300 dark:border-stone-700 rounded-lg disabled:opacity-40"
                  >
                    ← Previous
                  </button>
                  <button
                    onClick={() => {
                      setShowAnswer(!showAnswer);
                    }}
                    className="px-4 py-2 text-sm font-medium text-amber-800 dark:text-amber-300"
                  >
                    {showAnswer ? 'Hide Definition' : 'Show Definition'}
                  </button>
                  <button
                    onClick={() => {
                      setShowAnswer(false);
                      setFlashcardIndex(prev => Math.min(filteredEntries.length - 1, prev + 1));
                    }}
                    disabled={flashcardIndex === filteredEntries.length - 1}
                    className="px-4 py-2 text-sm bg-white dark:bg-stone-800 border border-stone-300 dark:border-stone-700 rounded-lg disabled:opacity-40"
                  >
                    Next →
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          /* Normal Glossary List View */
          <>
            {/* Search and Filters */}
            <div className="p-4 border-b border-stone-200 dark:border-stone-800 flex flex-col sm:flex-row gap-3 items-center justify-between">
              <div className="relative w-full sm:w-72">
                <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search English word or meaning..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-9 pr-3 py-1.5 text-sm bg-white dark:bg-stone-800 border border-stone-300 dark:border-stone-700 rounded-lg text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-1 focus:ring-amber-500"
                />
              </div>

              {/* Filter Tabs */}
              <div className="flex items-center gap-1 p-1 bg-stone-200/70 dark:bg-stone-800 rounded-lg text-xs font-medium self-stretch sm:self-auto">
                <button
                  onClick={() => setFilterMode('all')}
                  className={`flex-1 sm:flex-none px-3 py-1 rounded-md transition-colors ${
                    filterMode === 'all'
                      ? 'bg-white dark:bg-stone-700 text-stone-900 dark:text-stone-100 shadow-xs'
                      : 'text-stone-600 dark:text-stone-400 hover:text-stone-900'
                  }`}
                >
                  All ({allEntries.length})
                </button>
                <button
                  onClick={() => setFilterMode('key')}
                  className={`flex-1 sm:flex-none px-3 py-1 rounded-md transition-colors flex items-center justify-center gap-1 ${
                    filterMode === 'key'
                      ? 'bg-white dark:bg-stone-700 text-stone-900 dark:text-stone-100 shadow-xs'
                      : 'text-stone-600 dark:text-stone-400 hover:text-stone-900'
                  }`}
                >
                  <Sparkles className="w-3 h-3 text-amber-600" />
                  Key Concepts
                </button>
                <button
                  onClick={() => setFilterMode('saved')}
                  className={`flex-1 sm:flex-none px-3 py-1 rounded-md transition-colors flex items-center justify-center gap-1 ${
                    filterMode === 'saved'
                      ? 'bg-white dark:bg-stone-700 text-stone-900 dark:text-stone-100 shadow-xs'
                      : 'text-stone-600 dark:text-stone-400 hover:text-stone-900'
                  }`}
                >
                  <BookmarkCheck className="w-3 h-3 text-amber-600" />
                  My Saved ({savedWords.length})
                </button>
              </div>
            </div>

            {/* Glossary Entries Grid */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {filteredEntries.length === 0 ? (
                <div className="py-12 text-center text-stone-500 dark:text-stone-400">
                  <p className="text-base font-medium">No words found</p>
                  <p className="text-xs mt-1">Try another search keyword or switch filters.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredEntries.map(entry => {
                    const isSaved = savedWords.includes(entry.word.toLowerCase());
                    const isSpeaking = speakingWord === entry.word;

                    return (
                      <div
                        key={entry.word}
                        className="bg-white dark:bg-stone-800/80 border border-stone-200 dark:border-stone-700/80 rounded-xl p-4 transition-all hover:border-amber-300 dark:hover:border-stone-600 shadow-xs"
                      >
                        <div className="flex items-start justify-between gap-2 border-b border-stone-100 dark:border-stone-700/60 pb-2 mb-2">
                          <div>
                            <div className="flex items-baseline gap-2">
                              <h3 className="font-serif text-lg font-bold text-stone-900 dark:text-stone-100">
                                {entry.word}
                              </h3>
                              {entry.phonetic && (
                                <span className="font-mono text-xs text-stone-400">
                                  {entry.phonetic}
                                </span>
                              )}
                            </div>
                            <div className="flex items-center gap-2 mt-0.5">
                              <span className="text-[10px] font-sans uppercase tracking-wider text-amber-700 dark:text-amber-400 font-semibold">
                                {entry.partOfSpeech}
                              </span>
                              {entry.isKeyTheologicalTerm && (
                                <span className="text-[10px] text-amber-600 dark:text-amber-300 flex items-center gap-0.5">
                                  <Sparkles className="w-2.5 h-2.5" /> Key Bible Concept
                                </span>
                              )}
                            </div>
                          </div>

                          <div className="flex items-center gap-1">
                            <button
                              onClick={() => handleSpeak(entry.word)}
                              className={`p-1.5 rounded-lg text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-700 transition-colors ${
                                isSpeaking ? 'text-amber-600 scale-110' : ''
                              }`}
                              title="Listen to pronunciation"
                            >
                              <Volume2 className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleToggleSave(entry.word)}
                              className={`p-1.5 rounded-lg transition-colors ${
                                isSaved ? 'text-amber-600 dark:text-amber-400' : 'text-stone-400 hover:text-stone-700'
                              }`}
                              title={isSaved ? 'Saved in my list' : 'Save word'}
                            >
                              {isSaved ? <BookmarkCheck className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
                            </button>
                          </div>
                        </div>

                        <p className="text-xs text-stone-800 dark:text-stone-200 leading-relaxed mb-2 font-medium">
                          {entry.easyDefinition}
                        </p>

                        {entry.biblicalNote && (
                          <div className="bg-amber-50/60 dark:bg-stone-900/60 p-2 rounded text-[11px] text-stone-600 dark:text-stone-300 border border-amber-100 dark:border-stone-800 mb-2">
                            <span className="font-semibold text-amber-900 dark:text-amber-300 block mb-0.5">
                              Bible Context:
                            </span>
                            {entry.biblicalNote}
                          </div>
                        )}

                        <div className="text-[11px] italic text-stone-500 dark:text-stone-400">
                          "{entry.exampleSentence}"
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </>
        )}

        {/* Footer */}
        <div className="p-4 border-t border-stone-200 dark:border-stone-800 bg-stone-100/50 dark:bg-stone-950/30 flex items-center justify-between text-xs text-stone-500">
          <span>Showing {filteredEntries.length} definitions</span>
          <div className="flex items-center gap-1.5 text-stone-600 dark:text-stone-400">
            <CheckCircle className="w-3.5 h-3.5 text-amber-600" /> Easy English Bible Standard
          </div>
        </div>
      </div>
    </div>
  );
};
