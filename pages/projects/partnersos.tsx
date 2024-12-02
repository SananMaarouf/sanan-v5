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
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from "next-i18next/serverSideTranslations"


export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  }
}


const images = [
	{
		title: 'Login page',
		image: '/images/partnersos/login.webp',
	},
	{
		title: 'Index',
		image: '/images/partnersos/index.webp',
	},
	{
		title: 'Webapp map',
		image: '/images/partnersos/webmap.webp',
	},
	{
		title: 'Partners page',
		image: '/images/partnersos/partners.webp',
	},
	{
		title: 'Profile page',
		image: '/images/partnersos/profile.webp',
	},
	{
		title: 'Settings page',
		image: '/images/partnersos/settings.webp',
	},
];

export default function PartnerSOS() {
	const { t } = useTranslation();
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
										{t("partnersos.description")}
                    </p>
                    <p className="mt-2 text-sm md:mt-4 md:text-lg lg:text-xl">
										{t("partnersos.date")}
                    </p>
					</div>
					<div className="">
						<Image src="/images/partnersos/phone.webp" alt="Hero Image" width={500} height={500} priority />
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
						{t("partnersos.intro")}
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
								{t("partnersos.expoGoDetails")}
							</p>
						</li>
						<li>
							Firebase:
							<p>
								{t("partnersos.firebaseDetails")}
							</p>
						</li>
					</ul>
				</section>
			</motion.div>
		</section>

	);
}