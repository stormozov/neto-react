import type { IGoodsItem } from "../../shared/interfaces";
import { GoodCard } from "../GoodCard";
import styles from "./CardsView.module.scss";

/**
 * Интерфейс, описывающий свойства компонента CardsView
 */
interface ICardsViewProps {
	products: IGoodsItem[];
}

/**
 * Компонент, отображающий список товаров в режиме отображения карточек
 */
export default function CardsView({ products }: ICardsViewProps) {
	return (
		<div className={styles["cards-grid"]}>
			<ul className={styles["cards-grid__list"]}>
				{products.map((product) => (
					<GoodCard key={product.id} product={product} />
				))}
			</ul>
		</div>
	);
}
