import type { IPortfolioProject } from "../../shared/interfaces";
import styles from "./ProjectList.module.scss";

/**
 * Интерфейс, описывающий свойства компонента ProjectList
 */
interface IProjectListProps {
	projects: IPortfolioProject[];
	activeCategory: string;
}

/**
 * Компонент, отображающий список проектов с возможностью фильтрации 
 * по категориям
 */
export default function ProjectList({
	projects,
	activeCategory,
}: IProjectListProps) {
	const showItems =
		activeCategory === "All"
			? projects
			: projects.filter((item) => item.category === activeCategory);

	return (
		<ul className={styles["project-list"]}>
			{showItems.map((item) => (
				<li key={item.id} className={styles["project-list__item"]}>
					<img src={item.img} alt={item.category} />
				</li>
			))}
		</ul>
	);
}
