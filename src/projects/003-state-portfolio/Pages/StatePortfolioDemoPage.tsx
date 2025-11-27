import { Portfolio } from "../components";
import projects from "../data/projects.json";
import styles from "./StatePortfolioDemoPage.module.scss";

/**
 * Компонент демо-страницы портфолио
 */
export default function StatePortfolioDemoPage() {
	return (
		<div className={styles["demo-page"]}>
			<div className={styles["demo-page__section"]}>
				<Portfolio projects={projects} />
			</div>
		</div>
	);
}
