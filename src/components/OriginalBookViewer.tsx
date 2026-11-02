import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, FileText, Download, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';
import { BOOK_PAGES } from '../data/bookContent';

export const OriginalBookViewer: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [zoomLevel, setZoomLevel] = useState(1);

  const totalPages = BOOK_PAGES.length;
  const currentScanPath = `/book-pages/page-${String(currentPage).padStart(2, '0')}.jpg`;

  const handleNext = () => setCurrentPage(p => Math.min(totalPages, p + 1));
  const handlePrev = () => setCurrentPage(p => Math.max(1, p - 1));

  return (
    <div className="bg-[#FAF8F5] dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-4 sm:p-6 shadow-sm">
      {/* Controls Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 dark:border-stone-800 pb-4 mb-4">
        <div className="flex items-center gap-2">
          <FileText className="w-5 h-5 text-amber-700 dark:text-amber-400" />
          <h3 className="font-serif text-xl font-bold tracking-tight text-stone-900 dark:text-stone-100">
            Original Document Pages
          </h3>
          <span className="text-xs text-stone-500 font-mono ml-2">
            Page {currentPage} of {totalPages}
          </span>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          {/* Zoom Controls */}
          <div className="flex items-center bg-stone-100 dark:bg-stone-800 rounded-lg p-1 text-xs">
            <button
              onClick={() => setZoomLevel(z => Math.max(0.7, Number((z - 0.15).toFixed(2))))}
              className="p-1 text-stone-600 dark:text-stone-300 hover:text-stone-900"
              title="Zoom out"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <span className="px-2 font-mono text-stone-600 dark:text-stone-300">
              {Math.round(zoomLevel * 100)}%
            </span>
            <button
              onClick={() => setZoomLevel(z => Math.min(2.0, Number((z + 0.15).toFixed(2))))}
              className="p-1 text-stone-600 dark:text-stone-300 hover:text-stone-900"
              title="Zoom in"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            {zoomLevel !== 1 && (
              <button
                onClick={() => setZoomLevel(1)}
                className="p-1 text-stone-400 hover:text-stone-700"
                title="Reset zoom"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Download Original PDF */}
          <a
            href="/assets/aistudio/honor-shame-gospel-single_aa5929c8.pdf"
            download="honor-shame-gospel-single.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 text-xs font-medium text-stone-700 dark:text-stone-300 bg-stone-100 dark:bg-stone-800 rounded-lg hover:bg-stone-200 dark:hover:bg-stone-700 flex items-center gap-1.5 transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download PDF</span>
          </a>
        </div>
      </div>

      {/* Main Page Display */}
      <div className="relative flex flex-col items-center justify-center bg-stone-200/60 dark:bg-stone-950/80 rounded-xl p-4 sm:p-8 min-h-[480px] overflow-hidden">
        {/* Navigation arrows */}
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-10 p-2.5 rounded-full bg-white/90 dark:bg-stone-800/90 text-stone-800 dark:text-stone-200 shadow-md hover:scale-105 disabled:opacity-30 disabled:pointer-events-none transition-all"
          aria-label="Previous page"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 p-2.5 rounded-full bg-white/90 dark:bg-stone-800/90 text-stone-800 dark:text-stone-200 shadow-md hover:scale-105 disabled:opacity-30 disabled:pointer-events-none transition-all"
          aria-label="Next page"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Page Image */}
        <div
          className="transition-transform duration-200 max-w-full flex justify-center"
          style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'center center' }}
        >
          <img
            src={currentScanPath}
            alt={`Page ${currentPage} of booklet`}
            referrerPolicy="no-referrer"
            className="max-h-[75vh] w-auto rounded-lg shadow-xl border border-stone-300 dark:border-stone-800 bg-white"
          />
        </div>
      </div>

      {/* Thumbnails rail */}
      <div className="mt-4 flex items-center gap-2 overflow-x-auto py-2 px-1">
        {BOOK_PAGES.map(page => (
          <button
            key={page.pageNumber}
            onClick={() => setCurrentPage(page.pageNumber)}
            className={`shrink-0 w-14 h-20 rounded-md overflow-hidden border-2 transition-all ${
              currentPage === page.pageNumber
                ? 'border-amber-600 ring-2 ring-amber-500/30 shadow-md scale-105'
                : 'border-stone-300 dark:border-stone-700 opacity-60 hover:opacity-100'
            }`}
          >
            <img
              src={`/book-pages/page-${String(page.pageNumber).padStart(2, '0')}.jpg`}
              alt={`Page thumbnail ${page.pageNumber}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};
