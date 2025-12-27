import { useState } from 'react';
import { ArrowLeft, Plus, Edit, Trash2, Store } from 'lucide-react';
import { Button } from '../components/ui/button';
import { mockNurseries, Nursery } from '../data/mockData';

interface AdminPageProps {
  onBack: () => void;
  onAddNursery: () => void;
  onNurseryClick: (nursery: Nursery) => void;
}

export function AdminPage({ onBack, onAddNursery, onNurseryClick }: AdminPageProps) {
  const [nurseries, setNurseries] = useState<Nursery[]>(mockNurseries);

  const handleDelete = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (confirm('Are you sure you want to delete this nursery?')) {
      setNurseries(nurseries.filter(n => n.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-md mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                onClick={onBack}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <h2>Admin Dashboard</h2>
            </div>
            <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">
              Admin
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-md mx-auto px-4 py-6">
        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="text-2xl text-green-600 mb-1">{nurseries.length}</div>
            <div className="text-sm text-gray-600">Total Nurseries</div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="text-2xl text-green-600 mb-1">
              {nurseries.reduce((acc, n) => acc + n.products.length, 0)}
            </div>
            <div className="text-sm text-gray-600">Total Products</div>
          </div>
        </div>

        {/* Add Nursery Button */}
        <div className="mb-6">
          <Button
            onClick={onAddNursery}
            className="w-full bg-green-600 hover:bg-green-700"
          >
            <Plus className="w-5 h-5 mr-2" />
            Add New Nursery
          </Button>
        </div>

        {/* Nurseries List */}
        <div>
          <h3 className="mb-4">Manage Nurseries</h3>
          <div className="space-y-3">
            {nurseries.map((nursery) => (
              <div
                key={nursery.id}
                onClick={() => onNurseryClick(nursery)}
                className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 cursor-pointer hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-3">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden shrink-0">
                    <img
                      src={nursery.image}
                      alt={nursery.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="mb-1 truncate">{nursery.name}</h4>
                    <p className="text-sm text-gray-500 mb-2 truncate">{nursery.location}, {nursery.district}</p>
                    <div className="flex items-center gap-2 text-xs text-gray-600">
                      <Store className="w-3 h-3" />
                      <span>{nursery.products.length} products</span>
                    </div>
                  </div>
                  <div className="flex gap-1 shrink-0">
                    <button
                      onClick={(e) => handleDelete(nursery.id, e)}
                      className="p-2 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <Trash2 className="w-4 h-4 text-red-600" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
