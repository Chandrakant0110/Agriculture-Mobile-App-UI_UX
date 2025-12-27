import { useState } from 'react';
import { ArrowLeft, User, MapPin } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { districts } from '../data/mockData';

interface EditProfilePageProps {
  onBack: () => void;
  onSave: () => void;
}

export function EditProfilePage({ onBack, onSave }: EditProfilePageProps) {
  const [formData, setFormData] = useState({
    name: 'John Doe',
    location: 'Sector 12, Urban',
    district: 'Mumbai'
  });

  const handleSave = () => {
    onSave();
  };

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
            <h2>Edit Profile</h2>
          </div>
        </div>
      </div>

      <div className="max-w-md mx-auto px-4 py-6">
        {/* Profile Picture */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-6">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <User className="w-12 h-12 text-green-600" />
            </div>
            <Button variant="outline" size="sm">Change Photo</Button>
          </div>
        </div>

        {/* Edit Form */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 space-y-4">
          <div>
            <label className="block text-sm text-gray-700 mb-2">Full Name</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="pl-10"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-2">District</label>
            <Select value={formData.district} onValueChange={(value) => setFormData({ ...formData, district: value })}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {districts.map((d) => (
                  <SelectItem key={d} value={d}>{d}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-2">Location</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="pl-10"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Bottom Action */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40">
        <div className="max-w-md mx-auto px-4 py-4">
          <Button
            onClick={handleSave}
            className="w-full bg-green-600 hover:bg-green-700 h-12"
          >
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  );
}
