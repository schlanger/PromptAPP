import React from 'react';

const Card = ({ title, children, className = '', actions }) => {
    return (
        <div className={`card ${className}`} style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            {(title || actions) && (
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '1rem',
                    paddingBottom: '0.5rem',
                    borderBottom: '1px solid var(--border)'
                }}>
                    {title && <h3 style={{ fontSize: '1.1rem', color: 'var(--accent)' }}>{title}</h3>}
                    {actions && <div>{actions}</div>}
                </div>
            )}
            <div style={{ flex: 1 }}>
                {children}
            </div>
        </div>
    );
};

export default Card;
