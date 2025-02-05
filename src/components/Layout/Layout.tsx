import { FC } from "react"
import classes from "./styles.module.scss"
import { Outlet } from "react-router-dom"
import { motion } from "motion/react"
import Hayu from "@/assets/sumeya.jpg"

interface LayoutProps {}

export const Layout: FC<LayoutProps> = ({}) => {
	const pageVariants = {
		initial: {
			// clipPath: "circle(30px at 0% 100%)",
			opacity: 0,
		},
		animate: {
			// clipPath: `circle(200% at 0% 100%)`,
			opacity: 1,
		},
		exit: {
			// clipPath: "circle(30px at 0% 100%)",
			opacity: 1,
		},
	}

	return (
		<div className={classes.layout}>
			<img src={Hayu} className={classes.backgroundImage} alt="photo of Sumeya A/Bedewi" />
			<div className={classes.overlay}></div>
			<motion.div
				variants={pageVariants}
				className={classes.motion}
				initial="initial"
				animate="animate"
				exit="exit"
			>
				<Outlet />
			</motion.div>
		</div>
	)
}
