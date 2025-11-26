import { HomePage, NotFoundPage, ProjectPage } from '@pages';
import { createBrowserRouter } from 'react-router';
import App from '@/App';

export const router = createBrowserRouter(
	[
		{
			path: "/",
			Component: App,
			children: [
				{
					index: true,
					Component: HomePage,
				},
				{
					path: "projects",
					children: [
						{
							path: ":projectId",
							Component: ProjectPage,
						},
					],
				},
				{
					path: "*",
					Component: NotFoundPage,
				},
			],
		},
	],
	{
		basename: import.meta.env.BASE_URL,
	},
);
