import { useState } from 'react';
import { Search, User, Bell } from 'lucide-react';
import { LocationSelector } from '../components/LocationSelector';
import { CategoryFilter } from '../components/CategoryFilter';
import { ProductCard } from '../components/ProductCard';
import { mockProducts, Product } from '../data/mockData';

interface HomePageProps {
  selectedLocation: string;
  onLocationChange: (location: string) => void;
  onProductClick: (product: Product) => void;
  onSearchClick: () => void;
  onProfileClick: () => void;
}

export function HomePage({ 
  selectedLocation, 
  onLocationChange, 
  onProductClick,
  onSearchClick,
  onProfileClick
}: HomePageProps) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = mockProducts.filter((product) => {
    const matchesLocation = product.district === selectedLocation;
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesLocation && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-md mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-green-900">Mridah Greens</h1>
            <div className="flex items-center gap-3">
              <button 
                onClick={onSearchClick}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <Search className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors relative">
                <Bell className="w-5 h-5 text-gray-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <button 
                onClick={onProfileClick}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <User className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Location Selector - Main USP */}
          <div className="mb-4">
            <LocationSelector 
              selectedLocation={selectedLocation}
              onLocationChange={onLocationChange}
            />
          </div>

          {/* Category Filter */}
          <CategoryFilter
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-md mx-auto px-4 py-4">
        <div className="flex items-center justify-between mb-4">
          <h2>Available Products</h2>
          <span className="text-sm text-gray-500">{filteredProducts.length} items</span>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 gap-4">
            {filteredProducts.map((product) => (
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
            <h3 className="text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-500 text-sm">
              Try changing your location or category filter
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
