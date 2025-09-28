import React from 'react'
import { type PostProps } from '@/interfaces'

const PostCard = ({ id, title, body, userId }: PostProps) => {
    return (
        <article style={{
            padding: '1.5rem',
            border: '1px solid #e1e5e9',
            borderRadius: '8px',
            backgroundColor: '#fff',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            transition: 'box-shadow 0.2s ease, transform 0.2s ease',
            cursor: 'pointer'
        }}
            onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)'
                e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)'
                e.currentTarget.style.transform = 'translateY(0)'
            }}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '1rem'
            }}>
                <h2 style={{
                    margin: '0',
                    color: '#333',
                    fontSize: '1.25rem',
                    fontWeight: '600',
                    lineHeight: '1.4',
                    flex: 1
                }}>
                    {title}
                </h2>
                <span style={{
                    backgroundColor: '#007bff',
                    color: 'white',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '12px',
                    fontSize: '0.75rem',
                    fontWeight: '500',
                    marginLeft: '1rem',
                    flexShrink: 0
                }}>
                    User {userId}
                </span>
            </div>

            <p style={{
                color: '#666',
                lineHeight: '1.6',
                margin: '0',
                fontSize: '1rem'
            }}>
                {body}
            </p>

            <div style={{
                marginTop: '1rem',
                paddingTop: '1rem',
                borderTop: '1px solid #f0f0f0',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <span style={{
                    color: '#999',
                    fontSize: '0.875rem'
                }}>
                    Post ID: {id}
                </span>
                <button style={{
                    backgroundColor: 'transparent',
                    border: '1px solid #007bff',
                    color: '#007bff',
                    padding: '0.5rem 1rem',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '0.875rem',
                    fontWeight: '500',
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
                        alert(`Reading post: "${title}"`)
                    }}
                >
                    Read More
                </button>
            </div>
        </article>
    )
}

export default PostCard