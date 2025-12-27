import { ArrowLeft, MapPin, Phone } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { mockProducts, Nursery, Product } from '../data/mockData';

interface NurseryProductsPageProps {
  nursery: Nursery;
  onBack: () => void;
  onProductClick: (product: Product) => void;
}

export function NurseryProductsPage({ nursery, onBack, onProductClick }: NurseryProductsPageProps) {
  const nurseryProducts = mockProducts.filter(p => p.nurseryId === nursery.id);

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
            <h2>Nursery Products</h2>
          </div>
        </div>
      </div>

      {/* Nursery Info */}
      <div className="max-w-md mx-auto">
        <div className="h-48 overflow-hidden bg-gray-100">
          <img
            src={nursery.image}
            alt={nursery.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="px-4 py-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-6">
            <h1 className="mb-2">{nursery.name}</h1>
            <p className="text-gray-600 mb-4">{nursery.description}</p>

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
          </div>

          {/* Products */}
          <div className="mb-4">
            <h2>Products</h2>
            <span className="text-sm text-gray-500">{nurseryProducts.length} items</span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {nurseryProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={() => onProductClick(product)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
