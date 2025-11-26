import classnames from "classnames";
import styles from "./ProjectTags.module.scss";

interface IProjectTagsProps {
	tags: string[];
	classes?: string;
}

export default function ProjectTags({ tags, classes }: IProjectTagsProps) {
	if (!tags.length) return null;

	const classSelectors = classes
		? classnames(styles["project-tags"], classes)
		: styles["project-tags"];

	return (
		<ul className={classSelectors}>
			{tags.map((tag) => (
				<li key={tag} className={styles["project-tags__tag"]}>
					{tag}
				</li>
			))}
		</ul>
	);
}
