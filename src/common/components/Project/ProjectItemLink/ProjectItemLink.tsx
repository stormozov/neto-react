import type { IProjectList } from "@common/shared/interfaces";
import { Link } from "react-router";
import ProjectTags from "../ProjectTags/ProjectTags";
import styles from "./ProjectItemLink.module.scss";

type IProjectItemLinkProps = Pick<IProjectList, "id" | "content">;

export default function ProjectItemLink({
	id,
	content,
}: IProjectItemLinkProps) {
	const { title, descriptionShort, tags } = content;

	return (
		<Link to={`/projects/${id}`} className={styles["project-item"]}>
			<h2 className={styles["project-item__title"]}>{title}</h2>
			<p className={styles["project-item__description"]}>{descriptionShort}</p>
			{tags && (
				<ProjectTags tags={tags} classes={styles["project-item__tags"]} />
			)}
		</Link>
	);
}
