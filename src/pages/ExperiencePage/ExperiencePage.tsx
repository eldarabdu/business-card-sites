import { FC } from "react"
import classes from "./styles.module.scss"
import { Link } from "react-router-dom"
import { Button, Divider, Flex, ScrollArea, Stack, Title } from "@mantine/core"
import { motion } from "motion/react"

import ArrowLeft from "@/assets/icons/arrow-left.svg?react"
import LinkedIn from "@/assets/icons/linkedin-logo.svg?react"
import Telegram from "@/assets/icons/telegram-logo.svg?react"
import Whatsapp from "@/assets/icons/whatsapp-logo.svg?react"
import EmailIcon from "@/assets/icons/envelope-simple.svg?react"
import { SlidTabs } from "@/components/SlidTabs"

interface ExperiencePageProps {}

const mock = [
	{
		period: "Jul 2024 - Present",
		title: "Personal Assistant",
		company: "Aymen Farm",
		content: [
			"Supervise and manage all financial transactions, making sure that records and reporting are accurate and timely.",
			"Deliver administrative assistance to speed up operations and improve organizational efficiency.",
			"Provide accountability and adaptability in a fast-paced work environment, assuring task coordination.",
			"Collaborate with team members to enhance workflow efficiency and achieve organizational goals.",
			"Show strong attention to detail and organizational skills to handle multiple tasks effectively.",
		],
	},

	{
		period: "Jan 2024 - Jul 2024",
		title: "Accountant",
		company: "Cargo Boss Logistics PLC",
		content: [
			"Managed all financial transactions, ensuring accuracy and compliance with company policies and regulations",
			"Prepared tax declarations, payroll, and other essential accounting services within strict deadlines.",
			"Used accounting software (Peachtree) to maintain accurate financial records and streamline processes.",
			"Conducted bank reconciliations, resolving differences efficiently to maintain financial transparency.",
			"Prepared and submitted accurate electronic tax reports, ensuring compliance with national tax regulations.",
		],
	},

	{
		period: "Sep-2023 - Dec-2023",
		title: "Bank Trainee",
		company: "Zamzam Bank",
		content: [
			"Provided exceptional customer service to a large volume of clients, ensuring their needs were addressed quickly and professionally.",
			"Assisted in marketing banking products and services to enhance customer engagement and drive business growth.",
			"Collaborated with team members to improve banking operations, significantly improving teamwork and interpersonal skills.",
			"Gained hands-on experience in banking operations and client management.",
		],
	},

	{
		period: "Oct 2019 - Jul 2023",
		title: "University",
		company: "Unity University Addis Ababa",
		companyTitle: false,
		content: ["BA Degree in Accounting and Finance."],
	},
	{
		period: "2005 - 2019",
		title: "Schools",
		company: "Sumeya Schools",
		companyTitle: false,
		content: ["High school graduation certificate."],
	},
]

export const ExperiencePage: FC<ExperiencePageProps> = ({}) => {
	return (
		<div className={classes.experience}>
			<ScrollArea className={classes.scroll} scrollbars="y" h={"100%"}>
				<motion.div
					key="Jul2024Present"
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
							Experience
						</Title>
					</div>
				</motion.div>

				<Stack h={"100%"} justify="space-between">
					<SlidTabs tabs={mock} defaultValue={"Personal Assistant"} />
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
