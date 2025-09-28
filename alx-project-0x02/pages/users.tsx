import React from 'react'
import { GetStaticProps, GetStaticPropsResult } from 'next'
import Header from '@/components/layout/Header'
import UserCard from '@/components/common/UserCard'
import { type UserProps, type UsersPageProps } from '@/interfaces'

const UsersPage = ({ users, error }: UsersPageProps) => {
    return (
        <div>
            <Header />
            <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{ marginBottom: '2rem' }}>
                    <h1 style={{ marginBottom: '0.5rem', color: '#333' }}>Users</h1>
                    <p style={{ color: '#666', fontSize: '1.125rem', lineHeight: '1.6' }}>
                        Meet our community of users from around the world.
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

                {!error && users.length > 0 && (
                    <div style={{
                        display: 'grid',
                        gap: '1.5rem',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))'
                    }}>
                        {users.map((user) => (
                            <UserCard
                                key={user.id}
                                id={user.id}
                                name={user.name}
                                username={user.username}
                                email={user.email}
                                address={user.address}
                                phone={user.phone}
                                website={user.website}
                                company={user.company}
                            />
                        ))}
                    </div>
                )}

                {!error && users.length === 0 && (
                    <div style={{
                        textAlign: 'center',
                        color: '#666',
                        fontSize: '1.125rem',
                        minHeight: '200px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        No users found.
                    </div>
                )}

                {/* Stats Section */}
                {!error && users.length > 0 && (
                    <div style={{
                        marginTop: '3rem',
                        padding: '2rem',
                        backgroundColor: '#f8f9fa',
                        borderRadius: '12px',
                        textAlign: 'center'
                    }}>
                        <h3 style={{
                            margin: '0 0 1rem 0',
                            color: '#333',
                            fontSize: '1.25rem'
                        }}>
                            Community Stats
                        </h3>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            gap: '2rem',
                            flexWrap: 'wrap'
                        }}>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{
                                    fontSize: '2rem',
                                    fontWeight: 'bold',
                                    color: '#007bff',
                                    margin: '0 0 0.25rem 0'
                                }}>
                                    {users.length}
                                </div>
                                <div style={{
                                    fontSize: '0.875rem',
                                    color: '#666',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.5px'
                                }}>
                                    Total Users
                                </div>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{
                                    fontSize: '2rem',
                                    fontWeight: 'bold',
                                    color: '#28a745',
                                    margin: '0 0 0.25rem 0'
                                }}>
                                    {new Set(users.map(u => u.address.city)).size}
                                </div>
                                <div style={{
                                    fontSize: '0.875rem',
                                    color: '#666',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.5px'
                                }}>
                                    Cities
                                </div>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{
                                    fontSize: '2rem',
                                    fontWeight: 'bold',
                                    color: '#ffc107',
                                    margin: '0 0 0.25rem 0'
                                }}>
                                    {new Set(users.map(u => u.company.name)).size}
                                </div>
                                <div style={{
                                    fontSize: '0.875rem',
                                    color: '#666',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.5px'
                                }}>
                                    Companies
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export async function getStaticProps(): Promise<GetStaticPropsResult<UsersPageProps>> {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        const users: UserProps[] = await response.json()

        return {
            props: {
                users,
            },
            // Revalidate every 300 seconds (5 minutes) - users change less frequently than posts
            revalidate: 300,
        }
    } catch (error) {
        console.error('Error fetching users:', error)

        return {
            props: {
                users: [],
                error: error instanceof Error ? error.message : 'Failed to fetch users',
            },
            // Retry after 30 seconds if there was an error
            revalidate: 30,
        }
    }
}

export default UsersPage