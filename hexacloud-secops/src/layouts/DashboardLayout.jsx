import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  ShieldCheck, 
  User, 
  Cloud,
  LogOut 
} from 'lucide-react';

const DashboardLayout = () => {
  const location = useLocation();
  
  const navItems = [
    { path: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/security', label: 'Security Center', icon: ShieldCheck },
    { path: '/profile', label: 'Profile', icon: User },
  ];

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: 'var(--bg-app)' }}>
      {/* Sidebar */}
      <aside style={{ 
        width: '260px', 
        backgroundColor: 'var(--bg-surface)', 
        borderRight: '1px solid var(--border)',
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <div style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ 
            width: '40px', 
            height: '40px', 
            backgroundColor: 'var(--primary)', 
            borderRadius: '8px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            color: 'white'
          }}>
            <Cloud size={24} />
          </div>
          <div>
            <h1 style={{ fontSize: '1.1rem', color: 'var(--accent)', lineHeight: '1.2' }}>HexaCloud</h1>
            <span style={{ fontSize: '0.8rem', color: 'var(--secondary)', fontWeight: 600 }}>SecOps</span>
          </div>
        </div>

        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;
            
            return (
              <Link 
                key={item.path} 
                to={item.path}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.75rem 1rem',
                  borderRadius: 'var(--radius-md)',
                  color: isActive ? 'var(--primary)' : 'var(--text-muted)',
                  backgroundColor: isActive ? 'var(--primary-light)' : 'transparent',
                  fontWeight: isActive ? 600 : 500,
                  transition: 'background-color 0.2s'
                }}
              >
                <Icon size={20} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--border)' }}>
          <Link to="/" style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.75rem', 
            padding: '0.75rem 1rem',
            color: 'var(--text-muted)',
            marginTop: '0.5rem'
          }}>
            <LogOut size={20} />
            Déconnexion
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, overflow: 'auto' }}>
        <header style={{ 
          height: '64px', 
          backgroundColor: 'var(--bg-surface)', 
          borderBottom: '1px solid var(--border)',
          display: 'flex', 
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 2rem'
        }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 600 }}>
            {navItems.find(i => i.path === location.pathname)?.label || 'Dashboard'}
          </h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>Admin User</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>HexaCorp</div>
            </div>
            <div style={{ 
              width: '40px', 
              height: '40px', 
              backgroundColor: 'var(--bg-app)', 
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-muted)',
              border: '1px solid var(--border)'
            }}>
              <User size={20} />
            </div>
          </div>
        </header>

        <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
