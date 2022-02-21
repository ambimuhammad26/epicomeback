import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '@components/Navbar'
import FeaturedPost from '@components/FeaturedPost'
import CardPost from '@components/CardPost'
import Footer from '@components/Footer'
import Container from '@components/Container'
import Layout from '@components/Layout'
import mockPost from '../utils/posts.json'

export default function Home() {
	const [posts, setPosts] = useState(mockPost);
	return (
		<Layout>
			<Container>
				<FeaturedPost />
				<div className="flex -mx-4 flex-wrap mt-6">
					{ posts.map(post => (
					<div key={post.id} className="md:w-4/12 w-full px-4 py-6">
						<CardPost {...post} />
					</div>
					))}
				</div>
			</Container>
			<Footer />
		</Layout>
	)
}
