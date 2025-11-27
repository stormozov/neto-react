import { Button } from "@common/components";
import type { IGoodsItem } from "../../shared/interfaces";
import styles from "./GoodItem.module.scss";

/**
 * Интерфейс, описывающий свойства компонента GoodItem
 */
interface IGoodItemProps {
	product: IGoodsItem;
}

/**
 * Компонент, отображающий карточку товара в режиме отображения списка
 */
export default function GoodItem({ product }: IGoodItemProps) {
	return (
		<li className={styles["good-item"]}>
			<img
				src={product.img}
				alt={product.name}
				className={styles["good-item__img"]}
			/>

			<h3 className={styles["good-item__name"]}>{product.name}</h3>
			<div className={styles["good-item__color"]}>
				<div
					className={styles["good-item__color-block"]}
					style={{ backgroundColor: product.color }}
				></div>
				<p className={styles["good-item__color-text"]}>{product.color}</p>
			</div>

			<div className={styles["good-item__wrap"]}>
				<span className={styles["good-item__price"]}>
					{`$${product.price}`}
				</span>
				<Button title="Add to cart">
					<span>Add to cart</span>
				</Button>
			</div>
		</li>
	);
}
