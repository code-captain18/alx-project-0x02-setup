import React from 'react'
import { type ButtonProps } from '@/interfaces'

const Button = ({
    children,
    size,
    shape,
    onClick,
    type = 'button',
    disabled = false
}: ButtonProps) => {
    const getSizeStyles = () => {
        switch (size) {
            case 'small':
                return {
                    padding: '0.375rem 0.75rem',
                    fontSize: '0.875rem'
                }
            case 'medium':
                return {
                    padding: '0.5rem 1rem',
                    fontSize: '1rem'
                }
            case 'large':
                return {
                    padding: '0.75rem 1.5rem',
                    fontSize: '1.125rem'
                }
            default:
                return {
                    padding: '0.5rem 1rem',
                    fontSize: '1rem'
                }
        }
    }

    const getShapeStyles = () => {
        switch (shape) {
            case 'rounded-sm':
                return { borderRadius: '4px' }
            case 'rounded-md':
                return { borderRadius: '6px' }
            case 'rounded-full':
                return { borderRadius: '9999px' }
            default:
                return { borderRadius: '6px' }
        }
    }

    const baseStyles = {
        border: 'none',
        backgroundColor: '#007bff',
        color: 'white',
        cursor: disabled ? 'not-allowed' : 'pointer',
        fontWeight: '500',
        transition: 'all 0.2s ease',
        opacity: disabled ? 0.6 : 1,
        ...getSizeStyles(),
        ...getShapeStyles()
    }

    const hoverStyles = !disabled ? {
        backgroundColor: '#0056b3',
        transform: 'translateY(-1px)',
        boxShadow: '0 4px 8px rgba(0, 123, 255, 0.3)'
    } : {}

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            style={baseStyles}
            onMouseEnter={(e) => {
                if (!disabled) {
                    Object.assign(e.currentTarget.style, hoverStyles)
                }
            }}
            onMouseLeave={(e) => {
                if (!disabled) {
                    e.currentTarget.style.backgroundColor = '#007bff'
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = 'none'
                }
            }}
        >
            {children}
        </button>
    )
}

export default Button