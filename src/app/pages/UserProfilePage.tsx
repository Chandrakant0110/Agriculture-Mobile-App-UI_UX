import { ArrowLeft, User, Phone, MapPin, Edit, LogOut } from 'lucide-react';
import { Button } from '../components/ui/button';

interface UserProfilePageProps {
  onBack: () => void;
  onEdit: () => void;
  onLogout: () => void;
  isAdmin?: boolean;
}

export function UserProfilePage({ onBack, onEdit, onLogout, isAdmin }: UserProfilePageProps) {
  const user = {
    name: 'John Doe',
    phone: '+91 98765 43210',
    location: 'Sector 12, Urban',
    district: 'Mumbai'
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
            <h2>Profile</h2>
          </div>
        </div>
      </div>

      <div className="max-w-md mx-auto px-4 py-6">
        {/* Profile Header */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-4">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
              <User className="w-10 h-10 text-green-600" />
            </div>
            <div className="flex-1">
              <h2 className="mb-1">{user.name}</h2>
              {isAdmin && (
                <span className="inline-block px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                  Admin
                </span>
              )}
            </div>
            <button
              onClick={onEdit}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <Edit className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          <div className="space-y-3 pt-4 border-t">
            <div className="flex items-center gap-3 text-gray-600">
              <Phone className="w-5 h-5 text-green-600" />
              <span>{user.phone}</span>
            </div>
            <div className="flex items-center gap-3 text-gray-600">
              <MapPin className="w-5 h-5 text-green-600" />
              <span>{user.location}, {user.district}</span>
            </div>
          </div>
        </div>

        {/* Account Actions */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <button className="w-full px-6 py-4 text-left hover:bg-gray-50 transition-colors border-b border-gray-100">
            <div>My Orders</div>
            <div className="text-sm text-gray-500 mt-1">View your order history</div>
          </button>
          <button className="w-full px-6 py-4 text-left hover:bg-gray-50 transition-colors border-b border-gray-100">
            <div>Saved Addresses</div>
            <div className="text-sm text-gray-500 mt-1">Manage delivery locations</div>
          </button>
          <button className="w-full px-6 py-4 text-left hover:bg-gray-50 transition-colors">
            <div>Settings</div>
            <div className="text-sm text-gray-500 mt-1">Privacy and notifications</div>
          </button>
        </div>

        {/* Logout */}
        <div className="mt-6">
          <Button
            onClick={onLogout}
            variant="outline"
            className="w-full text-red-600 hover:text-red-700 hover:bg-red-50"
          >
            <LogOut className="w-5 h-5 mr-2" />
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
}
