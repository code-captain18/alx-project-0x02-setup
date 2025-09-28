import React from 'react'
import Link from 'next/link'

const Header = () => {
    return (
        <header style={{
            backgroundColor: '#fff',
            borderBottom: '1px solid #e1e5e9',
            padding: '1rem 0',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            position: 'sticky',
            top: 0,
            zIndex: 100
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '0 2rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <div style={{
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    color: '#333'
                }}>
                    <Link href="/" style={{
                        textDecoration: 'none',
                        color: '#007bff'
                    }}>
                        My App
                    </Link>
                </div>

                <nav>
                    <ul style={{
                        display: 'flex',
                        listStyle: 'none',
                        margin: 0,
                        padding: 0,
                        gap: '2rem'
                    }}>
                        <li>
                            <Link
                                href="/home"
                                style={{
                                    textDecoration: 'none',
                                    color: '#333',
                                    fontWeight: '500',
                                    padding: '0.5rem 1rem',
                                    borderRadius: '6px',
                                    transition: 'all 0.2s ease'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = '#f8f9fa'
                                    e.currentTarget.style.color = '#007bff'
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = 'transparent'
                                    e.currentTarget.style.color = '#333'
                                }}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/about"
                                style={{
                                    textDecoration: 'none',
                                    color: '#333',
                                    fontWeight: '500',
                                    padding: '0.5rem 1rem',
                                    borderRadius: '6px',
                                    transition: 'all 0.2s ease'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = '#f8f9fa'
                                    e.currentTarget.style.color = '#007bff'
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = 'transparent'
                                    e.currentTarget.style.color = '#333'
                                }}
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/posts"
                                style={{
                                    textDecoration: 'none',
                                    color: '#333',
                                    fontWeight: '500',
                                    padding: '0.5rem 1rem',
                                    borderRadius: '6px',
                                    transition: 'all 0.2s ease'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = '#f8f9fa'
                                    e.currentTarget.style.color = '#007bff'
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = 'transparent'
                                    e.currentTarget.style.color = '#333'
                                }}
                            >
                                Posts
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
