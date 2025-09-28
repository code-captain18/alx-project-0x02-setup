import React from 'react'
import { type UserProps } from '@/interfaces'

const UserCard = ({ id, name, username, email, address, phone, website, company }: UserProps) => {
    return (
        <div style={{
            padding: '1.5rem',
            border: '1px solid #e1e5e9',
            borderRadius: '12px',
            backgroundColor: '#fff',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
            position: 'relative',
            overflow: 'hidden'
        }}
            onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 123, 255, 0.15)'
                e.currentTarget.style.transform = 'translateY(-4px)'
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)'
                e.currentTarget.style.transform = 'translateY(0)'
            }}>
            {/* Header */}
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '1rem'
            }}>
                <div>
                    <h3 style={{
                        margin: '0 0 0.25rem 0',
                        color: '#333',
                        fontSize: '1.25rem',
                        fontWeight: '700'
                    }}>
                        {name}
                    </h3>
                    <p style={{
                        margin: '0',
                        color: '#666',
                        fontSize: '0.9rem',
                        fontWeight: '500'
                    }}>
                        @{username}
                    </p>
                </div>
                <span style={{
                    backgroundColor: '#007bff',
                    color: 'white',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '12px',
                    fontSize: '0.75rem',
                    fontWeight: '600'
                }}>
                    ID: {id}
                </span>
            </div>

            {/* Contact Info */}
            <div style={{ marginBottom: '1.25rem' }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '0.5rem'
                }}>
                    <span style={{
                        width: '16px',
                        height: '16px',
                        marginRight: '0.5rem',
                        fontSize: '14px'
                    }}>📧</span>
                    <a
                        href={`mailto:${email}`}
                        style={{
                            color: '#007bff',
                            textDecoration: 'none',
                            fontSize: '0.9rem'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
                        onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
                    >
                        {email}
                    </a>
                </div>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '0.5rem'
                }}>
                    <span style={{
                        width: '16px',
                        height: '16px',
                        marginRight: '0.5rem',
                        fontSize: '14px'
                    }}>📞</span>
                    <span style={{
                        color: '#666',
                        fontSize: '0.9rem'
                    }}>
                        {phone}
                    </span>
                </div>
                <div style={{
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <span style={{
                        width: '16px',
                        height: '16px',
                        marginRight: '0.5rem',
                        fontSize: '14px'
                    }}>🌐</span>
                    <a
                        href={`https://${website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            color: '#007bff',
                            textDecoration: 'none',
                            fontSize: '0.9rem'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
                        onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
                    >
                        {website}
                    </a>
                </div>
            </div>

            {/* Address */}
            <div style={{
                padding: '1rem',
                backgroundColor: '#f8f9fa',
                borderRadius: '8px',
                marginBottom: '1.25rem'
            }}>
                <h4 style={{
                    margin: '0 0 0.5rem 0',
                    color: '#495057',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <span style={{ marginRight: '0.5rem', fontSize: '14px' }}>📍</span>
                    Address
                </h4>
                <p style={{
                    margin: '0',
                    color: '#666',
                    fontSize: '0.85rem',
                    lineHeight: '1.4'
                }}>
                    {address.suite} {address.street}<br />
                    {address.city}, {address.zipcode}
                </p>
            </div>

            {/* Company */}
            <div style={{
                padding: '1rem',
                backgroundColor: '#e3f2fd',
                borderRadius: '8px',
                marginBottom: '1rem'
            }}>
                <h4 style={{
                    margin: '0 0 0.5rem 0',
                    color: '#1976d2',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <span style={{ marginRight: '0.5rem', fontSize: '14px' }}>🏢</span>
                    {company.name}
                </h4>
                <p style={{
                    margin: '0 0 0.25rem 0',
                    color: '#1976d2',
                    fontSize: '0.8rem',
                    fontStyle: 'italic'
                }}>
                    "{company.catchPhrase}"
                </p>
                <p style={{
                    margin: '0',
                    color: '#666',
                    fontSize: '0.75rem'
                }}>
                    {company.bs}
                </p>
            </div>

            {/* Action Buttons */}
            <div style={{
                display: 'flex',
                gap: '0.5rem',
                justifyContent: 'space-between'
            }}>
                <button style={{
                    flex: 1,
                    padding: '0.5rem 1rem',
                    border: '1px solid #007bff',
                    borderRadius: '6px',
                    backgroundColor: 'transparent',
                    color: '#007bff',
                    fontSize: '0.8rem',
                    fontWeight: '500',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#007bff'
                        e.currentTarget.style.color = 'white'
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent'
                        e.currentTarget.style.color = '#007bff'
                    }}
                    onClick={(e) => {
                        e.stopPropagation()
                        alert(`Viewing profile for ${name}`)
                    }}
                >
                    View Profile
                </button>
                <button style={{
                    flex: 1,
                    padding: '0.5rem 1rem',
                    border: '1px solid #28a745',
                    borderRadius: '6px',
                    backgroundColor: 'transparent',
                    color: '#28a745',
                    fontSize: '0.8rem',
                    fontWeight: '500',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#28a745'
                        e.currentTarget.style.color = 'white'
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent'
                        e.currentTarget.style.color = '#28a745'
                    }}
                    onClick={(e) => {
                        e.stopPropagation()
                        window.open(`mailto:${email}`, '_blank')
                    }}
                >
                    Contact
                </button>
            </div>
        </div>
    )
}

export default UserCard