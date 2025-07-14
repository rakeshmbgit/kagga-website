"use client";
import { useEffect } from "react";

interface DisclaimerModalProps {
  open: boolean;
  onClose: () => void;
}

export default function DisclaimerModal({ open, onClose }: DisclaimerModalProps) {
  useEffect(() => {
    if (!open) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Disclaimer & Tribute</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="space-y-4 text-gray-700">
            <p className="text-lg font-semibold text-red-600">Welcome!</p>
            
            <p>
              This website is my heartfelt tribute to{" "}
              <span className="font-semibold text-red-600">Mankuthimmana Kagga</span>, 
              a work that has profoundly shaped my perspective since I first encountered it in my school days.
            </p>
            
            <p>
              I truly believe that this profound wisdom deserves to be accessible to everyone, 
              and I sincerely hope these snippets offer you the same life-enriching insights 
              they've given me.
            </p>
            
            <div className="bg-gradient-to-r from-red-50 to-yellow-50 p-4 rounded-lg border-l-4 border-red-500">
              <p className="text-sm text-gray-600">
                <strong>Note:</strong> This is a personal project created out of love for Kannada literature. 
                All content is sourced from publicly available translations and interpretations. 
                For the most accurate and authoritative versions, please refer to official publications.
              </p>
            </div>
            
            <p className="text-center text-sm text-gray-500 mt-6">
              With gratitude to D.V. Gundappa and the timeless wisdom of Mankuthimmana Kagga
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 