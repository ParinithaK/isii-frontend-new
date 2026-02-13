import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';
import { toast } from 'sonner';
import Layout from '@/components/Layout';
import ProtectedRoute from '@/components/admin/ProtectedRoute';
import SEOHead from '@/components/SEOHead';
import AdminDashboardTabs from '@/components/admin/AdminDashboardTabs';

const Home = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
    toast.success('Logged out successfully');
  };

  return (
    <ProtectedRoute>
      <SEOHead robots="noindex, nofollow" />
      <Layout>
        <div className="min-h-screen" style={{ backgroundColor: '#F3F5F7' }}>
          <div className="container-custom section-padding py-6 md:py-10">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6 md:mb-8">
              <div>
                <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold mb-2" style={{ color: '#01002A' }}>
                  Admin Dashboard
                </h1>
                <p className="text-sm" style={{ color: '#01002A' }}>
                  Select a dashboard to manage content
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                <AdminDashboardTabs />
                <Button
                  variant="outline"
                  onClick={handleLogout}
                  className="w-full sm:w-auto border-[#01002A] text-[#01002A] hover:bg-[#01002A] hover:text-white"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </ProtectedRoute>
  );
};

export default Home;
