import { Store } from "../components";
import goods from "../data/goods.json";
import styles from "./GoodsDemoPage.module.scss";

/**
 * Компонент демо-страницы списка товаров и их отображения
 */
export default function GoodsDemoPage() {
	return (
		<div className={styles["demo-page"]}>
			<div className={styles["demo-page__section"]}>
				<Store products={goods} />
			</div>
		</div>
	);
}
