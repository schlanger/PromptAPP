import React, { useState } from 'react';
import Card from '../components/Card';
import { Shield, Lock, Eye, Server, AlertTriangle, CheckCircle, RefreshCw } from 'lucide-react';

const Toggle = ({ enabled, onToggle, label, description }) => (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 0', borderBottom: '1px solid var(--border)' }}>
        <div>
            <h4 style={{ fontSize: '1rem', marginBottom: '0.25rem' }}>{label}</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{description}</p>
        </div>
        <button
            onClick={onToggle}
            style={{
                position: 'relative',
                width: '48px',
                height: '24px',
                backgroundColor: enabled ? 'var(--primary)' : '#cbd5e1',
                borderRadius: '12px',
                border: 'none',
                padding: '2px',
                transition: 'background-color 0.2s'
            }}
        >
            <div style={{
                width: '20px',
                height: '20px',
                backgroundColor: 'white',
                borderRadius: '50%',
                transform: enabled ? 'translateX(24px)' : 'translateX(0)',
                transition: 'transform 0.2s',
                boxShadow: '0 1px 2px rgba(0,0,0,0.2)'
            }} />
        </button>
    </div>
);

const SecurityCenter = () => {
    const [settings, setSettings] = useState({
        zeroTrust: true,
        autoEncryption: true,
        threatDetection: true,
        apiFirewall: false,
        auditLogs: true
    });

    const [scanStatus, setScanStatus] = useState('idle'); // idle, scanning, complete

    const toggle = (key) => setSettings(prev => ({ ...prev, [key]: !prev[key] }));

    const runScan = () => {
        setScanStatus('scanning');
        setTimeout(() => {
            setScanStatus('complete');
            setTimeout(() => setScanStatus('idle'), 3000);
        }, 2000);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
                <h1 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>Security Center</h1>
                <p style={{ color: 'var(--text-muted)' }}>Gérez les politiques de sécurité de votre cloud souverain.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem' }}>
                <Card title="Politiques de Sécurité">
                    <div style={{ padding: '0.5rem 0' }}>
                        <Toggle
                            label="Architecture Zero Trust"
                            description="Exiger une vérification d'identité stricte pour chaque requête."
                            enabled={settings.zeroTrust}
                            onToggle={() => toggle('zeroTrust')}
                        />
                        <Toggle
                            label="Chiffrement Automatique (AES-256)"
                            description="Chiffrer toutes les données au repos par défaut."
                            enabled={settings.autoEncryption}
                            onToggle={() => toggle('autoEncryption')}
                        />
                        <Toggle
                            label="Détection de Menaces IA"
                            description="Analyse comportementale en temps réel."
                            enabled={settings.threatDetection}
                            onToggle={() => toggle('threatDetection')}
                        />
                        <Toggle
                            label="Pare-feu API Strict"
                            description="Bloquer tout trafic non-whiteliste vers les endpoints API."
                            enabled={settings.apiFirewall}
                            onToggle={() => toggle('apiFirewall')}
                        />
                        <Toggle
                            label="Logs d'Audit Immuables"
                            description="Archivage WORM pour conformité légale."
                            enabled={settings.auditLogs}
                            onToggle={() => toggle('auditLogs')}
                        />
                    </div>
                </Card>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <Card title="État du Réseau">
                        <div style={{ textAlign: 'center', padding: '1rem 0' }}>
                            <div style={{
                                width: '120px', height: '120px', margin: '0 auto 1.5rem',
                                border: '8px solid var(--primary-light)', borderRadius: '50%',
                                display: 'flex', alignItems: 'center', justifyContent: 'center'
                            }}>
                                <Shield size={48} color="var(--primary)" />
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Sécurisé</h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Votre infrastructure est protégée contre les attaques DDoS et intrusions.</p>
                        </div>
                    </Card>

                    <Card title="Scan de Vulnérabilités">
                        <div style={{ padding: '0.5rem 0' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                                <span style={{ color: 'var(--text-muted)' }}>Dernier scan:</span>
                                <span style={{ fontWeight: 500 }}>Aujourd'hui, 09:42</span>
                            </div>

                            {scanStatus === 'scanning' ? (
                                <div style={{ padding: '1rem', backgroundColor: 'var(--primary-light)', borderRadius: '8px', color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    <RefreshCw className="spin" size={20} /> Analyse en cours...
                                </div>
                            ) : scanStatus === 'complete' ? (
                                <div style={{ padding: '1rem', backgroundColor: '#dcfce7', borderRadius: '8px', color: '#166534', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    <CheckCircle size={20} /> Scan terminé : 0 faille.
                                </div>
                            ) : (
                                <button
                                    onClick={runScan}
                                    className="btn btn-primary"
                                    style={{ width: '100%', gap: '0.5rem' }}
                                >
                                    <Eye size={18} /> Lancer un scan complet
                                </button>
                            )}
                        </div>
                        <style>{`
              .spin { animation: spin 1s linear infinite; }
              @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
            `}</style>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default SecurityCenter;
