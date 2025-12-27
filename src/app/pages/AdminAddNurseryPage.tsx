import { useState } from 'react';
import { ArrowLeft, Upload, Phone, MapPin } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { districts } from '../data/mockData';

interface AdminAddNurseryPageProps {
  onBack: () => void;
  onSave: () => void;
}

export function AdminAddNurseryPage({ onBack, onSave }: AdminAddNurseryPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    district: '',
    contactNumber: '',
    description: ''
  });

  const handleSave = () => {
    if (formData.name && formData.location && formData.district && formData.contactNumber) {
      onSave();
    }
  };

  const isValid = formData.name && formData.location && formData.district && formData.contactNumber;

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
            <h2>Add Nursery</h2>
          </div>
        </div>
      </div>

      <div className="max-w-md mx-auto px-4 py-6">
        {/* Nursery Image Upload */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-6">
          <label className="block text-sm text-gray-700 mb-3">Nursery Image</label>
          <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors">
            <div className="text-center">
              <Upload className="w-12 h-12 text-gray-400 mx-auto mb-2" />
              <p className="text-sm text-gray-500">Click to upload image</p>
            </div>
          </div>
        </div>

        {/* Nursery Form */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 space-y-4">
          <div>
            <label className="block text-sm text-gray-700 mb-2">Nursery Name *</label>
            <Input
              type="text"
              placeholder="e.g., Green Valley Nursery"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-2">District *</label>
            <Select 
              value={formData.district} 
              onValueChange={(value) => setFormData({ ...formData, district: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select district" />
              </SelectTrigger>
              <SelectContent>
                {districts.map((d) => (
                  <SelectItem key={d} value={d}>{d}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-2">Location *</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                placeholder="e.g., Sector 12, Main Road"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="pl-10"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-2">Contact Number *</label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="tel"
                placeholder="+91 XXXXX XXXXX"
                value={formData.contactNumber}
                onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
                className="pl-10"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-2">Description</label>
            <Textarea
              placeholder="Enter nursery description..."
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
            Add Nursery
          </Button>
        </div>
      </div>
    </div>
  );
}
