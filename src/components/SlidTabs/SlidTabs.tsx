import { FC } from "react"
import classes from "./styles.module.scss"
import { Stack, Tabs, Text } from "@mantine/core"
import { Carousel } from "@mantine/carousel"
import { InfoCard } from "../InfoCard"
import { motion } from "motion/react"

interface SlidTabsProps {
	tabs: tab[]
	defaultValue: string
}

export const SlidTabs: FC<SlidTabsProps> = ({ tabs, defaultValue }) => {
	return (
		<div className={classes.container}>
			<Tabs w={"100%"} defaultValue={defaultValue}>
				<motion.div
					initial={{ translateY: "-100%", opacity: 0 }}
					animate={{ translateY: 0, opacity: 1 }}
					exit={{ translateY: "-100%", opacity: 0 }}
					transition={{ duration: 0.4 }}
				>
					<Tabs.List mb="md" mt="md" bg={"#fff"}>
						<Carousel
							slideSize="fit-content"
							w={"100vw"}
							slideGap={24}
							align="start"
							slidesToScroll={1}
							withControls={false}
							className={classes.carousel}
							styles={{
								viewport: {},
							}}
						>
							{tabs.map(tab => {
								return (
									<Carousel.Slide key={tab.title}>
										<Tabs.Tab value={tab.title}>
											<Text fz={24} fw={600}>
												{tab.period ? tab.period : tab.title}
											</Text>
										</Tabs.Tab>
									</Carousel.Slide>
								)
							})}
						</Carousel>
					</Tabs.List>
				</motion.div>
				<motion.div
					initial={{ translateX: "100%", opacity: 0 }}
					animate={{ translateX: 0, opacity: 1 }}
					exit={{ translateX: "100%", opacity: 0 }}
					transition={{ duration: 0.4 }}
				>
					{tabs.map(tab => {
						return (
							<Tabs.Panel key={tab.title} h={"100%"} mb={62} value={tab.title}>
								<Stack>
									<InfoCard
										head
										title={tab.title}
										company={tab.company}
										companyTitle={tab.companyTitle}
										period={tab.period}
									/>
									<InfoCard content={tab.content} />
								</Stack>
							</Tabs.Panel>
						)
					})}
				</motion.div>
			</Tabs>
		</div>
	)
}
