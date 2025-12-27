import { useState } from 'react';
import { ArrowLeft, Plus, Edit, Trash2, Package } from 'lucide-react';
import { Button } from '../components/ui/button';
import { mockProducts, Nursery, Product } from '../data/mockData';

interface AdminNurseryPageProps {
  nursery: Nursery;
  onBack: () => void;
  onAddProduct: (nurseryId: string) => void;
  onEditProduct: (product: Product) => void;
}

export function AdminNurseryPage({ nursery, onBack, onAddProduct, onEditProduct }: AdminNurseryPageProps) {
  const [products, setProducts] = useState<Product[]>(
    mockProducts.filter(p => p.nurseryId === nursery.id)
  );

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this product?')) {
      setProducts(products.filter(p => p.id !== id));
    }
  };

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
            <div>
              <h2>Manage Products</h2>
              <p className="text-sm text-gray-500">{nursery.name}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-md mx-auto px-4 py-6">
        {/* Nursery Info */}
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 mb-6">
          <div className="flex gap-3">
            <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden shrink-0">
              <img
                src={nursery.image}
                alt={nursery.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="mb-1">{nursery.name}</h3>
              <p className="text-sm text-gray-500">{nursery.location}, {nursery.district}</p>
            </div>
          </div>
        </div>

        {/* Add Product Button */}
        <div className="mb-6">
          <Button
            onClick={() => onAddProduct(nursery.id)}
            className="w-full bg-green-600 hover:bg-green-700"
          >
            <Plus className="w-5 h-5 mr-2" />
            Add New Product
          </Button>
        </div>

        {/* Products List */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3>Products</h3>
            <span className="text-sm text-gray-500">{products.length} items</span>
          </div>

          {products.length > 0 ? (
            <div className="space-y-3">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-xl p-4 shadow-sm border border-gray-100"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden shrink-0">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="mb-1 truncate">{product.name}</h4>
                      <div className="text-green-600 mb-2">₹{product.price}</div>
                      <div className="flex items-center gap-2 text-xs text-gray-600">
                        <Package className="w-3 h-3" />
                        <span>{product.stock} in stock</span>
                        <span className="text-gray-400">•</span>
                        <span>{product.category}</span>
                      </div>
                    </div>
                    <div className="flex gap-1 shrink-0">
                      <button
                        onClick={() => onEditProduct(product)}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        <Edit className="w-4 h-4 text-gray-600" />
                      </button>
                      <button
                        onClick={() => handleDelete(product.id)}
                        className="p-2 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-4 h-4 text-red-600" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-xl border border-gray-100">
              <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Package className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-gray-900 mb-2">No products yet</h3>
              <p className="text-gray-500 text-sm">Add your first product to get started</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
