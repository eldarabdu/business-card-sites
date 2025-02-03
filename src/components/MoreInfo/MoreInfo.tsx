import { FC } from "react"
import classes from "./styles.module.scss"
import {
	Popover,
	Group,
	Avatar,
	Stack,
	Text,
	Anchor,
	Title,
	Flex,
	Button,
	Divider,
} from "@mantine/core"

import LinkedIn from "@/assets/icons/linkedin-logo.svg?react"
import Telegram from "@/assets/icons/telegram-logo.svg?react"
import Whatsapp from "@/assets/icons/whatsapp-logo.svg?react"
import EmailIcon from "@/assets/icons/envelope-simple.svg?react"
import { Link } from "react-router-dom"

interface MoreInfoProps {
	children?: React.ReactNode
	title?: string
	text?: string
}

export const MoreInfo: FC<MoreInfoProps> = ({ children, title, text }) => {
	const { name, avatarUrl }: any = {
		name: "Sumeya A/Bedewi",
		avatarUrl: "/sumeya.jpg",
	}

	return (
		<Popover width={320} shadow="md" withOverlay overlayProps={{ zIndex: 10000 }} zIndex={10001}>
			<Popover.Target>{children}</Popover.Target>
			<Popover.Dropdown>
				<Group>
					<Avatar src={avatarUrl} alt={name ? name : "Пользователь"} radius="xl" />
					<Stack gap={5}>
						<Text size="sm" fw={700} style={{ lineHeight: 1 }}>
							Sumeya A/Bedewi
						</Text>
						<Anchor href="https://t.me/HayuA94" c="dimmed" size="xs" style={{ lineHeight: 1 }}>
							@HayuA94
						</Anchor>
					</Stack>
				</Group>
				<Title mt="md">{title}</Title>
				<Text size="sm" mt="md" mb="md">
					{text}
				</Text>

				<Divider className={classes.divider} h={1} m={0} w={"100%"} />
				<Flex mt="md" mb="md" gap="xs" w={"100%"} className={classes.links}>
					<a
						href={"https://www.linkedin.com/in/sumeya-ahmedelbedewi-425265288"}
						className={classes.link}
						target="_blank"
					>
						<Button className={classes.button} c={"white"} variant="default">
							<LinkedIn className={classes.icon} width={"100%"} height={"100%"} />
						</Button>
					</a>
					<a href={"mailto:sumeyaahmedelbedewi@gmail.com"} className={classes.link}>
						<Button className={classes.button} c={"white"} variant="default">
							<EmailIcon className={classes.icon} width={"100%"} height={"100%"} />
						</Button>
					</a>
					<a href={"https://t.me/HayuA94"} className={classes.link} target="_blank">
						<Button className={classes.button} c={"white"} variant="default">
							<Telegram className={classes.icon} width={"100%"} height={"100%"} />
						</Button>
					</a>
					<a href={"https://wa.me/qr/W3J3CRKSQO4TB1"} className={classes.link} target="_blank">
						<Button className={classes.button} c={"white"} variant="default">
							<Whatsapp className={classes.icon} width={"100%"} height={"100%"} />
						</Button>
					</a>
					<Link to="/experience">
						<Button className={classes.button} variant="default">
							Experience
						</Button>
					</Link>
				</Flex>
			</Popover.Dropdown>
		</Popover>
	)
}
