import React, { useState, useEffect } from 'react'
import Header from '@/components/layout/Header'
import PostCard from '@/components/common/PostCard'
import { type PostProps } from '@/interfaces'

const posts = () => {
    const [posts, setPosts] = useState<PostProps[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                setLoading(true)
                setError(null)
                const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`)
                }

                const data: PostProps[] = await response.json()
                setPosts(data)
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to fetch posts')
                console.error('Error fetching posts:', err)
            } finally {
                setLoading(false)
            }
        }

        fetchPosts()
    }, [])

    return (
        <div>
            <Header />
            <div style={{ padding: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
                <div style={{ marginBottom: '2rem' }}>
                    <h1 style={{ marginBottom: '0.5rem', color: '#333' }}>Posts</h1>
                    <p style={{ color: '#666', fontSize: '1.125rem', lineHeight: '1.6' }}>
                        Explore our collection of posts fetched from JSONPlaceholder API.
                    </p>
                </div>

                {loading && (
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        minHeight: '200px',
                        fontSize: '1.125rem',
                        color: '#666'
                    }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem'
                        }}>
                            <div style={{
                                width: '20px',
                                height: '20px',
                                border: '2px solid #007bff',
                                borderTop: '2px solid transparent',
                                borderRadius: '50%',
                                animation: 'spin 1s linear infinite'
                            }}></div>
                            Loading posts...
                        </div>
                    </div>
                )}

                {error && (
                    <div style={{
                        backgroundColor: '#f8d7da',
                        border: '1px solid #f5c6cb',
                        borderRadius: '6px',
                        padding: '1rem',
                        color: '#721c24',
                        textAlign: 'center',
                        marginBottom: '2rem'
                    }}>
                        <strong>Error:</strong> {error}
                        <br />
                        <button
                            onClick={() => window.location.reload()}
                            style={{
                                marginTop: '0.5rem',
                                padding: '0.5rem 1rem',
                                backgroundColor: '#721c24',
                                color: 'white',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer'
                            }}
                        >
                            Retry
                        </button>
                    </div>
                )}

                {!loading && !error && posts.length > 0 && (
                    <div style={{
                        display: 'grid',
                        gap: '1.5rem',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))'
                    }}>
                        {posts.map((post) => (
                            <PostCard
                                key={post.id}
                                id={post.id}
                                title={post.title}
                                body={post.body}
                                userId={post.userId}
                            />
                        ))}
                    </div>
                )}

                {!loading && !error && posts.length === 0 && (
                    <div style={{
                        textAlign: 'center',
                        color: '#666',
                        fontSize: '1.125rem',
                        minHeight: '200px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        No posts found.
                    </div>
                )}
            </div>

            <style jsx>{`
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    )
}

export default posts