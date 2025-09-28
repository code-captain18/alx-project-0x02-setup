import React from 'react'
import { GetStaticProps, GetStaticPropsResult } from 'next'
import Header from '@/components/layout/Header'
import PostCard from '@/components/common/PostCard'
import { type PostProps, type PostsPageProps } from '@/interfaces'

const PostsPage = ({ posts, error }: PostsPageProps) => {
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
                    </div>
                )}

                {!error && posts.length > 0 && (
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

                {!error && posts.length === 0 && (
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
        </div>
    )
}

export async function getStaticProps(): Promise<GetStaticPropsResult<PostsPageProps>> {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        const posts: PostProps[] = await response.json()

        return {
            props: {
                posts,
            },
            // Revalidate every 60 seconds (ISR - Incremental Static Regeneration)
            revalidate: 60,
        }
    } catch (error) {
        console.error('Error fetching posts:', error)

        return {
            props: {
                posts: [],
                error: error instanceof Error ? error.message : 'Failed to fetch posts',
            },
            // Retry after 10 seconds if there was an error
            revalidate: 10,
        }
    }
}

export default PostsPage