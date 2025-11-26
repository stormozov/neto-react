import type { IProjectList } from "@common/shared/interfaces";
import { ProjectItemLink } from "../ProjectItemLink";
import styles from "./ProjectList.module.scss";

export interface IProjectListProps {
	list: IProjectList[];
}

export default function ProjectList({ list }: IProjectListProps) {
	return (
		<ul className={styles["projects-list"]}>
			{list.map((item) => (
				<li key={item.id} className={styles["projects-list__item"]}>
					<ProjectItemLink id={item.id} content={item.content} />
				</li>
			))}
		</ul>
	);
}
