import React from 'react';
import PostFeed from '../../components/PostFeed';
import UserProfile from '../../components/UserProfile';
import { getUserWithUsername, postToJSON } from '../../lib/firebase';

export async function getServerSideProps({ query }) {
	const { username } = query;

	const userDoc = await getUserWithUsername(username);

	let user = null;
	let posts = null;

	if (userDoc) {
		user = userDoc.data();
		const postsQuery = userDoc.ref
			.collection('posts')
			.where('published', '==', true)
			.orderBy('createdAt', 'desc')
			.limit(5);
		posts = (await postsQuery.get()).docs.map(postToJSON);
	}

	return {
		props: { user, posts },
	};
}

export default function UserProfilePage({ user, posts}) {
	return (
		<div>
			<UserProfile user={user} />
			<PostFeed posts={posts} /> 
		</div>
	);
}