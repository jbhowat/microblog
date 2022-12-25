import React from 'react';
import { auth, googleAuthProvider } from '../lib/firebase';

export default function Enter(props) {
	const user = null;
	const username = null;
	return (
		<div>
			{user ?
				!username ? <UsernameForm /> : <SignOutButton />
				:
				<SignInButton />
			}
		</div>
	);
}

function SignInButton() {
	const singInWithGoogle = async () => {
		await auth.signInWithPopup(googleAuthProvider);
	};
	return (
		<button className='btn-google' onClick={singInWithGoogle}>
			<img src={'/google.png'} /> Sign in with Google
		</button>
	);
}

function SignOutButton() {
	return <button onClick={() => auth.signOut()}>Sign Out</button>;
}

function UsernameForm() {}