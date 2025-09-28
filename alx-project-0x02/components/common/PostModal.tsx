import React, { useState } from 'react'
import { type PostModalProps } from '@/interfaces'

const PostModal = ({ isOpen, onClose, onSubmit }: PostModalProps) => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (title.trim() && content.trim()) {
            onSubmit(title, content)
            setTitle('')
            setContent('')
            onClose()
        }
    }

    if (!isOpen) return null

    return (
        <div className="modal-overlay" style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000
        }}>
            <div className="modal-content" style={{
                backgroundColor: 'white',
                padding: '2rem',
                borderRadius: '8px',
                minWidth: '400px',
                maxWidth: '90%'
            }}>
                <h2>Create New Post</h2>
                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '1rem' }}>
                        <input
                            type="text"
                            placeholder="Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            style={{
                                width: '100%',
                                padding: '0.5rem',
                                border: '1px solid #ccc',
                                borderRadius: '4px'
                            }}
                            required
                        />
                    </div>
                    <div style={{ marginBottom: '1rem' }}>
                        <textarea
                            placeholder="Content"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            rows={5}
                            style={{
                                width: '100%',
                                padding: '0.5rem',
                                border: '1px solid #ccc',
                                borderRadius: '4px',
                                resize: 'vertical'
                            }}
                            required
                        />
                    </div>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
                        <button
                            type="button"
                            onClick={onClose}
                            style={{
                                padding: '0.5rem 1rem',
                                border: '1px solid #ccc',
                                borderRadius: '4px',
                                backgroundColor: '#f5f5f5',
                                cursor: 'pointer'
                            }}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            style={{
                                padding: '0.5rem 1rem',
                                border: 'none',
                                borderRadius: '4px',
                                backgroundColor: '#007bff',
                                color: 'white',
                                cursor: 'pointer'
                            }}
                        >
                            Post
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default PostModal
