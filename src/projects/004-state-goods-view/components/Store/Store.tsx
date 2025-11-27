import React from "react";
import type { IGoodsItem } from "../../shared/interfaces";
import { CardsView } from "../CardsView";
import { IconSwitch } from "../IconSwitch";
import { ListView } from "../ListView";
import styles from "./Store.module.scss";

/**
 * Тип, описывающий варианты отображения товаров в списке
 */
type GoodDisplayType = "grid" | "list";

/**
 * Интерфейс, описывающий свойства компонента Store
 */
interface IStoreProps {
	products: IGoodsItem[];
}

/**
 * Интерфейс, описывающий состояние компонента Store
 */
interface IStoreState {
	display: GoodDisplayType;
}

/**
 * Компонент магазина
 *
 * @description
 * Главный компонент, который управляет логикой приложения. Он хранит в себе
 * состояние (выбранный вид отображения) и решает, какой из компонентов
 * — CardsView или ListView — должен быть отображен.
 */
export default class Store extends React.Component<IStoreProps, IStoreState> {
	INIT_DISPLAY_TYPE: GoodDisplayType = "grid";

	state = {
		display: this.INIT_DISPLAY_TYPE,
	};

	constructor(props: IStoreProps) {
		super(props);
		this.toggleDisplayType = this.toggleDisplayType.bind(this);
	}

	getDisplayType(): string {
		return this.state.display;
	}

	setDisplayType(type: GoodDisplayType) {
		this.setState({ display: type });
	}

	toggleDisplayType() {
		const type = this.getDisplayType() === "grid" ? "list" : "grid";
		this.setDisplayType(type);
	}

	/**
	 * Отображает список товаров, согласно текущему состоянию отображения
	 */
	renderProducts() {
		const { products } = this.props;
		const displayType = this.getDisplayType();

		if (displayType === "grid") {
			return <CardsView products={products} />;
		} else {
			return <ListView products={products} />;
		}
	}

	/**
	 * Отображает компонент магазина
	 */
	render() {
		return (
			<div className={styles.store}>
				<IconSwitch
					icon={this.getDisplayType()}
					position="right"
					onSwitch={this.toggleDisplayType}
				/>
				{this.renderProducts()}
			</div>
		);
	}
}
