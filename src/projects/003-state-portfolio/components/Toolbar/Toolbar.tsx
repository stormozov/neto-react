import classnames from "classnames";
import styles from "./Toolbar.module.scss";

/**
 * Интерфейс, описывающий свойства компонента Toolbar
 */
interface IToolbarProps {
	filters: string[];
	activeCategory: string;
	onCategoryChange: (category: string) => void;
}

/**
 * Компонент, отображающий панель инструментов для фильтрации проектов в списке
 */
export default function Toolbar({
	filters,
	activeCategory,
	onCategoryChange,
}: IToolbarProps) {
	return (
		<div className={styles.toolbar}>
			<div className={styles.toolbar__buttons}>
				{filters.map((filter) => (
					<button
						key={filter}
						type="button"
						className={classnames(
							styles.toolbar__button,
							activeCategory === filter && styles["toolbar__button--active"]
						)}
						onClick={() => onCategoryChange(filter)}
					>
						{filter}
					</button>
				))}
			</div>
		</div>
	);
}
