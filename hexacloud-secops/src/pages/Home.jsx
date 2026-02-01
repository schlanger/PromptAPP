import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock, CheckCircle, ArrowRight } from 'lucide-react';

const Home = () => {
    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            {/* Navbar area */}
            <nav style={{ padding: '1.5rem 0', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-surface)' }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 700, fontSize: '1.25rem', color: 'var(--accent)' }}>
                        <div style={{ width: '32px', height: '32px', backgroundColor: 'var(--primary)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                            <Shield size={18} />
                        </div>
                        HexaCloud SecOps
                    </div>
                    <div>
                        <Link to="/dashboard" className="btn btn-primary" style={{ padding: '0.5rem 1.5rem' }}>
                            Accéder à la plateforme
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Hero */}
            <section style={{ backgroundColor: 'white', padding: '5rem 0 0', flex: 1, display: 'flex', alignItems: 'center' }}>
                <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
                    <div style={{
                        display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                        backgroundColor: 'var(--primary-light)', color: 'var(--primary)',
                        padding: '0.5rem 1rem', borderRadius: '50px',
                        fontSize: '0.9rem', fontWeight: 600, marginBottom: '2rem'
                    }}>
                        <CheckCircle size={16} /> Cloud Souverain Certifié SecNumCloud
                    </div>

                    <h1 style={{ fontSize: '3.5rem', lineHeight: '1.1', marginBottom: '1.5rem', color: 'var(--accent)' }}>
                        La sécurité absolue pour vos données <span style={{ color: 'var(--primary)' }}>stratégiques</span>.
                    </h1>

                    <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '3rem', lineHeight: '1.6' }}>
                        HexaCloud SecOps offre une infrastructure souveraine française dédiée aux organisations qui ne peuvent pas compromettre leur sécurité.
                    </p>

                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                        <Link to="/dashboard" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
                            Entrer dans la plateforme <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Footer stripe */}
            <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.9rem', borderTop: '1px solid var(--border)' }}>
                © 2026 HexaCloud SecOps. Tous droits réservés. France.
            </div>
        </div>
    );
};

export default Home;
