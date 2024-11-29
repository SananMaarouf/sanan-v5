import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel"


const images = [
	{
		title: 'Login page',
		image: '/images/projects/partnersos/login.png',
	},
	{
		title: 'Index',
		image: '/images/projects/partnersos/index.png',
	},
	{
		title: 'Webapp map',
		image: '/images/projects/partnersos/webmap.jpg',
	},
	{
		title: 'Partners page',
		image: '/images/projects/partnersos/partners.png',
	},
	{
		title: 'Profile page',
		image: '/images/projects/partnersos/profile.png',
	},
	{
		title: 'Settings page',
		image: '/images/projects/partnersos/settings.png',
	},
];

export default function PartnerSOS() {
	return (
		<section className="px-5 md:px-0">
			{/* heading and image gallery */}
			<motion.div
				initial={{ y: 100, opacity: 0 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.4 }}
				className="
                mx-auto
                my-5 
                flex 
                flex-col 
                border-white
                w-full
                overflow-clip
                rounded-2xl 
                border 
                border-transparent
                bg-transparent 
                md:w-3/5 
                md:flex-row
                lg:w-1/2
                "
			>
				{/* heading and image */}
				<div className="flex flex-row justify-evenly py-16 text-white w-full">
					<div className=' content-center pl-3 mb:pl-0'>
					<h1 className="text-3xl md:text-4xl lg:text-5xl">
                        PartnerSOS
                    </h1>
                    <p className="mt-2 text-md md:mt-4 md:text-lg lg:text-xl">
										Violence alarm / location sharing app
                    </p>
                    <p className="mt-2 text-sm md:mt-4 md:text-lg lg:text-xl">
										July 8th, 2024
                    </p>
					</div>
					<div className="">
						<Image src="/images/projects/partnersos/phone.png" alt="Hero Image" width={500} height={500} className='' />
					</div>
				</div>
			</motion.div>
			{/* content, story about the app */}
			<motion.div
				initial={{ y: 100, opacity: 0 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.4 }}
				className="mx-auto my-5 md:my-10 md:w-3/5 lg:w-1/2"
			>
				<section className="mx-auto my-5 md:my-10 ">
					<p className="">
					PartnerSOS empowers users to share their location with their partners instantly
					when they feel unsafe. Unlike apps like Messenger or Snapchat, 
					PartnerSOS requires only a single tap, ensuring a quick and efficient
					notification process. Upon activation, the partner receives an SMS containing a link
					to view the partners location via a web app. 
					The location updates in real-time and can be accessed directly 
					in Google Maps for precise navigation. 
					This streamlined approach ensures that users can seek assistance quickly and 
					effortlessly, especially in stressful situations
					</p>
				</section>
				<section className="mx-auto md:my-10 w-4/5 rounded-lg bg-gray-600 ">
					<Carousel >
						<CarouselPrevious />
						<CarouselContent>
							{images.map((image, index) => (
								<CarouselItem  key={index} className="md:basis-1/2 lg:basis-2/5">
									<Image src={image.image} alt={image.title} width={200} height={100} className="mx-auto" />
								</CarouselItem>
							))}
						</CarouselContent>
						<CarouselNext />
					</Carousel>
				</section>
				<section className="mx-auto my-5 md:my-10 ">
					<h3 className="font-bold text-lg">Tech stack</h3>
					<ul>
						<li>
							Expo Go:
							<p>
							A React Native framework that accelerates app development by providing robust developer tools
							</p>
						</li>
						<li>
							Firebase:
							<p>
							A suite of cloud-based development tools that aid in building, deploying, and scaling mobile apps. I utilized Firebase Authentication, Firestore DB, and Cloud Functions
							</p>
						</li>
					</ul>
				</section>
			</motion.div>
		</section>

	);
}