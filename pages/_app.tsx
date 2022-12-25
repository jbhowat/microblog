import '../styles/globals.css';
import React from 'react';
import type { AppProps } from 'next/app';
import NavBar from '../components/Navbar';
import { Toaster } from 'react-hot-toast';
import { UserContext } from '../lib/context';
import { useUserData } from '../lib/hooks';

export default function App({ Component, pageProps }: AppProps) {
	
	const userData = useUserData();
	
	return (
		<UserContext.Provider value={userData}>
			<NavBar />
			<Component {...pageProps} />
			<Toaster />
		</UserContext.Provider>
	);
}
