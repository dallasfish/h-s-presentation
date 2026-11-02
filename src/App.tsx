/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  BookOpen,
  Volume2,
  VolumeX,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Sun,
  Moon,
  Bookmark,
  Languages,
  RotateCcw,
  BookMarked,
  Share2,
  Check,
} from 'lucide-react';

import { BOOK_PAGES, BookPage } from './data/bookContent';
import { DictionaryEntry } from './data/dictionary';
import { InteractiveText } from './components/InteractiveText';
import { DictionaryCard } from './components/DictionaryCard';
import { GlossaryModal } from './components/GlossaryModal';
import { PrayerGuide } from './components/PrayerGuide';
import { OriginalBookViewer } from './components/OriginalBookViewer';
import { speakEnglishWord, stopSpeaking, getSavedWords } from './services/dictionaryService';

export default function App() {
  // Navigation & View mode
  const [activeTab, setActiveTab] = useState<'reader' | 'pages' | 'prayer' | 'original'>('reader');
  const [currentPageIndex, setCurrentPageIndex] = useState<number>(0);

  // Dictionary interaction state
  const [activeWordEntry, setActiveWordEntry] = useState<DictionaryEntry | null>(null);
  const [hoverWordEntry, setHoverWordEntry] = useState<DictionaryEntry | null>(null);
  const [anchorRect, setAnchorRect] = useState<DOMRect | null>(null);
  const [isGlossaryOpen, setIsGlossaryOpen] = useState(false);
  const [glossaryInitialFilter, setGlossaryInitialFilter] = useState<'all' | 'key' | 'saved'>('all');

  // English learner settings
  const [highlightKeyTerms, setHighlightKeyTerms] = useState(true);
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal');
  const [savedWordsCount, setSavedWordsCount] = useState(0);

  // Audio player state
  const [isPlayingSection, setIsPlayingSection] = useState(false);
  const [currentAudioIndex, setCurrentAudioIndex] = useState<number | null>(null);

  // Dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  // Sync saved words count
  useEffect(() => {
    setSavedWordsCount(getSavedWords().length);
  }, [activeWordEntry, isGlossaryOpen]);

  // Sync dark mode class on document element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Handle word selection
  const handleSelectWord = (entry: DictionaryEntry, rect?: DOMRect) => {
    setActiveWordEntry(entry);
    setHoverWordEntry(null);
    if (rect) setAnchorRect(rect);
  };

  const handleHoverWord = (entry: DictionaryEntry | null, rect?: DOMRect) => {
    // Only update hover if not currently viewing a clicked/pinned word on desktop
    if (!activeWordEntry) {
      setHoverWordEntry(entry);
      if (rect) setAnchorRect(rect);
    }
  };

  const handleCloseDictionary = () => {
    setActiveWordEntry(null);
    setHoverWordEntry(null);
    setAnchorRect(null);
  };

  // Section Audio Player
  const handlePlaySectionAudio = (pageIndex: number) => {
    const page = BOOK_PAGES[pageIndex];
    if (!page) return;

    if (isPlayingSection && currentAudioIndex === pageIndex) {
      stopSpeaking();
      setIsPlayingSection(false);
      setCurrentAudioIndex(null);
    } else {
      stopSpeaking();
      setIsPlayingSection(true);
      setCurrentAudioIndex(pageIndex);
      speakEnglishWord(page.audioText, 0.85);

      // approximate speech length
      const words = page.audioText.split(' ').length;
      const durationMs = (words / 2.0) * 1000;
      setTimeout(() => {
        setIsPlayingSection(false);
        setCurrentAudioIndex(null);
      }, durationMs);
    }
  };

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: 'What Do Christians Believe About Family of God?',
          text: 'An Easy English reader for the Honor-Shame Gospel story by Lewis Ikeda.',
          url: window.location.href,
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        setCopiedLink(true);
        setTimeout(() => setCopiedLink(false), 2000);
      }
    } catch {
      // Fallback
    }
  };

  const currentDisplayEntry = activeWordEntry || hoverWordEntry;

  // Font size classes
  const fontSizes = {
    normal: 'text-base sm:text-lg leading-relaxed',
    large: 'text-lg sm:text-xl leading-relaxed sm:leading-loose',
    xlarge: 'text-xl sm:text-2xl leading-loose',
  };

  return (
    <div className={`min-h-screen bg-[#FBF9F5] dark:bg-stone-950 text-stone-900 dark:text-stone-100 transition-colors font-sans`}>
      {/* =========================================================================
          Top Bar Contract (Section 2)
          [Brand wordmark, 1 line] - [4-5 single-line nav links] - [1 primary action]
          ========================================================================= */}
      <header className="sticky top-0 z-40 bg-[#FBF9F5]/90 dark:bg-stone-950/90 backdrop-blur-md border-b border-stone-200/80 dark:border-stone-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-8">
          {/* Zone 1: Single text element wordmark */}
          <button
            onClick={() => {
              setActiveTab('reader');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-stone-900 dark:text-stone-100 whitespace-nowrap shrink-0 hover:text-amber-800 dark:hover:text-amber-400 transition-colors"
          >
            Family of God
          </button>

          {/* Zone 2: 4-5 concise single-line nav links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-stone-600 dark:text-stone-300">
            <button
              onClick={() => setActiveTab('reader')}
              className={`hover:text-stone-900 dark:hover:text-stone-100 transition-colors whitespace-nowrap shrink-0 ${
                activeTab === 'reader'
                  ? 'text-amber-800 dark:text-amber-400 font-semibold border-b-2 border-amber-700 pb-0.5'
                  : ''
              }`}
            >
              Story Reader
            </button>
            <button
              onClick={() => setActiveTab('pages')}
              className={`hover:text-stone-900 dark:hover:text-stone-100 transition-colors whitespace-nowrap shrink-0 ${
                activeTab === 'pages'
                  ? 'text-amber-800 dark:text-amber-400 font-semibold border-b-2 border-amber-700 pb-0.5'
                  : ''
              }`}
            >
              Page-by-Page
            </button>
            <button
              onClick={() => setActiveTab('prayer')}
              className={`hover:text-stone-900 dark:hover:text-stone-100 transition-colors whitespace-nowrap shrink-0 ${
                activeTab === 'prayer'
                  ? 'text-amber-800 dark:text-amber-400 font-semibold border-b-2 border-amber-700 pb-0.5'
                  : ''
              }`}
            >
              Prayer of Faith
            </button>
            <button
              onClick={() => {
                setGlossaryInitialFilter('all');
                setIsGlossaryOpen(true);
              }}
              className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5"
            >
              <BookOpen className="w-4 h-4 text-amber-700 dark:text-amber-400" />
              Easy Dictionary
            </button>
            <button
              onClick={() => setActiveTab('original')}
              className={`hover:text-stone-900 dark:hover:text-stone-100 transition-colors whitespace-nowrap shrink-0 ${
                activeTab === 'original'
                  ? 'text-amber-800 dark:text-amber-400 font-semibold border-b-2 border-amber-700 pb-0.5'
                  : ''
              }`}
            >
              Original Booklet
            </button>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-2.5 shrink-0">
            <button
              onClick={() => {
                setGlossaryInitialFilter('saved');
                setIsGlossaryOpen(true);
              }}
              className="px-3 py-1.5 text-xs font-medium text-stone-700 dark:text-stone-200 bg-stone-100 dark:bg-stone-800 rounded-lg hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5"
              title="View my saved English vocabulary"
            >
              <Bookmark className="w-3.5 h-3.5 text-amber-600" />
              <span>Vocabulary ({savedWordsCount})</span>
            </button>

            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-lg text-stone-600 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-800 transition-colors shrink-0"
              title={isDarkMode ? 'Switch to Warm Paper Mode' : 'Switch to Night Mode'}
              aria-label="Toggle color theme"
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Bar */}
        <div className="flex md:hidden items-center justify-around border-t border-stone-200/60 dark:border-stone-800/80 px-2 py-2 text-xs font-medium text-stone-600 dark:text-stone-300 bg-stone-50/50 dark:bg-stone-900/50">
          <button
            onClick={() => setActiveTab('reader')}
            className={`px-2 py-1 rounded ${activeTab === 'reader' ? 'text-amber-800 dark:text-amber-400 font-bold' : ''}`}
          >
            Story
          </button>
          <button
            onClick={() => setActiveTab('pages')}
            className={`px-2 py-1 rounded ${activeTab === 'pages' ? 'text-amber-800 dark:text-amber-400 font-bold' : ''}`}
          >
            Pages
          </button>
          <button
            onClick={() => setActiveTab('prayer')}
            className={`px-2 py-1 rounded ${activeTab === 'prayer' ? 'text-amber-800 dark:text-amber-400 font-bold' : ''}`}
          >
            Prayer
          </button>
          <button
            onClick={() => {
              setGlossaryInitialFilter('all');
              setIsGlossaryOpen(true);
            }}
            className="px-2 py-1 rounded flex items-center gap-1"
          >
            <BookOpen className="w-3.5 h-3.5 text-amber-600" />
            Dictionary
          </button>
          <button
            onClick={() => setActiveTab('original')}
            className={`px-2 py-1 rounded ${activeTab === 'original' ? 'text-amber-800 dark:text-amber-400 font-bold' : ''}`}
          >
            Original
          </button>
        </div>
      </header>

      {/* English Learner Interactive Helper Ribbon */}
      <section className="bg-amber-50/60 dark:bg-stone-900/70 border-b border-amber-200/50 dark:border-stone-800 py-2.5 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs text-stone-700 dark:text-stone-300">
          {/* Quick Helper Indicator */}
          <div className="flex items-center gap-2">
            <span className="font-semibold text-amber-900 dark:text-amber-400 flex items-center gap-1.5">
              <Languages className="w-4 h-4 text-amber-700" /> English Learner Mode:
            </span>
            <span className="hidden sm:inline text-stone-600 dark:text-stone-400">
              Hover on desktop or tap any word on mobile for instant Easy English definition & audio.
            </span>
            <span className="inline sm:hidden text-stone-600 dark:text-stone-400">
              Tap any word for instant definitions!
            </span>
          </div>

          {/* Quick Settings */}
          <div className="flex items-center gap-3 ml-auto">
            {/* Toggle Highlight Key Terms */}
            <label className="flex items-center gap-1.5 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={highlightKeyTerms}
                onChange={(e) => setHighlightKeyTerms(e.target.checked)}
                className="w-3.5 h-3.5 accent-amber-600 rounded"
              />
              <span className="text-[11px] font-medium flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-amber-600" /> Underline Key Concepts
              </span>
            </label>

            <span className="text-stone-300 dark:text-stone-700">|</span>

            {/* Font size control */}
            <div className="flex items-center gap-1">
              <span className="text-[11px] text-stone-500">Text:</span>
              <button
                onClick={() => setFontSize('normal')}
                className={`px-1.5 py-0.5 rounded text-[11px] ${
                  fontSize === 'normal' ? 'bg-amber-200/80 dark:bg-amber-900/60 font-bold text-amber-950 dark:text-amber-200' : 'hover:bg-stone-200 dark:hover:bg-stone-800'
                }`}
                title="Normal text size"
              >
                A
              </button>
              <button
                onClick={() => setFontSize('large')}
                className={`px-1.5 py-0.5 rounded text-xs ${
                  fontSize === 'large' ? 'bg-amber-200/80 dark:bg-amber-900/60 font-bold text-amber-950 dark:text-amber-200' : 'hover:bg-stone-200 dark:hover:bg-stone-800'
                }`}
                title="Large text size"
              >
                A+
              </button>
              <button
                onClick={() => setFontSize('xlarge')}
                className={`px-1.5 py-0.5 rounded text-sm ${
                  fontSize === 'xlarge' ? 'bg-amber-200/80 dark:bg-amber-900/60 font-bold text-amber-950 dark:text-amber-200' : 'hover:bg-stone-200 dark:hover:bg-stone-800'
                }`}
                title="Extra large text size"
              >
                A++
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* =========================================================================
            TAB 1: CONTINUOUS STORY READER (Editorial Museum Standard)
            ========================================================================= */}
        {activeTab === 'reader' && (
          <div className="space-y-16">
            {/* Editorial Book Title & Hero Banner */}
            <div className="text-center space-y-4 border-b border-stone-200 dark:border-stone-800 pb-12">
              <div className="text-xs uppercase tracking-widest text-amber-800 dark:text-amber-400 font-sans font-semibold">
                An Honor-Shame Gospel Presentation · Easy English Edition
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-stone-900 dark:text-stone-100 max-w-2xl mx-auto leading-tight text-balance">
                What Do Christians Believe About Family of God?
              </h1>

              <div className="text-sm font-sans text-stone-600 dark:text-stone-400 flex items-center justify-center gap-2">
                <span>By Lewis Ikeda</span>
                <span>·</span>
                <span>11 Chapters</span>
                <span>·</span>
                <span>Instant Dictionary Enabled</span>
              </div>

              {/* Reader Action Ribbon */}
              <div className="pt-2 flex items-center justify-center gap-3">
                <button
                  onClick={() => handlePlaySectionAudio(0)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all ${
                    isPlayingSection && currentAudioIndex === 0
                      ? 'bg-amber-600 text-white shadow-md'
                      : 'bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 hover:bg-stone-800'
                  }`}
                >
                  {isPlayingSection && currentAudioIndex === 0 ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  {isPlayingSection && currentAudioIndex === 0 ? 'Pause Audio' : 'Listen from Beginning'}
                </button>

                <button
                  onClick={handleShare}
                  className="px-4 py-2 rounded-xl text-xs font-medium border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 text-stone-700 dark:text-stone-300 hover:bg-stone-50 flex items-center gap-1.5 transition-colors"
                >
                  {copiedLink ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
                  <span>{copiedLink ? 'Link Copied' : 'Share'}</span>
                </button>
              </div>
            </div>

            {/* Chapters Flow */}
            <div className="space-y-20">
              {BOOK_PAGES.map((page, index) => {
                const isCurrentAudio = isPlayingSection && currentAudioIndex === index;

                return (
                  <article
                    key={page.pageNumber}
                    id={`chapter-${page.pageNumber}`}
                    className="relative scroll-mt-24 space-y-6"
                  >
                    {/* Chapter Header */}
                    <div className="flex items-center justify-between gap-4 border-b border-stone-200/80 dark:border-stone-800 pb-3">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs text-stone-400 dark:text-stone-500 font-semibold">
                          {String(page.pageNumber).padStart(2, '0')}.
                        </span>
                        <h2 className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-stone-900 dark:text-stone-100">
                          {page.title}
                        </h2>
                      </div>

                      {/* Listen to Section Button */}
                      <button
                        onClick={() => handlePlaySectionAudio(index)}
                        className={`p-2 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all ${
                          isCurrentAudio
                            ? 'bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 ring-1 ring-amber-500/40'
                            : 'text-stone-500 hover:text-stone-900 dark:hover:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800'
                        }`}
                        title="Read this section aloud in English"
                      >
                        <Volume2 className={`w-4 h-4 ${isCurrentAudio ? 'animate-pulse text-amber-600' : ''}`} />
                        <span className="hidden sm:inline">
                          {isCurrentAudio ? 'Reading...' : 'Listen'}
                        </span>
                      </button>
                    </div>

                    {/* Prose Paragraphs with Drop Caps on first page */}
                    <div className={`font-serif text-stone-800 dark:text-stone-200 space-y-5 ${fontSizes[fontSize]}`}>
                      {page.paragraphs.map((p, pIdx) => {
                        return (
                          <p key={pIdx} className="leading-relaxed">
                            <InteractiveText
                              text={p}
                              onSelectWord={handleSelectWord}
                              onHoverWord={handleHoverWord}
                              highlightKeyTerms={highlightKeyTerms}
                            />
                          </p>
                        );
                      })}
                    </div>

                    {/* Embedded Illustration if available */}
                    {page.illustration && (
                      <div className="my-8 rounded-2xl overflow-hidden border border-stone-200 dark:border-stone-800 bg-stone-100 dark:bg-stone-900 shadow-xs">
                        <div className="flex justify-center bg-stone-50/50 dark:bg-stone-950/40 p-4">
                          <img
                            src={page.illustration.src}
                            alt={page.illustration.alt}
                            referrerPolicy="no-referrer"
                            className="max-h-[380px] w-auto object-contain rounded-lg shadow-sm"
                          />
                        </div>
                        <div className="p-3 text-center border-t border-stone-200/80 dark:border-stone-800 bg-white/70 dark:bg-stone-900">
                          <p className="font-serif italic text-xs text-stone-600 dark:text-stone-400">
                            {page.illustration.caption}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Scripture Verses Callout Card */}
                    {page.scriptures && page.scriptures.length > 0 && (
                      <div className="my-6 bg-stone-100/70 dark:bg-stone-900/60 border border-stone-200/90 dark:border-stone-800 rounded-xl p-5 space-y-4">
                        <div className="text-[11px] font-sans font-semibold uppercase tracking-wider text-amber-800 dark:text-amber-400 flex items-center gap-1.5">
                          <BookOpen className="w-3.5 h-3.5" /> Holy Scripture Foundations
                        </div>

                        <div className="space-y-3">
                          {page.scriptures.map((verse, vIdx) => (
                            <div key={vIdx} className="border-l-2 border-amber-600/70 pl-3 py-0.5">
                              <p className="font-serif italic text-stone-800 dark:text-stone-200 text-sm sm:text-base leading-relaxed">
                                “
                                <InteractiveText
                                  text={verse.text.replace(/^[“"]|[”"]$/g, '')}
                                  onSelectWord={handleSelectWord}
                                  onHoverWord={handleHoverWord}
                                  highlightKeyTerms={highlightKeyTerms}
                                />
                                ”
                              </p>
                              <p className="text-xs font-sans font-semibold text-stone-500 dark:text-stone-400 mt-1">
                                — {verse.reference}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Interactive prayer box for Page 10 */}
                    {page.pageNumber === 10 && (
                      <div className="mt-8">
                        <PrayerGuide
                          onSelectWord={handleSelectWord}
                          onHoverWord={handleHoverWord}
                          highlightKeyTerms={highlightKeyTerms}
                        />
                      </div>
                    )}
                  </article>
                );
              })}
            </div>

            {/* End of Story Footer */}
            <div className="pt-12 border-t border-stone-200 dark:border-stone-800 text-center space-y-4">
              <div className="font-serif text-2xl font-bold text-stone-900 dark:text-stone-100">
                You Are Welcome in the Family of God
              </div>
              <p className="text-sm text-stone-600 dark:text-stone-400 max-w-lg mx-auto">
                "Whoever believes in Him will never be put to shame."
              </p>

              <div className="flex items-center justify-center gap-3 pt-4">
                <button
                  onClick={() => {
                    setGlossaryInitialFilter('all');
                    setIsGlossaryOpen(true);
                  }}
                  className="px-4 py-2 bg-amber-700 hover:bg-amber-800 text-white text-xs font-semibold rounded-xl flex items-center gap-2 transition-all shadow-sm"
                >
                  <BookOpen className="w-4 h-4" />
                  Review Easy Bible Dictionary
                </button>
                <button
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-4 py-2 bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200 text-xs font-medium rounded-xl flex items-center gap-1.5 transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Back to Top
                </button>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            TAB 2: PAGE-BY-PAGE SLIDER MODE
            ========================================================================= */}
        {activeTab === 'pages' && (
          <div className="space-y-6">
            {/* Page Header and Navigation */}
            <div className="flex items-center justify-between gap-4 border-b border-stone-200 dark:border-stone-800 pb-4">
              <div>
                <span className="text-xs font-mono text-stone-500 uppercase tracking-widest">
                  Page {currentPageIndex + 1} of {BOOK_PAGES.length}
                </span>
                <h2 className="font-serif text-2xl font-bold text-stone-900 dark:text-stone-100">
                  {BOOK_PAGES[currentPageIndex].title}
                </h2>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrentPageIndex(p => Math.max(0, p - 1))}
                  disabled={currentPageIndex === 0}
                  className="p-2 rounded-lg border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 disabled:opacity-30 disabled:pointer-events-none hover:bg-stone-100"
                  aria-label="Previous Page"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setCurrentPageIndex(p => Math.min(BOOK_PAGES.length - 1, p + 1))}
                  disabled={currentPageIndex === BOOK_PAGES.length - 1}
                  className="p-2 rounded-lg border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 disabled:opacity-30 disabled:pointer-events-none hover:bg-stone-100"
                  aria-label="Next Page"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Current Page Content Card */}
            <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-6 sm:p-10 shadow-sm space-y-6">
              {/* Audio Listen Button */}
              <div className="flex justify-end">
                <button
                  onClick={() => handlePlaySectionAudio(currentPageIndex)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all ${
                    isPlayingSection && currentAudioIndex === currentPageIndex
                      ? 'bg-amber-600 text-white'
                      : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200'
                  }`}
                >
                  <Volume2 className="w-4 h-4" />
                  {isPlayingSection && currentAudioIndex === currentPageIndex ? 'Pause Audio' : 'Listen to Page'}
                </button>
              </div>

              {/* Text */}
              <div className={`font-serif text-stone-800 dark:text-stone-200 space-y-4 ${fontSizes[fontSize]}`}>
                {BOOK_PAGES[currentPageIndex].paragraphs.map((p, idx) => (
                  <p key={idx} className="leading-relaxed">
                    <InteractiveText
                      text={p}
                      onSelectWord={handleSelectWord}
                      onHoverWord={handleHoverWord}
                      highlightKeyTerms={highlightKeyTerms}
                    />
                  </p>
                ))}
              </div>

              {/* Illustration if any */}
              {BOOK_PAGES[currentPageIndex].illustration && (
                <div className="my-6 rounded-xl overflow-hidden border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-950 p-4 text-center">
                  <img
                    src={BOOK_PAGES[currentPageIndex].illustration!.src}
                    alt={BOOK_PAGES[currentPageIndex].illustration!.alt}
                    referrerPolicy="no-referrer"
                    className="max-h-[340px] w-auto mx-auto object-contain rounded-lg"
                  />
                  <p className="font-serif italic text-xs text-stone-500 mt-2">
                    {BOOK_PAGES[currentPageIndex].illustration!.caption}
                  </p>
                </div>
              )}

              {/* Scriptures */}
              {BOOK_PAGES[currentPageIndex].scriptures && BOOK_PAGES[currentPageIndex].scriptures!.length > 0 && (
                <div className="mt-6 bg-amber-50/60 dark:bg-stone-800/60 p-4 rounded-xl border border-amber-200/50 dark:border-stone-700/60 space-y-3">
                  <div className="text-[11px] font-sans font-semibold uppercase tracking-wider text-amber-800 dark:text-amber-400">
                    Scripture Verse
                  </div>
                  {BOOK_PAGES[currentPageIndex].scriptures!.map((s, idx) => (
                    <div key={idx}>
                      <p className="font-serif italic text-sm text-stone-800 dark:text-stone-200">
                        “
                        <InteractiveText
                          text={s.text.replace(/^[“"]|[”"]$/g, '')}
                          onSelectWord={handleSelectWord}
                          onHoverWord={handleHoverWord}
                          highlightKeyTerms={highlightKeyTerms}
                        />
                        ”
                      </p>
                      <p className="text-xs font-semibold text-stone-500 mt-0.5">— {s.reference}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Page 10 Prayer Guide */}
              {currentPageIndex === 9 && (
                <div className="mt-6">
                  <PrayerGuide
                    onSelectWord={handleSelectWord}
                    onHoverWord={handleHoverWord}
                    highlightKeyTerms={highlightKeyTerms}
                  />
                </div>
              )}
            </div>

            {/* Page thumbnails selector */}
            <div className="flex items-center gap-2 overflow-x-auto py-2">
              {BOOK_PAGES.map((page, idx) => (
                <button
                  key={page.pageNumber}
                  onClick={() => setCurrentPageIndex(idx)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono shrink-0 transition-colors ${
                    currentPageIndex === idx
                      ? 'bg-amber-700 text-white font-bold'
                      : 'bg-stone-200 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-300'
                  }`}
                >
                  Page {page.pageNumber}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* =========================================================================
            TAB 3: PRAYER OF FAITH
            ========================================================================= */}
        {activeTab === 'prayer' && (
          <div className="space-y-6">
            <PrayerGuide
              onSelectWord={handleSelectWord}
              onHoverWord={handleHoverWord}
              highlightKeyTerms={highlightKeyTerms}
            />
          </div>
        )}

        {/* =========================================================================
            TAB 4: ORIGINAL BOOKLET VIEWER
            ========================================================================= */}
        {activeTab === 'original' && (
          <div className="space-y-6">
            <OriginalBookViewer />
          </div>
        )}
      </main>

      {/* Instant Dictionary Floating Popover or Mobile Drawer */}
      {currentDisplayEntry && (
        <DictionaryCard
          entry={currentDisplayEntry}
          onClose={handleCloseDictionary}
          anchorRect={anchorRect}
          isPinned={!!activeWordEntry}
          onOpenFullGlossary={() => {
            setIsGlossaryOpen(true);
            setGlossaryInitialFilter('all');
          }}
        />
      )}

      {/* Full Easy English Bible Dictionary & Flashcards Modal */}
      <GlossaryModal
        isOpen={isGlossaryOpen}
        onClose={() => setIsGlossaryOpen(false)}
        initialFilter={glossaryInitialFilter}
        onSelectWord={(entry) => {
          setActiveWordEntry(entry);
          setIsGlossaryOpen(false);
        }}
      />

      {/* Editorial Footer */}
      <footer className="mt-20 border-t border-stone-200 dark:border-stone-800 bg-stone-100/50 dark:bg-stone-950/40 py-8 px-4 sm:px-6 text-xs text-stone-500">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-serif font-bold text-stone-800 dark:text-stone-200">
              Family of God
            </span>
            <span>·</span>
            <span>Honor-Shame Gospel Presentation</span>
            <span>·</span>
            <span>By Lewis Ikeda</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => {
                setGlossaryInitialFilter('all');
                setIsGlossaryOpen(true);
              }}
              className="hover:text-stone-800 dark:hover:text-stone-200 underline"
            >
              Easy English Dictionary
            </button>
            <button
              onClick={() => setActiveTab('original')}
              className="hover:text-stone-800 dark:hover:text-stone-200 underline"
            >
              Original Booklet Scans
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
