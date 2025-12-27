import { useState } from 'react';
import { ArrowLeft, Upload } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { categories, Product } from '../data/mockData';

interface AdminProductPageProps {
  onBack: () => void;
  onSave: () => void;
  existingProduct?: Product;
  nurseryId?: string;
}

export function AdminProductPage({ onBack, onSave, existingProduct, nurseryId }: AdminProductPageProps) {
  const isEdit = !!existingProduct;
  
  const [formData, setFormData] = useState({
    name: existingProduct?.name || '',
    price: existingProduct?.price.toString() || '',
    category: existingProduct?.category || '',
    stock: existingProduct?.stock.toString() || '',
    description: existingProduct?.description || ''
  });

  const handleSave = () => {
    if (formData.name && formData.price && formData.category && formData.stock) {
      onSave();
    }
  };

  const isValid = formData.name && formData.price && formData.category && formData.stock;

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
            <h2>{isEdit ? 'Edit Product' : 'Add Product'}</h2>
          </div>
        </div>
      </div>

      <div className="max-w-md mx-auto px-4 py-6">
        {/* Product Image Upload */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-6">
          <label className="block text-sm text-gray-700 mb-3">Product Image</label>
          <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors">
            {existingProduct?.image ? (
              <img
                src={existingProduct.image}
                alt="Product"
                className="w-full h-full object-cover rounded-lg"
              />
            ) : (
              <div className="text-center">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-500">Click to upload image</p>
              </div>
            )}
          </div>
        </div>

        {/* Product Form */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 space-y-4">
          <div>
            <label className="block text-sm text-gray-700 mb-2">Product Name *</label>
            <Input
              type="text"
              placeholder="e.g., Rose Plant"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-2">Category *</label>
            <Select 
              value={formData.category} 
              onValueChange={(value) => setFormData({ ...formData, category: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {categories.filter(c => c !== 'All').map((category) => (
                  <SelectItem key={category} value={category}>{category}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-700 mb-2">Price (₹) *</label>
              <Input
                type="number"
                placeholder="0"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-2">Stock *</label>
              <Input
                type="number"
                placeholder="0"
                value={formData.stock}
                onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-2">Description</label>
            <Textarea
              placeholder="Enter product description..."
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={4}
            />
          </div>
        </div>
      </div>

      {/* Fixed Bottom Action */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40">
        <div className="max-w-md mx-auto px-4 py-4 flex gap-3">
          <Button
            onClick={onBack}
            variant="outline"
            className="flex-1"
          >
            Cancel
          </Button>
          <Button
            onClick={handleSave}
            disabled={!isValid}
            className="flex-1 bg-green-600 hover:bg-green-700"
          >
            {isEdit ? 'Update Product' : 'Add Product'}
          </Button>
        </div>
      </div>
    </div>
  );
}
