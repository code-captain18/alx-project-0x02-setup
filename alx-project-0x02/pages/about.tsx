import React from 'react'
import Button from '@/components/common/Button'

const about = () => {
    return (
        <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{ marginBottom: '1.5rem', color: '#333' }}>About Us</h1>
            <p style={{ marginBottom: '3rem', color: '#666', fontSize: '1.125rem', lineHeight: '1.6' }}>
                This is the about page of our website. Here we showcase different button components
                with various sizes and shapes to demonstrate our design system.
            </p>

            <div style={{ marginBottom: '2rem' }}>
                <h2 style={{ marginBottom: '1rem', color: '#333', fontSize: '1.5rem' }}>Button Showcase</h2>
                <p style={{ marginBottom: '1.5rem', color: '#666' }}>
                    Below are examples of our Button component with different sizes and shapes:
                </p>
            </div>

            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1.5rem',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '2rem',
                backgroundColor: '#f8f9fa',
                borderRadius: '8px',
                border: '1px solid #e9ecef'
            }}>
                <div style={{ textAlign: 'center' }}>
                    <Button
                        size="small"
                        shape="rounded-sm"
                        onClick={() => alert('Small button with rounded-sm clicked!')}
                    >
                        Small & Sharp
                    </Button>
                    <p style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: '#666' }}>
                        Small + Rounded SM
                    </p>
                </div>

                <div style={{ textAlign: 'center' }}>
                    <Button
                        size="medium"
                        shape="rounded-md"
                        onClick={() => alert('Medium button with rounded-md clicked!')}
                    >
                        Medium & Balanced
                    </Button>
                    <p style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: '#666' }}>
                        Medium + Rounded MD
                    </p>
                </div>

                <div style={{ textAlign: 'center' }}>
                    <Button
                        size="large"
                        shape="rounded-full"
                        onClick={() => alert('Large button with rounded-full clicked!')}
                    >
                        Large & Pill
                    </Button>
                    <p style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: '#666' }}>
                        Large + Rounded Full
                    </p>
                </div>
            </div>

            <div style={{ marginTop: '2rem', padding: '1.5rem', backgroundColor: '#e3f2fd', borderRadius: '8px' }}>
                <h3 style={{ marginBottom: '1rem', color: '#1976d2' }}>Component Features:</h3>
                <ul style={{ color: '#666', lineHeight: '1.6' }}>
                    <li><strong>Three sizes:</strong> small, medium, large</li>
                    <li><strong>Three shapes:</strong> rounded-sm, rounded-md, rounded-full</li>
                    <li><strong>Interactive:</strong> Hover effects with smooth transitions</li>
                    <li><strong>Accessible:</strong> Supports disabled state and click handlers</li>
                    <li><strong>TypeScript:</strong> Fully typed with ButtonProps interface</li>
                </ul>
            </div>
        </div>
    )
}

export default about
