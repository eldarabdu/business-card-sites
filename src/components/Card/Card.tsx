import { FC } from "react"
import classes from "./styles.module.scss"
import { Paper, Title, Text, Button, Flex, UnstyledButton, Stack } from "@mantine/core"
import { MoreInfo } from "../MoreInfo"
import { Link } from "react-router-dom"

import LinkedIn from "@/assets/icons/linkedin-logo.svg?react"
import Telegram from "@/assets/icons/telegram-logo.svg?react"
import Whatsapp from "@/assets/icons/whatsapp-logo.svg?react"
import EmailIcon from "@/assets/icons/envelope-simple.svg?react"

interface CardProps {
	title: string
	text?: string
	subtitle?: string
	modal?: boolean
	contacts?: boolean
	experience?: boolean
	skils?: boolean
	achievements?: boolean
	languages?: boolean
	email?: string
	telegram?: string
	whatsApp?: string
	linkedin?: string
}

export const Card: FC<CardProps> = ({
	title,
	text,
	subtitle,
	modal,
	contacts,
	experience,
	skils,
	achievements,
	languages,
	email,
	telegram,
	whatsApp,
	linkedin,
}) => {
	return (
		<Paper shadow="md" p="xl" radius="md" className={classes.card}>
			{!languages && <Title className={classes.title}>{title}</Title>}
			{languages && (
				<>
					<div className={classes.head}>
						<Title className={classes.title}>{title}</Title>
						{subtitle && (
							<Text fz={16} className={classes.text} lineClamp={3}>
								{subtitle}
							</Text>
						)}
					</div>
				</>
			)}

			<div className={classes.container}>
				{text && (
					<Text className={classes.text} lineClamp={3}>
						{text}
					</Text>
				)}

				{contacts && (
					<>
						<a href={linkedin} className={classes.link} target="_blank">
							<Button
								className={classes.button + " " + classes.buttonMax}
								c={"white"}
								variant="default"
							>
								LinkedIn
							</Button>
						</a>
						<a href={"mailto:" + email} className={classes.link}>
							<Button
								className={classes.button + " " + classes.buttonMax}
								c={"white"}
								variant="default"
							>
								{email}
							</Button>
						</a>
						<Flex gap="xs" w={"100%"} className={classes.links}>
							<a href={telegram} className={classes.link} target="_blank">
								<Button
									className={classes.button + " " + classes.buttonMax}
									c={"white"}
									variant="default"
								>
									Telegram
								</Button>
							</a>
							<a href={whatsApp} className={classes.link} target="_blank">
								<Button
									className={classes.button + " " + classes.buttonMax}
									c={"white"}
									variant="default"
								>
									WhatsApp
								</Button>
							</a>
						</Flex>
					</>
				)}

				{experience && (
					<>
						<div>
							<Title fz={62} className={classes.title} fw={300}>
								1 YEAR
							</Title>
							{subtitle && (
								<Text fz={18} className={classes.text} lineClamp={3}>
									{subtitle}
								</Text>
							)}
						</div>

						<Flex w={"100%"} pt={12} gap={"xs"}>
							<Link to="/experience">
								<Button className={classes.button} c={"white"} variant="default">
									Read more
								</Button>
							</Link>

							<a href="SumeyaCV.pdf" download>
								<Button className={classes.button} c={"white"} variant="default">
									Download CV
								</Button>
							</a>
						</Flex>
					</>
				)}

				{skils && (
					<Link to="/skills">
						<Button className={classes.button} c={"white"} variant="default">
							Read more
						</Button>
					</Link>
				)}

				{achievements && (
					<>
						<Stack fw={300} c={"white"} w={"100%"} gap={12}>
							<Stack gap={0}>
								<Title fz={16} fw={400}>
									English Language Qualification:
								</Title>
								<Text fz={14} fw={300}>
									H2 Training Center
								</Text>
							</Stack>

							<Stack gap={0}>
								<Title fz={16} fw={400}>
									Advanced Excel Training:
								</Title>
								<Text fz={14} fw={300}>
									Addis Ababa University
								</Text>
							</Stack>
						</Stack>
					</>
				)}

				{modal && (
					<MoreInfo title={title} text={text}>
						<div>
							<Button className={classes.button} c={"white"} variant="default">
								Read more
							</Button>
							<UnstyledButton className={classes.invisible}></UnstyledButton>
						</div>
					</MoreInfo>
				)}

				{languages && (
					<>
						<Stack fw={300} c={"white"} w={"100%"} gap={0}>
							<Flex gap={12} justify={"space-between"}>
								<p>English:</p>
								<div className={classes.special}>
									<p>Advanced</p>
								</div>
							</Flex>
							<Flex gap={12} justify={"space-between"}>
								<p>Arabic:</p>
								<div className={classes.special}>
									<p>Intermediate</p>
								</div>
							</Flex>
							<Flex gap={12} justify={"space-between"}>
								<p>Amharic:</p>
								<div className={classes.special}>
									<p>Native</p>
								</div>
							</Flex>
						</Stack>
						<Flex gap="xs" className={classes.links}>
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
					</>
				)}
			</div>
		</Paper>
	)
}
