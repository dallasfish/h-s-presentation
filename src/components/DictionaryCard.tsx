import React, { useState, useEffect } from 'react';
import { Volume2, Bookmark, BookmarkCheck, X, Sparkles, BookOpen } from 'lucide-react';
import { DictionaryEntry } from '../data/dictionary';
import { speakEnglishWord, isWordSaved, toggleSaveWord } from '../services/dictionaryService';

interface DictionaryCardProps {
  entry: DictionaryEntry | null;
  onClose: () => void;
  anchorRect?: DOMRect | null;
  isPinned: boolean;
  onPin?: () => void;
  onOpenFullGlossary?: () => void;
}

export const DictionaryCard: React.FC<DictionaryCardProps> = ({
  entry,
  onClose,
  anchorRect,
  isPinned,
  onOpenFullGlossary,
}) => {
  const [saved, setSaved] = useState(false);
  const [speaking, setSpeaking] = useState(false);

  useEffect(() => {
    if (entry) {
      setSaved(isWordSaved(entry.word));
    }
  }, [entry]);

  if (!entry) return null;

  const handleSpeak = () => {
    setSpeaking(true);
    speakEnglishWord(entry.word, 0.8);
    setTimeout(() => setSpeaking(false), 1200);
  };

  const handleToggleSave = () => {
    const newState = toggleSaveWord(entry.word);
    setSaved(newState);
  };

  // Determine desktop positioning if anchorRect is provided
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  let style: React.CSSProperties = {};
  if (!isMobile && anchorRect) {
    const top = anchorRect.bottom + 8;
    const left = Math.max(16, Math.min(window.innerWidth - 340, anchorRect.left - 40));
    style = {
      position: 'fixed',
      top: `${Math.min(window.innerHeight - 260, top)}px`,
      left: `${left}px`,
      zIndex: 50,
      width: '320px',
    };
  }

  // Mobile Bottom Sheet / Floating Card
  if (isMobile) {
    return (
      <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 backdrop-blur-xs p-3">
        <div 
          className="w-full max-w-lg bg-[#FAF8F5] dark:bg-stone-900 border border-amber-900/10 dark:border-stone-800 rounded-2xl p-5 shadow-2xl transition-all duration-200 animate-in slide-in-from-bottom-6"
          role="dialog"
          aria-label="Dictionary Definition"
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-3 border-b border-stone-200 dark:border-stone-800 pb-3">
            <div className="flex-1">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="font-serif text-2xl font-bold tracking-tight text-stone-900 dark:text-stone-100">
                  {entry.word}
                </h3>
                {entry.phonetic && (
                  <span className="font-mono text-xs text-stone-500 dark:text-stone-400">
                    {entry.phonetic}
                  </span>
                )}
                <span className="text-[11px] font-sans font-medium uppercase tracking-wider text-amber-800 dark:text-amber-400 bg-amber-100/70 dark:bg-amber-950/50 px-2 py-0.5 rounded-sm">
                  {entry.partOfSpeech}
                </span>
                {entry.isKeyTheologicalTerm && (
                  <span className="text-[11px] font-sans font-medium text-amber-700 dark:text-amber-300 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-amber-600" />
                    Key Concept
                  </span>
                )}
              </div>
            </div>

            <div className="flex items-center gap-1 shrink-0">
              <button
                onClick={handleSpeak}
                className={`p-2 rounded-lg text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-800 transition-colors ${
                  speaking ? 'text-amber-600 scale-105' : ''
                }`}
                title="Listen to pronunciation"
                aria-label="Pronounce word"
              >
                <Volume2 className="w-5 h-5" />
              </button>
              <button
                onClick={handleToggleSave}
                className={`p-2 rounded-lg transition-colors ${
                  saved ? 'text-amber-600 dark:text-amber-400' : 'text-stone-500 hover:text-stone-800 dark:text-stone-400'
                }`}
                title={saved ? 'Word Saved' : 'Save Word'}
                aria-label="Bookmark word"
              >
                {saved ? <BookmarkCheck className="w-5 h-5" /> : <Bookmark className="w-5 h-5" />}
              </button>
              <button
                onClick={onClose}
                className="p-2 rounded-lg text-stone-500 hover:text-stone-800 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-800 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Definition body */}
          <div className="pt-3 space-y-3 max-h-[60vh] overflow-y-auto">
            <div>
              <p className="text-xs font-sans uppercase tracking-wider text-amber-800 dark:text-amber-400 font-semibold mb-1">
                Easy English Definition
              </p>
              <p className="text-base text-stone-800 dark:text-stone-200 leading-snug">
                {entry.easyDefinition}
              </p>
            </div>

            {entry.biblicalNote && (
              <div className="bg-amber-50/70 dark:bg-stone-800/60 p-2.5 rounded-lg border border-amber-200/50 dark:border-stone-700/50">
                <p className="text-xs font-semibold text-amber-900 dark:text-amber-300 flex items-center gap-1.5 mb-0.5">
                  <BookOpen className="w-3.5 h-3.5" /> In the Bible & Honor-Shame Story:
                </p>
                <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed">
                  {entry.biblicalNote}
                </p>
              </div>
            )}

            <div>
              <p className="text-xs font-semibold text-stone-500 dark:text-stone-400 mb-0.5">
                Example Sentence:
              </p>
              <p className="text-xs italic text-stone-600 dark:text-stone-300 bg-stone-100 dark:bg-stone-800/80 p-2 rounded-md">
                "{entry.exampleSentence}"
              </p>
            </div>

            {onOpenFullGlossary && (
              <div className="pt-1 border-t border-stone-200 dark:border-stone-800 flex justify-between items-center text-xs text-stone-500">
                <span>Easy English Bible Dictionary</span>
                <button
                  onClick={onOpenFullGlossary}
                  className="text-amber-800 dark:text-amber-400 font-medium hover:underline"
                >
                  View All Glossary Terms →
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Desktop Floating Popover
  return (
    <div
      style={style}
      className={`bg-[#FAF8F5] dark:bg-stone-900 border border-stone-300 dark:border-stone-700 rounded-xl p-4 shadow-xl text-stone-900 dark:text-stone-100 transition-all ${
        isPinned ? 'ring-2 ring-amber-500/30' : ''
      }`}
      role="tooltip"
      onMouseEnter={(e) => e.stopPropagation()}
    >
      <div className="flex items-start justify-between gap-2 border-b border-stone-200 dark:border-stone-800 pb-2 mb-2.5">
        <div>
          <div className="flex items-baseline gap-2">
            <h4 className="font-serif text-lg font-bold text-stone-900 dark:text-stone-100">
              {entry.word}
            </h4>
            {entry.phonetic && (
              <span className="font-mono text-xs text-stone-400 dark:text-stone-500">
                {entry.phonetic}
              </span>
            )}
          </div>
          <span className="text-[10px] font-sans font-medium uppercase tracking-wider text-amber-700 dark:text-amber-400">
            {entry.partOfSpeech}
          </span>
        </div>

        <div className="flex items-center gap-0.5">
          <button
            onClick={handleSpeak}
            className={`p-1.5 rounded-md text-stone-600 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-800 transition-colors ${
              speaking ? 'text-amber-600 scale-110' : ''
            }`}
            title="Pronounce word"
          >
            <Volume2 className="w-4 h-4" />
          </button>
          <button
            onClick={handleToggleSave}
            className={`p-1.5 rounded-md transition-colors ${
              saved ? 'text-amber-600 dark:text-amber-400' : 'text-stone-400 hover:text-stone-700 dark:hover:text-stone-200'
            }`}
            title={saved ? 'Remove from saved words' : 'Save to vocabulary list'}
          >
            {saved ? <BookmarkCheck className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
          </button>
          {isPinned && (
            <button
              onClick={onClose}
              className="p-1.5 rounded-md text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 hover:bg-stone-200 dark:hover:bg-stone-800 transition-colors"
              title="Close card"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      <div className="space-y-2 text-xs">
        <div>
          <p className="font-medium text-stone-800 dark:text-stone-200 leading-snug">
            {entry.easyDefinition}
          </p>
        </div>

        {entry.biblicalNote && (
          <div className="bg-amber-50 dark:bg-stone-800/60 p-2 rounded border border-amber-200/40 dark:border-stone-700/50 text-[11px] text-stone-700 dark:text-stone-300">
            <span className="font-semibold text-amber-900 dark:text-amber-300 block mb-0.5">
              Bible Context:
            </span>
            {entry.biblicalNote}
          </div>
        )}

        <div className="text-[11px] text-stone-500 dark:text-stone-400 italic">
          "{entry.exampleSentence}"
        </div>
      </div>

      {isPinned && onOpenFullGlossary && (
        <div className="mt-3 pt-2 border-t border-stone-200 dark:border-stone-800 flex justify-end">
          <button
            onClick={onOpenFullGlossary}
            className="text-[11px] text-amber-800 dark:text-amber-400 font-medium hover:underline"
          >
            Open Full Dictionary →
          </button>
        </div>
      )}
    </div>
  );
};
