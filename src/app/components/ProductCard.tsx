import { Product } from '../data/mockData';
import { MapPin, Package } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

export function ProductCard({ product, onClick }: ProductCardProps) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
    >
      <div className="aspect-square overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-3">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="line-clamp-1">{product.name}</h3>
          <span className="text-green-600 shrink-0">₹{product.price}</span>
        </div>
        <p className="text-gray-500 text-sm mb-2 line-clamp-1">{product.nurseryName}</p>
        <div className="flex items-center gap-3 text-xs text-gray-500">
          <div className="flex items-center gap-1">
            <MapPin className="w-3 h-3" />
            <span>{product.district}</span>
          </div>
          <div className="flex items-center gap-1">
            <Package className="w-3 h-3" />
            <span>{product.stock} left</span>
          </div>
        </div>
      </div>
    </div>
  );
}
