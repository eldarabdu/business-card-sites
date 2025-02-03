import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"
import { MantineProvider } from "@mantine/core"
import "@mantine/core/styles.css"
import "@mantine/carousel/styles.css"
import theme from "./configs/style.config"
import { AnimatePresence } from "motion/react"
import { routerConfig } from "./configs/routes"
import { Suspense } from "react"
import { Layout } from "./components/Layout"

const App = () => {
	return (
		<MantineProvider theme={theme}>
			<BrowserRouter>
				<AnimatedRoutes />
			</BrowserRouter>
		</MantineProvider>
	)
}

const AnimatedRoutes = () => {
	const location = useLocation()

	return (
		<AnimatePresence mode="wait" initial={false}>
			<Routes location={location} key={location.pathname}>
				<Route element={<Layout />}>
					{routerConfig.routes.map(route => (
						<Route
							key={route.slug}
							path={route.path}
							element={<Suspense>{route.component}</Suspense>}
						>
							{route.children?.map(child => (
								<Route
									key={child.slug}
									path={child.path}
									element={<Suspense>{child.component}</Suspense>}
								/>
							))}
						</Route>
					))}
				</Route>
			</Routes>
		</AnimatePresence>
	)
}

export default App
