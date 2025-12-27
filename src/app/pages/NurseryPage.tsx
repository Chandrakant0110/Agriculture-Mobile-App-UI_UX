import { useState } from 'react';
import { ArrowLeft, MapPin, Phone, ChevronRight } from 'lucide-react';
import { mockNurseries, Nursery } from '../data/mockData';

interface NurseryPageProps {
  onBack: () => void;
  onNurseryClick: (nursery: Nursery) => void;
}

export function NurseryPage({ onBack, onNurseryClick }: NurseryPageProps) {
  const [nurseries] = useState<Nursery[]>(mockNurseries);

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-md mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <button
              onClick={onBack}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h2>All Nurseries</h2>
          </div>
        </div>
      </div>

      <div className="max-w-md mx-auto px-4 py-6">
        <div className="mb-4">
          <span className="text-sm text-gray-500">{nurseries.length} nurseries available</span>
        </div>

        <div className="space-y-4">
          {nurseries.map((nursery) => (
            <div
              key={nursery.id}
              onClick={() => onNurseryClick(nursery)}
              className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 cursor-pointer hover:shadow-md transition-shadow"
            >
              <div className="h-40 overflow-hidden bg-gray-100">
                <img
                  src={nursery.image}
                  alt={nursery.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h3 className="mb-1">{nursery.name}</h3>
                    <p className="text-sm text-gray-500 mb-3">{nursery.description}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400 shrink-0 ml-2" />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4 text-green-600" />
                    <span>{nursery.location}, {nursery.district}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Phone className="w-4 h-4 text-green-600" />
                    <span>{nursery.contactNumber}</span>
                  </div>
                </div>

                <div className="mt-3 pt-3 border-t">
                  <span className="text-sm text-gray-500">
                    {nursery.products.length} products available
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
