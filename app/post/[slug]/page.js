import React from "react";
import { groq } from "next-sanity";
import { client, urlFor } from "../../../lib/client";
import Image from "next/image";

export const revalidate = 30;

export async function generateStaticParams() {
	const query = groq`*[_type == 'post']{
		slug
	}`;
	const slugs = await client.fetch(query);
	const currentSlugs = slugs.map((slug) => slug.slug.current);

	return currentSlugs.map((slug) => ({
		slug,
	}));
}

async function PostPage({ params: { slug } }) {
	const query = groq`*[_type == 'post' && slug.current == $slug][0]
{
	...,
	author->,
	categories[]->
} 
`;

	const post = await client.fetch(query, { slug });

	return (
		<div className=' text-center'>
			<Image
				src={urlFor(post.mainImage).url()}
				alt='img'
				width={1000}
				height={400}
				className='mx-auto'
			/>
			<p className='text-3xl font-bold mt-2 mb-5'>{post.title}</p>

			<div className='flex  items-center justify-center'>
				<Image
					src={urlFor(post.author.image).url()}
					alt='img'
					width={50}
					height={50}
					className='rounded-full'
				/>
				<div className='ml-5 text-left'>
					<h4>{post.author.name}</h4>
					<p>Date: {new Date(post.author._createdAt).toLocaleDateString()}</p>
				</div>
			</div>
		</div>
	);
}

export default PostPage;
