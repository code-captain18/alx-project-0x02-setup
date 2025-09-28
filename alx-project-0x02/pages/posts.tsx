import React from 'react'
import Header from '@/components/layout/Header'

const posts = () => {
    return (
        <div>
            <Header />
            <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
                <h1 style={{ marginBottom: '1.5rem', color: '#333' }}>Posts</h1>
                <p style={{ color: '#666', fontSize: '1.125rem', lineHeight: '1.6', marginBottom: '2rem' }}>
                    Welcome to the posts page! Here you can view all the posts and articles.
                </p>

                <div style={{
                    display: 'grid',
                    gap: '1.5rem'
                }}>
                    <article style={{
                        padding: '1.5rem',
                        border: '1px solid #e1e5e9',
                        borderRadius: '8px',
                        backgroundColor: '#fff',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
                    }}>
                        <h2 style={{ marginBottom: '0.5rem', color: '#333' }}>Getting Started with React</h2>
                        <p style={{ color: '#666', fontSize: '0.875rem', marginBottom: '1rem' }}>
                            Posted on January 15, 2024
                        </p>
                        <p style={{ color: '#666', lineHeight: '1.6' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </article>

                    <article style={{
                        padding: '1.5rem',
                        border: '1px solid #e1e5e9',
                        borderRadius: '8px',
                        backgroundColor: '#fff',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
                    }}>
                        <h2 style={{ marginBottom: '0.5rem', color: '#333' }}>Next.js Best Practices</h2>
                        <p style={{ color: '#666', fontSize: '0.875rem', marginBottom: '1rem' }}>
                            Posted on February 3, 2024
                        </p>
                        <p style={{ color: '#666', lineHeight: '1.6' }}>
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </article>

                    <article style={{
                        padding: '1.5rem',
                        border: '1px solid #e1e5e9',
                        borderRadius: '8px',
                        backgroundColor: '#fff',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
                    }}>
                        <h2 style={{ marginBottom: '0.5rem', color: '#333' }}>TypeScript Tips and Tricks</h2>
                        <p style={{ color: '#666', fontSize: '0.875rem', marginBottom: '1rem' }}>
                            Posted on March 12, 2024
                        </p>
                        <p style={{ color: '#666', lineHeight: '1.6' }}>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                        </p>
                    </article>
                </div>
            </div>
        </div>
    )
}

export default posts