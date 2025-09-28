import React from 'react'
import Link from 'next/link'

const Header = () => {
    return (
        <div>
            <h1>Welcome to this website</h1>
            <nav>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>

                </ul>
            </nav>
        </div>
    )
}

export default Header
