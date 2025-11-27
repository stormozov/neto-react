import { Button } from "@/common/components";
import type { IGoodsItem } from "../../shared/interfaces";
import styles from "./GoodCard.module.scss";

/**
 * Интерфейс, описывающий свойства компонента ShopCard
 */
interface IShopCardProps {
	product: IGoodsItem;
}

/**
 * Компонент, отображающий карточку товара в режиме отображения карточек
 */
export default function GoodCard({ product }: IShopCardProps) {
	return (
		<li className={styles["good-card"]}>
			<img
				src={product.img}
				alt={product.name}
				className={styles["good-card__img"]}
			/>

			<h3 className={styles["good-card__name"]}>{product.name}</h3>
			
			<div className={styles["good-card__color"]}>
				<div
					className={styles["good-card__color-block"]}
					style={{ backgroundColor: product.color }}
				></div>
				<p className={styles["good-card__color-text"]}>{product.color}</p>
			</div>

			<div className={styles["good-card__wrap"]}>
				<span className={styles["good-card__price"]}>
					{`$${product.price}`}
				</span>
				<Button title="Add to cart">
					<span>Add to cart</span>
				</Button>
			</div>
		</li>
	);
}
