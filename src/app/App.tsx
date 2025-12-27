import { useState } from 'react';
import { BottomNav } from './components/BottomNav';
import { LoginPage } from './pages/LoginPage';
import { SignUpPage } from './pages/SignUpPage';
import { HomePage } from './pages/HomePage';
import { SearchPage } from './pages/SearchPage';
import { ProductDetailsPage } from './pages/ProductDetailsPage';
import { EnquiryPage } from './pages/EnquiryPage';
import { NurseryPage } from './pages/NurseryPage';
import { NurseryProductsPage } from './pages/NurseryProductsPage';
import { UserProfilePage } from './pages/UserProfilePage';
import { EditProfilePage } from './pages/EditProfilePage';
import { AdminPage } from './pages/AdminPage';
import { AdminNurseryPage } from './pages/AdminNurseryPage';
import { AdminProductPage } from './pages/AdminProductPage';
import { AdminAddNurseryPage } from './pages/AdminAddNurseryPage';
import { Product, Nursery } from './data/mockData';

type Page = 
  | 'login' 
  | 'signup' 
  | 'home' 
  | 'search' 
  | 'product-details'
  | 'enquiry' 
  | 'nursery' 
  | 'nursery-products'
  | 'profile'
  | 'edit-profile'
  | 'admin'
  | 'admin-nursery'
  | 'admin-product'
  | 'admin-add-nursery';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('login');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('Mumbai');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedNursery, setSelectedNursery] = useState<Nursery | null>(null);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [addProductNurseryId, setAddProductNurseryId] = useState<string | null>(null);

  const handleLogin = (adminStatus?: boolean) => {
    setIsAuthenticated(true);
    setIsAdmin(adminStatus || false);
    setCurrentPage('home');
  };

  const handleSignUp = () => {
    setIsAuthenticated(true);
    setCurrentPage('home');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setIsAdmin(false);
    setCurrentPage('login');
  };

  const handleBottomNav = (page: string) => {
    if (page === 'home') {
      setCurrentPage('home');
    } else if (page === 'nursery') {
      setCurrentPage('nursery');
    } else if (page === 'enquiry') {
      setCurrentPage('enquiry');
      setSelectedProduct(null);
    }
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setCurrentPage('product-details');
  };

  const handleEnquiry = (product: Product) => {
    setSelectedProduct(product);
    setCurrentPage('enquiry');
  };

  const handleNurseryClick = (nursery: Nursery) => {
    setSelectedNursery(nursery);
    setCurrentPage('nursery-products');
  };

  const handleAdminNurseryClick = (nursery: Nursery) => {
    setSelectedNursery(nursery);
    setCurrentPage('admin-nursery');
  };

  const handleAddProduct = (nurseryId: string) => {
    setAddProductNurseryId(nurseryId);
    setEditingProduct(null);
    setCurrentPage('admin-product');
  };

  const handleEditProduct = (product: Product) => {
    setEditingProduct(product);
    setCurrentPage('admin-product');
  };

  const showBottomNav = isAuthenticated && 
    ['home', 'nursery', 'enquiry'].includes(currentPage);

  // Not authenticated
  if (!isAuthenticated) {
    if (currentPage === 'signup') {
      return (
        <SignUpPage
          onSignUp={handleSignUp}
          onNavigateToLogin={() => setCurrentPage('login')}
        />
      );
    }
    return (
      <LoginPage
        onLogin={handleLogin}
        onNavigateToSignUp={() => setCurrentPage('signup')}
      />
    );
  }

  // Authenticated - Render appropriate page
  return (
    <div className="min-h-screen">
      {currentPage === 'home' && (
        <HomePage
          selectedLocation={selectedLocation}
          onLocationChange={setSelectedLocation}
          onProductClick={handleProductClick}
          onSearchClick={() => setCurrentPage('search')}
          onProfileClick={() => setCurrentPage('profile')}
        />
      )}

      {currentPage === 'search' && (
        <SearchPage
          onBack={() => setCurrentPage('home')}
          onProductClick={handleProductClick}
        />
      )}

      {currentPage === 'product-details' && selectedProduct && (
        <ProductDetailsPage
          product={selectedProduct}
          onBack={() => setCurrentPage('home')}
          onEnquiry={handleEnquiry}
        />
      )}

      {currentPage === 'enquiry' && (
        <EnquiryPage
          onBack={() => setCurrentPage('home')}
          selectedProduct={selectedProduct || undefined}
        />
      )}

      {currentPage === 'nursery' && (
        <NurseryPage
          onBack={() => setCurrentPage('home')}
          onNurseryClick={handleNurseryClick}
        />
      )}

      {currentPage === 'nursery-products' && selectedNursery && (
        <NurseryProductsPage
          nursery={selectedNursery}
          onBack={() => setCurrentPage('nursery')}
          onProductClick={handleProductClick}
        />
      )}

      {currentPage === 'profile' && (
        <UserProfilePage
          onBack={() => setCurrentPage('home')}
          onEdit={() => setCurrentPage('edit-profile')}
          onLogout={handleLogout}
          isAdmin={isAdmin}
        />
      )}

      {currentPage === 'edit-profile' && (
        <EditProfilePage
          onBack={() => setCurrentPage('profile')}
          onSave={() => setCurrentPage('profile')}
        />
      )}

      {currentPage === 'admin' && isAdmin && (
        <AdminPage
          onBack={() => setCurrentPage('home')}
          onAddNursery={() => setCurrentPage('admin-add-nursery')}
          onNurseryClick={handleAdminNurseryClick}
        />
      )}

      {currentPage === 'admin-nursery' && selectedNursery && isAdmin && (
        <AdminNurseryPage
          nursery={selectedNursery}
          onBack={() => setCurrentPage('admin')}
          onAddProduct={handleAddProduct}
          onEditProduct={handleEditProduct}
        />
      )}

      {currentPage === 'admin-product' && isAdmin && (
        <AdminProductPage
          onBack={() => setCurrentPage('admin-nursery')}
          onSave={() => setCurrentPage('admin-nursery')}
          existingProduct={editingProduct || undefined}
          nurseryId={addProductNurseryId || undefined}
        />
      )}

      {currentPage === 'admin-add-nursery' && isAdmin && (
        <AdminAddNurseryPage
          onBack={() => setCurrentPage('admin')}
          onSave={() => setCurrentPage('admin')}
        />
      )}

      {showBottomNav && (
        <BottomNav
          currentPage={currentPage}
          onNavigate={handleBottomNav}
        />
      )}

      {/* Admin Floating Button */}
      {isAdmin && currentPage === 'home' && (
        <button
          onClick={() => setCurrentPage('admin')}
          className="fixed bottom-20 right-4 w-14 h-14 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 transition-colors flex items-center justify-center z-50"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </button>
      )}
    </div>
  );
}
