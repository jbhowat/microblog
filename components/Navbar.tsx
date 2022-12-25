import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../lib/context';
import Link from 'next/link';

export default function Navbar() {
	const { user, username } = useContext(UserContext);

	return (
		<nav className="navbar">
			<ul>
				<li>
					<Link href="/">
						<button className='btn-logo'>smolFEED</button>
					</Link>
				</li>
				{username && (
					<>
						<li className='push-left'>
							<Link href="/admin">
								<button className='btn-blue'>Post</button>
							</Link>
						</li>
						<li>
							<Link href={`/${username}`}>
								<img src={user?.photoURL} />
							</Link>
						</li>
					</>
				)}

				{!username && (
					<li>
						<Link href="/enter">
							<button className='btn-blue'>Log in</button>
						</Link>
					</li>
				)}
			</ul>
		</nav>
	);
}