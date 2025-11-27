import type { IGoodsItem } from "../../shared/interfaces";
import { ShopItem } from "../GoodItem";
import styles from "./ListView.module.scss";

/**
 * Интерфейс, описывающий свойства компонента ListView
 */
interface IListViewProps {
	products: IGoodsItem[];
}

/**
 * Компонент, отображающий список товаров в режиме отображения списка
 */
export default function ListView({ products }: IListViewProps) {
	return (
		<div className={styles["cards-list"]}>
			<ul className={styles["cards-list__list"]}>
				{products.map((product) => (
					<ShopItem key={product.id} product={product} />
				))}
			</ul>
		</div>
	);
}
