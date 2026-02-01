import React from 'react';
import Card from '../components/Card';
import { ShieldCheck, Server, Lock, FileCheck, Activity, Users, Globe } from 'lucide-react';

const StatCard = ({ icon: Icon, label, value, color, subtext }) => (
    <Card>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
            <div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 500, marginBottom: '0.5rem' }}>{label}</p>
                <h4 style={{ fontSize: '1.8rem', fontWeight: 700, color: 'var(--accent)' }}>{value}</h4>
                {subtext && <p style={{ fontSize: '0.8rem', color: color, marginTop: '0.5rem' }}>{subtext}</p>}
            </div>
            <div style={{
                padding: '0.75rem',
                borderRadius: '12px',
                backgroundColor: `${color}15`,
                color: color
            }}>
                <Icon size={24} />
            </div>
        </div>
    </Card>
);

const Dashboard = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* Welcome Section */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <h1 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>Vue d'ensemble</h1>
                    <p style={{ color: 'var(--text-muted)' }}>Bienvenue sur votre tableau de bord sécurisé.</p>
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', background: 'white', borderRadius: '50px', border: '1px solid var(--border)', fontSize: '0.9rem' }}>
                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#22c55e' }}></div>
                        Système opérationnel
                    </div>
                </div>
            </div>

            {/* Stats Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
                <StatCard
                    icon={ShieldCheck}
                    label="Niveau de Sécurité"
                    value="Optimal"
                    color="#0ea5e9"
                    subtext="Aucune menace détectée"
                />
                <StatCard
                    icon={Server}
                    label="Infrastructure"
                    value="99.99%"
                    color="#22c55e"
                    subtext="Uptime (30 jours)"
                />
                <StatCard
                    icon={Lock}
                    label="Données Chiffrées"
                    value="128 TB"
                    color="#8b5cf6"
                    subtext="AES-256 GCM"
                />
                <StatCard
                    icon={FileCheck}
                    label="Conformité"
                    value="SecNumCloud"
                    color="#f59e0b"
                    subtext="Audit: Validé"
                />
            </div>

            {/* Main Content Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem' }}>
                <Card title="Métriques en Temps Réel">
                    <div style={{ height: '200px', display: 'flex', alignItems: 'flex-end', gap: '1rem', paddingBottom: '1rem' }}>
                        {/* Simple CSS Chart Simulation */}
                        {[40, 65, 45, 80, 55, 70, 90, 60, 75, 50, 85, 95].map((h, i) => (
                            <div key={i} style={{
                                flex: 1,
                                backgroundColor: i === 11 ? 'var(--primary)' : '#e2e8f0',
                                height: `${h}%`,
                                borderRadius: '4px 4px 0 0',
                                transition: 'height 0.5s ease'
                            }} title={`Metric ${i}: ${h}%`}></div>
                        ))}
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--border)', paddingTop: '1rem', color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                        <span>Load Balancer Traffic</span>
                        <span>Last 12 Hours</span>
                    </div>
                </Card>

                <Card title="Activités Récentes">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {[
                            { icon: User, text: "Connexion Admin", time: "Il y a 2 min", color: "#3b82f6" },
                            { icon: Activity, text: "Backup automatique", time: "Il y a 45 min", color: "#22c55e" },
                            { icon: Lock, text: "Rotation clés API", time: "Il y a 3h", color: "#f59e0b" },
                            { icon: Globe, text: "Scan vulnérabilités", time: "Il y a 5h", color: "#8b5cf6" },
                        ].map((item, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{
                                    width: '32px', height: '32px', borderRadius: '50%',
                                    backgroundColor: `${item.color}15`, display: 'flex',
                                    alignItems: 'center', justifyContent: 'center', color: item.color
                                }}>
                                    <item.icon size={16} />
                                </div>
                                <div style={{ flex: 1 }}>
                                    <p style={{ fontSize: '0.9rem', fontWeight: 500 }}>{item.text}</p>
                                </div>
                                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{item.time}</span>
                            </div>
                        ))}
                    </div>
                </Card>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.5rem' }}>
                <Card className="hover-scale">
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <ShieldCheck size={20} color="var(--primary)" /> Zero Trust
                    </h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Politique d'accès stricte activée par défaut sur tous les endpoints.</p>
                </Card>
                <Card>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <Globe size={20} color="var(--secondary)" /> Zone France
                    </h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Toutes les données résident sur le territoire national.</p>
                </Card>
                <Card>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <Server size={20} color="var(--accent)" /> Redondance
                    </h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Architecture haute disponibilité multi-site active.</p>
                </Card>
            </div>
        </div>
    );
};

export default Dashboard;
