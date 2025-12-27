import { MapPin, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { districts } from '../data/mockData';

interface LocationSelectorProps {
  selectedLocation: string;
  onLocationChange: (location: string) => void;
}

export function LocationSelector({ selectedLocation, onLocationChange }: LocationSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full border border-green-200 hover:bg-green-100 transition-colors"
      >
        <MapPin className="w-5 h-5 text-green-600" />
        <span className="text-green-900">{selectedLocation}</span>
        <ChevronDown className={`w-4 h-4 text-green-600 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute top-full mt-2 left-0 right-0 bg-white rounded-lg shadow-lg border border-gray-200 z-50 max-h-64 overflow-y-auto">
            {districts.map((district) => (
              <button
                key={district}
                onClick={() => {
                  onLocationChange(district);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors ${
                  selectedLocation === district ? 'bg-green-50 text-green-700' : ''
                }`}
              >
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{district}</span>
                </div>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
