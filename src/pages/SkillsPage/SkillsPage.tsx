import { FC } from "react"
import classes from "./styles.module.scss"
import { Button, Divider, Flex, ScrollArea, Stack, Title } from "@mantine/core"
import { motion } from "motion/react"
import { Link } from "react-router-dom"

import ArrowLeft from "@/assets/icons/arrow-left.svg?react"
import LinkedIn from "@/assets/icons/linkedin-logo.svg?react"
import Telegram from "@/assets/icons/telegram-logo.svg?react"
import Whatsapp from "@/assets/icons/whatsapp-logo.svg?react"
import EmailIcon from "@/assets/icons/envelope-simple.svg?react"
import { SlidTabs } from "@/components/SlidTabs"

interface SkillsPageProps {}

const mock = [
	{
		title: "Technical Skills",
		content: [
			"Proficient in MS Excel, Word and PowerPoint",
			"Software for Finance/Accounting (Peachtree)",
			"Proficient in electronic tax reporting and compliance",
			"Financial statement analysis",
		],
	},

	{
		title: "Soft Skills",
		content: [
			"Excellent teamwork and collaboration capabilities",
			"Great attention to details",
			"Effective time management and organizational skills",
			"Strong stress tolerance and ability to perform under pressure",
			"Skilled in managing a high volume of client interactions",
			"Analytical and problem-solving expertise",
			"Strong communication and interpersonal abilities",
			"Strives for perfection in work, ensuring top-quality outcomes",
			"Demonstrates punctuality and consistency in meeting deadlines",
		],
	},
]

export const SkillsPage: FC<SkillsPageProps> = ({}) => {
	return (
		<div className={classes.skills}>
			<ScrollArea scrollbars="y" h={"100%"}>
				<motion.div
					initial={{ translateY: "-100%", opacity: 0 }}
					animate={{ translateY: 0, opacity: 1 }}
					exit={{ translateY: "-100%", opacity: 0 }}
					transition={{ duration: 0.4 }}
				>
					<div className={classes.head}>
						<div className={classes.nav}>
							<Link to="/">
								<ArrowLeft width={32} height={32} className={classes.icon} />
							</Link>
						</div>
						<Title fw={600} lh={1.1} fz={52} className={classes.title}>
							My
							<br />
							Skills
						</Title>
					</div>
				</motion.div>
				<Stack mih={"70dvh"} justify="space-between">
					<SlidTabs tabs={mock} defaultValue={"Technical Skills"} />
					<div>
						<Divider className={classes.divider} h={1} m={0} w={"100%"} />
						<Flex gap="xs" p={24} className={classes.links}>
							<a
								href={"https://www.linkedin.com/in/sumeya-ahmedelbedewi-425265288"}
								className={classes.link}
								target="_blank"
							>
								<Button className={classes.button} c={"white"} p={8} variant="default">
									<LinkedIn className={classes.icon} width={26} height={26} />
								</Button>
							</a>
							<a href={"mailto:sumeyaahmedelbedewi@gmail.com"} className={classes.link}>
								<Button className={classes.button} c={"white"} p={8} variant="default">
									<EmailIcon className={classes.icon} width={26} height={26} />
								</Button>
							</a>
							<a href={"https://t.me/HayuA94"} className={classes.link} target="_blank">
								<Button className={classes.button} c={"white"} p={8} variant="default">
									<Telegram className={classes.icon} width={26} height={26} />
								</Button>
							</a>
							<a href={"https://wa.me/qr/W3J3CRKSQO4TB1"} className={classes.link} target="_blank">
								<Button className={classes.button} c={"white"} p={8} variant="default">
									<Whatsapp className={classes.icon} width={26} height={26} />
								</Button>
							</a>
						</Flex>
					</div>
				</Stack>
			</ScrollArea>
		</div>
	)
}
