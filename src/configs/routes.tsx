import { IRoute } from "@/types/routes"
import { lazy } from "react"

const HomePage = lazy(() => import("@/pages/ProfilePage"))
const ExperiencePage = lazy(() => import("@/pages/ExperiencePage"))
const SkillsPage = lazy(() => import("@/pages/SkillsPage"))

class RouterConfig {
	routes: IRoute[] = [
		{
			path: "/",
			component: <HomePage />,
			slug: "home",
		},
		{
			path: "/experience",
			component: <ExperiencePage />,
			slug: "experience",
		},
		{
			path: "/skills",
			component: <SkillsPage />,
			slug: "skills",
		},
	]

	getRouteBySlug(slug: string) {
		return this.routes.find(route => route.slug === slug)
	}
}

export const routerConfig = new RouterConfig()
