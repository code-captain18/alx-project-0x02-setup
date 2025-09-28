import Card from '@/components/common/Card'
import PostModal from '@/components/common/PostModal'
import Header from '@/components/layout/Header'
import React, { useState } from 'react'

interface Post {
    id: number;
    title: string;
    content: string;
}

const home = () => {
    const [posts, setPosts] = useState<Post[]>([
        { id: 1, title: "Card Title", content: "This is the content of the card." }
    ])
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleAddPost = (title: string, content: string) => {
        const newPost: Post = {
            id: Date.now(), // Simple ID generation
            title,
            content
        }
        setPosts(prevPosts => [...prevPosts, newPost])
    }

    const openModal = () => setIsModalOpen(true)
    const closeModal = () => setIsModalOpen(false)

    return (
        <div>
            <Header />
            <div style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                    <h1>Welcome to the Home Page</h1>
                    <button
                        onClick={openModal}
                        style={{
                            padding: '0.75rem 1.5rem',
                            border: 'none',
                            borderRadius: '6px',
                            backgroundColor: '#007bff',
                            color: 'white',
                            cursor: 'pointer',
                            fontSize: '1rem',
                            fontWeight: '500'
                        }}
                    >
                        Create New Post
                    </button>
                </div>

                <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
                    {posts.map(post => (
                        <Card
                            key={post.id}
                            title={post.title}
                            content={post.content}
                        />
                    ))}
                </div>

                <PostModal
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    onSubmit={handleAddPost}
                />
            </div>
        </div>
    )
}

export default home
