import { ProjectPageLayout } from "@common/components/Layouts";
import { PROJECT_LIST } from "@projects/manifest";
import { Suspense } from "react";
import { Link, useParams } from "react-router";

export default function ProjectPage() {
	const { projectId } = useParams();
	const project = projectId
		? PROJECT_LIST.find((p) => p.id === projectId)
		: null;

	if (!project) return <Link to="/">Проект не найден</Link>;

	const PageComponent = project.Component;

	return (
		<ProjectPageLayout headerProps={project.content}>
			<Suspense fallback={<div>Загрузка...</div>}>
				<PageComponent />
			</Suspense>
		</ProjectPageLayout>
	);
}
