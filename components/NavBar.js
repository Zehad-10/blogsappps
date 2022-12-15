import Link from "next/link";
import React from "react";

function NavBar() {
	return (
		<nav className='py-5 bg-gray-100'>
			<div className='container mx-auto'>
				<div className='flex flex-row justify-between'>
					<div>
						<Link href='/' className='text-xl tracking-widest font-bold'>
							ZEHAD.BLOG
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default NavBar;
