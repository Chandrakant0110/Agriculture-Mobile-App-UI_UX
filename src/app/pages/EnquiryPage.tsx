import { useState } from 'react';
import { ArrowLeft, Package, Store, MapPin, User, Phone, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { mockEnquiries, Enquiry, Product } from '../data/mockData';

interface EnquiryPageProps {
  onBack: () => void;
  selectedProduct?: Product;
}

export function EnquiryPage({ onBack, selectedProduct }: EnquiryPageProps) {
  const [showForm, setShowForm] = useState(!!selectedProduct);
  const [enquiries] = useState<Enquiry[]>(mockEnquiries);
  const [formData, setFormData] = useState({
    quantity: '',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (formData.quantity) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setShowForm(false);
        setFormData({ quantity: '', notes: '' });
      }, 2000);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-green-900 mb-2">Enquiry Submitted!</h2>
          <p className="text-gray-600">The nursery will contact you soon</p>
        </div>
      </div>
    );
  }

  if (showForm && selectedProduct) {
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
              <h2>Make Enquiry</h2>
            </div>
          </div>
        </div>

        <div className="max-w-md mx-auto px-4 py-6">
          {/* Product Summary */}
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 mb-6">
            <div className="flex gap-4">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-20 h-20 rounded-lg object-cover"
              />
              <div className="flex-1">
                <h3 className="mb-1">{selectedProduct.name}</h3>
                <p className="text-sm text-gray-500 mb-1">{selectedProduct.nurseryName}</p>
                <div className="text-green-600">₹{selectedProduct.price}</div>
              </div>
            </div>
          </div>

          {/* Enquiry Form */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 space-y-4">
            <div>
              <label className="block text-sm text-gray-700 mb-2">Quantity Required</label>
              <Input
                type="number"
                placeholder="Enter quantity"
                value={formData.quantity}
                onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-2">Location/District</label>
              <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-lg">
                <MapPin className="w-4 h-4 text-gray-500" />
                <span className="text-gray-700">{selectedProduct.location}, {selectedProduct.district}</span>
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-2">Additional Notes (Optional)</label>
              <Textarea
                placeholder="Any specific requirements..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                rows={4}
              />
            </div>
          </div>
        </div>

        {/* Fixed Bottom Action */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40">
          <div className="max-w-md mx-auto px-4 py-4">
            <Button
              onClick={handleSubmit}
              disabled={!formData.quantity}
              className="w-full bg-green-600 hover:bg-green-700 h-12"
            >
              Submit Enquiry
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-md mx-auto px-4 py-4">
          <h2>My Enquiries</h2>
        </div>
      </div>

      <div className="max-w-md mx-auto px-4 py-6">
        {enquiries.length > 0 ? (
          <div className="space-y-4">
            {enquiries.map((enquiry) => (
              <div key={enquiry.id} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="mb-1">{enquiry.productName}</h3>
                    <p className="text-sm text-gray-500">{enquiry.nurseryName}</p>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    enquiry.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                    enquiry.status === 'approved' ? 'bg-green-100 text-green-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {enquiry.status}
                  </span>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Package className="w-4 h-4" />
                    <span>Quantity: {enquiry.quantity} units</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span>{enquiry.location}, {enquiry.district}</span>
                  </div>
                  <div className="text-xs text-gray-500 pt-2 border-t">
                    {enquiry.createdAt.toLocaleDateString()}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Package className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-gray-900 mb-2">No enquiries yet</h3>
            <p className="text-gray-500 text-sm">
              Browse products and make an enquiry
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
