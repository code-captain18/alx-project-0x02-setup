import React from 'react'
import { type CardProps } from '@/interfaces'

const Card = ({ title, content }: CardProps) => {
    return (
        <div style={{
            border: '1px solid #e1e5e9',
            borderRadius: '8px',
            padding: '1.5rem',
            backgroundColor: 'white',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            transition: 'box-shadow 0.2s ease',
        }}
            onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.15)'
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)'
            }}
        >
            <h2 style={{
                margin: '0 0 1rem 0',
                color: '#333',
                fontSize: '1.25rem',
                fontWeight: '600'
            }}>{title}</h2>
            <p style={{
                margin: '0',
                color: '#666',
                lineHeight: '1.5',
                fontSize: '1rem'
            }}>{content}</p>
        </div>
    )
}

export default Card
