import { FC } from "react"
import classes from "./styles.module.scss"
import { Stack, Title } from "@mantine/core"

interface InfoCardProps {
	head?: boolean
	title?: string
	company?: string
	companyTitle?: boolean
	period?: string
	content?: string[]
}

export const InfoCard: FC<InfoCardProps> = ({
	head,
	title,
	company,
	companyTitle = true,
	period,
	content,
}) => {
	return (
		<div className={classes.container}>
			{head && (
				<div className="head">
					{company ? (
						<Stack>
							<div>
								<span className={classes.subtitle}>
									{companyTitle && "Company: "}
									{company}
								</span>

								<Title className={classes.title} fz={32} fw={500}>
									{title}
								</Title>
							</div>
							<span className={classes.period}>{period}</span>
						</Stack>
					) : (
						<Title className={classes.title} fz={32} fw={500}>
							{title}
						</Title>
					)}
				</div>
			)}

			{content && (
				<ul className={classes.list}>
					{content.map((item, index) => (
						<li className={classes.item} key={index}>
							{item}
						</li>
					))}
				</ul>
			)}
		</div>
	)
}
