import classNames from "classnames";
import { ShopItemClass, ShopItemFunc } from "../components";
import shopItemData from "../data/shopItem.json";
import styles from "./ShopItemDemoPage.module.scss";

type TaskConfig = {
	id: number;
	title: string;
	description: string;
	component: React.ReactNode;
};

const tasks: TaskConfig[] = [
	{
		id: 1,
		title: "Задача #1",
		description:
			"Необходимо создать React-компонент ShopItemFunc (функциональный компонент), с помощью которого мы могли бы реализовывать представление информации о товарах из нашего каталога на сайте.",
		component: <ShopItemFunc item={shopItemData} />,
	},
	{
		id: 2,
		title: "Задача #2",
		description:
			"Необходимо создать React-компонент ShopItemClass (class-based компонент), с помощью которого мы могли бы реализовывать представление информации о товарах из нашего каталога на сайте.",
		component: <ShopItemClass item={shopItemData} />,
	},
];

export default function ShopItemDemoPage() {
	return (
		<div className={styles["shop-item-demo-page"]}>
			{tasks.map((task) => (
				<div key={task.id} className={styles["shop-item-demo-page__section"]}>
					<div
						className={classNames(
							styles["shop-item-demo-page__wrapper"],
							styles["shop-item-demo-page__wrapper--task"],
						)}
					>
						<h2>{task.title}</h2>
						<p>{task.description}</p>
					</div>
					<div
						className={classNames(
							styles["shop-item-demo-page__wrapper"],
							styles["shop-item-demo-page__wrapper--solution"],
						)}
					>
						<h2>Решение</h2>
						<div className={styles["shop-item-demo-page__component"]}>
							{task.component}
						</div>
					</div>
				</div>
			))}
		</div>
	);
}