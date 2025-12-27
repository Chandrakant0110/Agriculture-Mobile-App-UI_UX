import { ArrowLeft, MapPin, Package, Phone, Store } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Product } from '../data/mockData';

interface ProductDetailsPageProps {
  product: Product;
  onBack: () => void;
  onEnquiry: (product: Product) => void;
}

export function ProductDetailsPage({ product, onBack, onEnquiry }: ProductDetailsPageProps) {
  return (
    <div className="min-h-screen bg-gray-50 pb-24">
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
            <h2>Product Details</h2>
          </div>
        </div>
      </div>

      {/* Product Image */}
      <div className="max-w-md mx-auto">
        <div className="aspect-square overflow-hidden bg-gray-100">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Product Info */}
      <div className="max-w-md mx-auto px-4 py-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-4">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h1 className="mb-2">{product.name}</h1>
              <p className="text-gray-500">{product.category}</p>
            </div>
            <div className="text-right">
              <div className="text-green-600 text-2xl">₹{product.price}</div>
            </div>
          </div>

          <div className="space-y-3 pt-4 border-t">
            <div className="flex items-center gap-3 text-gray-600">
              <Store className="w-5 h-5 text-green-600" />
              <div>
                <div className="text-sm text-gray-500">Nursery</div>
                <div>{product.nurseryName}</div>
              </div>
            </div>

            <div className="flex items-center gap-3 text-gray-600">
              <MapPin className="w-5 h-5 text-green-600" />
              <div>
                <div className="text-sm text-gray-500">Location</div>
                <div>{product.location}, {product.district}</div>
              </div>
            </div>

            <div className="flex items-center gap-3 text-gray-600">
              <Package className="w-5 h-5 text-green-600" />
              <div>
                <div className="text-sm text-gray-500">Stock Available</div>
                <div>{product.stock} units</div>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="mb-3">Description</h3>
          <p className="text-gray-600 leading-relaxed">{product.description}</p>
        </div>
      </div>

      {/* Fixed Bottom Action */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40">
        <div className="max-w-md mx-auto px-4 py-4">
          <Button
            onClick={() => onEnquiry(product)}
            className="w-full bg-green-600 hover:bg-green-700 h-12"
          >
            Make Enquiry
          </Button>
        </div>
      </div>
    </div>
  );
}
