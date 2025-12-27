import { useState } from 'react';
import { Search, ArrowLeft, X } from 'lucide-react';
import { Input } from '../components/ui/input';
import { ProductCard } from '../components/ProductCard';
import { mockProducts, Product } from '../data/mockData';

interface SearchPageProps {
  onBack: () => void;
  onProductClick: (product: Product) => void;
}

export function SearchPage({ onBack, onProductClick }: SearchPageProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const searchResults = mockProducts.filter((product) => {
    const query = searchQuery.toLowerCase();
    return (
      product.name.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query) ||
      product.nurseryName.toLowerCase().includes(query) ||
      product.district.toLowerCase().includes(query)
    );
  });

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-md mx-auto px-4 py-4">
          <div className="flex items-center gap-3 mb-4">
            <button
              onClick={onBack}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search plants, seeds, chemicals..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-10"
                autoFocus
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-100 rounded-full"
                >
                  <X className="w-4 h-4 text-gray-400" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Search Results */}
      <div className="max-w-md mx-auto px-4 py-4">
        {searchQuery ? (
          <>
            <div className="flex items-center justify-between mb-4">
              <h2>Search Results</h2>
              <span className="text-sm text-gray-500">{searchResults.length} items</span>
            </div>

            {searchResults.length > 0 ? (
              <div className="grid grid-cols-2 gap-4">
                {searchResults.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onClick={() => onProductClick(product)}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Search className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-gray-900 mb-2">No results found</h3>
                <p className="text-gray-500 text-sm">
                  Try different keywords
                </p>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-gray-900 mb-2">Start searching</h3>
            <p className="text-gray-500 text-sm">
              Search for plants, seeds, chemicals and more
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
