import React from "react";
import type { IPortfolioProject } from "../../shared/interfaces";
import { ProjectList, Toolbar } from "..";
import styles from "./Portfolio.module.scss";

/**
 * Категория активного фильтра по умолчанию.
 */
const DEFAULT_ACTIVE_CATEGORY = "All";

/**
 * Список категорий для фильтрации проектов.
 */
const FILTERS = ["All", "Websites", "Flayers", "Business Cards"];

/**
 * Интерфейс, описывающий свойства компонента Portfolio.
 */
interface IPortfolioProps {
	projects: IPortfolioProject[];
}

/**
 * Интерфейс, описывающий состояние компонента Portfolio.
 */
interface IPortfolioState {
	activeCategory: string;
}

/**
 * Компонент портфолио, отображающий проекты с возможностью фильтрации
 * по категориям.
 *
 * Управляет состоянием активной категории и передаёт её дочерним компонентам.
 */
export default class Portfolio extends React.Component<
	IPortfolioProps,
	IPortfolioState
> {
	/**
	 * Состояние компонента, содержащее активную категорию фильтра.
	 *
	 * @see {@link DEFAULT_ACTIVE_CATEGORY}.
	 */
	state = {
		activeCategory: DEFAULT_ACTIVE_CATEGORY,
	};

	/**
	 * Возвращает текущую активную категорию из состояния.
	 */
	getActiveCategory(): string {
		return this.state.activeCategory;
	}

	/**
	 * Устанавливает новую активную категорию в состоянии компонента.
	 */
	setActiveCategory(category: string): void {
		this.setState({ activeCategory: category });
	}

	onCategoryChange(category: string) {
		this.setActiveCategory(category);
	}

	/**
	 * Отрисовывает компонент портфолио, включающий панель фильтров и список
	 * проектов.
	 */
	render() {
		const { projects } = this.props;
		const activeCategory = this.getActiveCategory();

		return (
			<div className={styles.portfolio}>
				<Toolbar
					{...{
						filters: FILTERS,
						activeCategory,
						onCategoryChange: this.onCategoryChange.bind(this),
					}}
				/>
				<ProjectList {...{ projects, activeCategory }} />
			</div>
		);
	}
}
