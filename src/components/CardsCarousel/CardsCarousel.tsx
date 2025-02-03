import { FC } from "react"
import classes from "./styles.module.scss"
import { Carousel } from "@mantine/carousel"
import { rem } from "@mantine/core"
import { Card } from "@/components/Card"

interface CardsCarouselProps {}

const data = [
	{
		title: "About",
		text: "As a devoted professional, I am focused on using my developing abilities and successes to make a meaningful contribution to any organization. My academic background, combined with my hands-on professional experience, has allowed me to build strong problem-solving skills and attention to detail. I continue to improve my skills, aiming to be a productive and enthusiastic part of any team.",
		modal: true,
	},
	{
		title: "Contacts",
		email: "sumeyaahmedelbedewi@gmail.com",
		telegram: "https://t.me/HayuA94",
		whatsApp: "https://wa.me/qr/W3J3CRKSQO4TB1",
		linkedin: "https://www.linkedin.com/in/sumeya-ahmedelbedewi-425265288",
		contacts: true,
	},
	{
		title: "Experience",
		subtitle: "of transforming companies and delivering clarity.",
		experience: true,
	},
	{
		title: "Skills",
		text: "My technical and soft skills will help your business",
		skils: true,
	},
	{
		title: "Achievements & Certifications",
		achievements: true,
	},
	{
		title: "Languages",
		subtitle: "Your words, my understanding.",
		languages: true,
	},
]

export const CardsCarousel: FC<CardsCarouselProps> = ({}) => {
	const slides = data.map(item => (
		<Carousel.Slide key={item.title}>
			<Card {...item} />
		</Carousel.Slide>
	))

	return (
		<Carousel
			slideSize="320"
			slideGap={24}
			align="start"
			slidesToScroll={1}
			withControls={false}
			className={classes.carousel}
			withIndicators
			styles={{
				viewport: {
					padding: rem("24px"),
				},
				indicator: {
					width: rem("6px"),
					height: rem("6px"),
				},
				indicators: {
					bottom: rem("9px"),
				},
			}}
		>
			{slides}
		</Carousel>
	)
}
