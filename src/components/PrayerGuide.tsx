import React, { useState } from 'react';
import { Volume2, Heart, Check, Sparkles } from 'lucide-react';
import { speakEnglishWord, stopSpeaking } from '../services/dictionaryService';
import { InteractiveText } from './InteractiveText';
import { DictionaryEntry } from '../data/dictionary';

interface PrayerLine {
  line: string;
  simpleMeaning: string;
}

const PRAYER_LINES: PrayerLine[] = [
  {
    line: "Our Father in heaven, we have sinned against you, bringing shame upon you and ourselves.",
    simpleMeaning: "We tell God that we have failed and disrespected His goodness, feeling the heavy burden of shame."
  },
  {
    line: "I admit that I cannot save myself. Save us from our sins.",
    simpleMeaning: "We humbly admit we do not have the power to fix our brokenness alone. We need God's rescue."
  },
  {
    line: "Thank you for sending Jesus, our King, to remove the shame of our sin.",
    simpleMeaning: "We thank God for sending Jesus, who took away our disgrace on the cross."
  },
  {
    line: "Thank you for your plan to restore our honor. Thank you for welcoming us to join your family.",
    simpleMeaning: "God replaces our shame with royal honor and adopts us into His beloved household."
  },
  {
    line: "We believe in the death of Jesus and his resurrection for our sins.",
    simpleMeaning: "We put all our trust in Jesus who died and rose again to give us eternal life."
  },
  {
    line: "Help us through the Holy Spirit to live a life of love, joy, peace, and kindness.",
    simpleMeaning: "We ask the Holy Spirit to fill our daily hearts and teach us how to love like Jesus."
  },
  {
    line: "In Jesus' name we pray, Amen.",
    simpleMeaning: "We seal this prayer with the name and authority of Jesus. Truly, let it be so!"
  }
];

interface PrayerGuideProps {
  onSelectWord: (entry: DictionaryEntry, rect?: DOMRect) => void;
  onHoverWord: (entry: DictionaryEntry | null, rect?: DOMRect) => void;
  highlightKeyTerms: boolean;
}

export const PrayerGuide: React.FC<PrayerGuideProps> = ({
  onSelectWord,
  onHoverWord,
  highlightKeyTerms,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [completedLines, setCompletedLines] = useState<number[]>([]);
  const [activeLine, setActiveLine] = useState<number | null>(null);

  const fullPrayer = PRAYER_LINES.map(p => p.line).join(' ');

  const handleReadAloud = () => {
    if (isPlaying) {
      stopSpeaking();
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
      speakEnglishWord(fullPrayer, 0.78);
      // approximate duration based on word count
      const duration = (fullPrayer.split(' ').length / 1.8) * 1000;
      setTimeout(() => setIsPlaying(false), duration);
    }
  };

  const toggleLineCompleted = (idx: number) => {
    setCompletedLines(prev =>
      prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]
    );
  };

  return (
    <div className="bg-[#FAF8F4] dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-6 sm:p-8 shadow-sm">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-stone-200 dark:border-stone-800 pb-5 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-amber-700 dark:text-amber-400" />
            <h3 className="font-serif text-2xl font-bold tracking-tight text-stone-900 dark:text-stone-100">
              The Prayer of Faith & Restoration
            </h3>
          </div>
          <p className="text-xs text-stone-600 dark:text-stone-400 mt-1">
            Accept Jesus' invitation to join the family of God. Read or listen line-by-line.
          </p>
        </div>

        <button
          onClick={handleReadAloud}
          className={`px-4 py-2 text-xs font-semibold rounded-lg flex items-center gap-2 transition-all ${
            isPlaying
              ? 'bg-amber-600 text-white shadow-sm'
              : 'bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 hover:bg-stone-800'
          }`}
        >
          <Volume2 className="w-4 h-4" />
          {isPlaying ? 'Pause Audio' : 'Listen to Prayer Aloud'}
        </button>
      </div>

      <div className="space-y-4">
        {PRAYER_LINES.map((item, idx) => {
          const isDone = completedLines.includes(idx);
          const isSelected = activeLine === idx;

          return (
            <div
              key={idx}
              onClick={() => setActiveLine(idx)}
              className={`p-4 rounded-xl border transition-all ${
                isSelected
                  ? 'border-amber-500 bg-white dark:bg-stone-800/90 shadow-sm'
                  : 'border-stone-200/80 dark:border-stone-800 bg-stone-50/70 dark:bg-stone-950/40 hover:border-stone-300'
              }`}
            >
              <div className="flex items-start gap-3">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleLineCompleted(idx);
                  }}
                  className={`mt-1 w-5 h-5 rounded flex items-center justify-center border transition-colors shrink-0 ${
                    isDone
                      ? 'bg-emerald-600 border-emerald-600 text-white'
                      : 'border-stone-300 dark:border-stone-700 hover:border-amber-500 text-transparent'
                  }`}
                  title={isDone ? 'Marked as prayed' : 'Mark as prayed'}
                >
                  <Check className="w-3.5 h-3.5" />
                </button>

                <div className="flex-1">
                  <div className="font-serif text-base sm:text-lg text-stone-900 dark:text-stone-100 leading-relaxed">
                    <InteractiveText
                      text={item.line}
                      onSelectWord={onSelectWord}
                      onHoverWord={onHoverWord}
                      highlightKeyTerms={highlightKeyTerms}
                    />
                  </div>

                  <div className="mt-2 text-xs text-stone-600 dark:text-stone-400 flex items-start gap-1.5">
                    <Sparkles className="w-3 h-3 text-amber-600 shrink-0 mt-0.5" />
                    <span><strong className="text-stone-700 dark:text-stone-300">Easy Meaning:</strong> {item.simpleMeaning}</span>
                  </div>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    speakEnglishWord(item.line, 0.8);
                  }}
                  className="p-1.5 text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 rounded-md shrink-0"
                  title="Pronounce this line"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 pt-5 border-t border-stone-200 dark:border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-500">
        <div>
          {completedLines.length} of {PRAYER_LINES.length} lines prayed
        </div>
        <div className="text-stone-600 dark:text-stone-400 italic">
          "Whoever believes in Him will never be put to shame."
        </div>
      </div>
    </div>
  );
};
