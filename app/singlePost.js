import React from "react";
import Image from "next/image";
import { urlFor } from "../lib/client";
import Link from "next/link";

function singlePost({ posts }) {
	return (
		<>
			<div className='grid md:grid-cols-3 grid-col-1 gap-x-10 mt-20'>
				{posts.map((post) => (
					<div key={post._id}>
						<div className='text-left mb-5'>
							<Image
								src={urlFor(post.mainImage).url()}
								alt='img'
								width={600}
								height={600}
							/>
							<p className='text-3xl font-bold mt-2 mb-5'>{post.title}</p>
						</div>
						<div className='flex  items-center'>
							<Image
								src={urlFor(post.author.image).url()}
								alt='img'
								width={50}
								height={50}
								className='rounded-full'
							/>
							<div className='ml-5 text-left'>
								<h4>{post.author.name}</h4>
								<p>
									Date: {new Date(post.author._createdAt).toLocaleDateString()}
								</p>
							</div>
						</div>
						<div className='text-left mt-8'>
							<Link
								href={`/post/${post.slug.current}`}
								className='text-xl hover:underline block'
							>
								Read More
							</Link>
						</div>
					</div>
				))}
			</div>
		</>
	);
}

export default singlePost;
