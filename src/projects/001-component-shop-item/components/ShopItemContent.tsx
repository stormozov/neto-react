import { Button } from "@common/components/ui";
import type React from "react";
import { FaCartPlus } from "react-icons/fa6";
import type { IShopItem } from "../shared/interfaces";
import styles from "./ShopItem.module.scss";

interface ShopItemContentProps {
	item: IShopItem;
}

export const ShopItemContent: React.FC<ShopItemContentProps> = ({ item }) => (
	<div className={styles["shop-item"]}>
		<header className={styles["shop-item__header"]}>
			<h3 className={styles["shop-item__brand"]}>{item.brand}</h3>
			<h2 className={styles["shop-item__title"]}>{item.title}</h2>
			<p className={styles["shop-item__description"]}>{item.description}</p>
		</header>

		<div className={styles["shop-item__content"]}>
			<p className={styles["shop-item__description-full"]}>
				{item.descriptionFull}
			</p>
		</div>

		<div className={styles["shop-item__divider"]}></div>

		<footer className={styles["shop-item__footer"]}>
			<div className={styles["shop-item__info"]}>
				<span className={styles["shop-item__price"]}>
					{item.currency + item.price}
				</span>
				<Button variant="primary">
					<FaCartPlus />
					Добавить в корзину
				</Button>
			</div>
		</footer>
	</div>
);
