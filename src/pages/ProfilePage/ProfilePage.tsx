import { FC } from "react"
import classes from "./styles.module.scss"
import { CardsCarousel } from "@/components/CardsCarousel"
import { Stack, Title } from "@mantine/core"

interface ProfilePageProps {}

export const ProfilePage: FC<ProfilePageProps> = ({}) => {
	return (
		<div className={classes.profile}>
			<div className={classes.container}>
				<Stack h={"100%"} justify="end" gap={0}>
					<Title order={3} p={24} fz={52} className={classes.title}>
						Professional accountant Sumeya A/Bedewi
					</Title>
					<CardsCarousel />
				</Stack>
			</div>
		</div>
	)
}
