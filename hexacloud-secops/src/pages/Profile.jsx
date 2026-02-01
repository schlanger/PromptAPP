import React, { useState } from 'react';
import Card from '../components/Card';
import { User, Save, Bell, Shield, Key } from 'lucide-react';

const Profile = () => {
    const [user, setUser] = useState({
        firstName: 'Admin',
        lastName: 'User',
        email: 'admin@hexacloud.gouv.fr',
        role: 'Administrateur Sécurité',
        org: 'HexaCorp'
    });

    const [isDirty, setIsDirty] = useState(false);
    const [saveStatus, setSaveStatus] = useState('');

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
        setIsDirty(true);
    };

    const handleSave = () => {
        setSaveStatus('saving');
        // Simulate API call
        setTimeout(() => {
            setSaveStatus('saved');
            setIsDirty(false);
            setTimeout(() => setSaveStatus(''), 3000);
        }, 1000);
    };

    const InputGroup = ({ label, name, value, disabled = false, type = "text" }) => (
        <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 500, color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
                {label}
            </label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={handleChange}
                disabled={disabled}
                style={{
                    width: '100%',
                    padding: '0.65rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border)',
                    backgroundColor: disabled ? 'var(--bg-app)' : 'white',
                    color: disabled ? 'var(--text-muted)' : 'var(--text-main)',
                    fontSize: '0.95rem'
                }}
            />
        </div>
    );

    return (
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                <h1 style={{ fontSize: '1.8rem' }}>Mon Profil</h1>
                <button
                    onClick={handleSave}
                    disabled={!isDirty || saveStatus === 'saving'}
                    className={!isDirty ? 'btn btn-outline' : 'btn btn-primary'} // Using classes from index.css logic
                    style={{
                        backgroundColor: !isDirty ? 'transparent' : 'var(--primary)',
                        color: !isDirty ? 'var(--text-muted)' : 'white',
                        border: !isDirty ? '1px solid var(--border)' : 'none',
                        cursor: !isDirty ? 'default' : 'pointer',
                        opacity: (!isDirty && saveStatus !== 'saved') ? 0.7 : 1
                    }}
                >
                    {saveStatus === 'saving' ? 'Enregistrement...' : saveStatus === 'saved' ? 'Enregistré' : 'Enregistrer'}
                    {saveStatus !== 'saving' && <Save size={18} />}
                </button>
            </div>

            <div style={{ display: 'grid', gap: '1.5rem' }}>
                <Card title="Informations Personnelles">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '2rem' }}>
                        <div style={{
                            width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'var(--primary)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white',
                            fontSize: '2rem', fontWeight: 600
                        }}>
                            {user.firstName[0]}{user.lastName[0]}
                        </div>
                        <div>
                            <h3 style={{ fontSize: '1.25rem' }}>{user.firstName} {user.lastName}</h3>
                            <p style={{ color: 'var(--text-muted)' }}>{user.role}</p>
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                        <InputGroup label="Prénom" name="firstName" value={user.firstName} />
                        <InputGroup label="Nom" name="lastName" value={user.lastName} />
                    </div>
                    <InputGroup label="Email Professionnel" name="email" value={user.email} />

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                        <InputGroup label="Organisation" name="org" value={user.org} disabled />
                        <InputGroup label="Rôle" name="role" value={user.role} disabled />
                    </div>
                </Card>

                <Card title="Préférences de Sécurité">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <button className="btn btn-outline" style={{ justifyContent: 'space-between', width: '100%' }}>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <Key size={18} /> Changer le mot de passe
                            </span>
                            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Dernière modification: il y a 30 jours</span>
                        </button>
                        <button className="btn btn-outline" style={{ justifyContent: 'space-between', width: '100%' }}>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <Shield size={18} /> Configurer l'authentification 2FA (MFA)
                            </span>
                            <span style={{ fontSize: '0.8rem', color: '#22c55e', fontWeight: 600 }}>Activé</span>
                        </button>
                        <button className="btn btn-outline" style={{ justifyContent: 'space-between', width: '100%' }}>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <Bell size={18} /> Notifications de sécurité
                            </span>
                            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Email + Push</span>
                        </button>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default Profile;
