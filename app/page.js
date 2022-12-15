import React from "react";
import { client } from "../lib/client";
import { groq } from "next-sanity";
import SinglePost from "./singlePost";

const query = groq`*[_type == 'post']
{
	...,
	author->,
	categories[]->
} | order(_createdAt desc)
`;

async function page() {
	const posts = await client.fetch(query);

	return (
		<main>
			<div className='text-center mt-10'>
				<h1 className='text-4xl font-bold'>This is Single Page Blog Website</h1>

				<SinglePost posts={posts} />
			</div>
		</main>
	);
}

export default page;
