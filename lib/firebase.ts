import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
	apiKey: 'AIzaSyDpYhtg1CsxcPHGXQ7eGn3y_pYChDfX2D8',
	authDomain: 'microblog-9caf8.firebaseapp.com',
	projectId: 'microblog-9caf8',
	storageBucket: 'microblog-9caf8.appspot.com',
	messagingSenderId: '204935850143',
	appId: '1:204935850143:web:873317ea6d90f2b5ff9aaa',
	measurementId: 'G-1L15FPES30'
};

if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);
}

export async function getUserWithUsername(username: string) {
	const usersRef = firestore.collection('users');
	const query = usersRef.where('username', '==', username).limit(1);
	const userDoc = (await query.get()).docs[0];
	return userDoc;
}

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const firestore = firebase.firestore();
export const storage = firebase.storage();

export async function postToJSON(doc: any) {
	const data = doc.data();
	console.log('postToJson', data);
	console.log('toMillis', data.createdAt.toMillis());
	return {
		...data,
		createdAt: data?.createdAt.toMillis() || 0,
		updatedAt: data?.updatedAt.toMillis() || 0,
	};
}
