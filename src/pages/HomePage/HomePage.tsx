import { ProjectList } from "@common/components";
import { PROJECT_LIST } from "@projects/manifest";
import classNames from "classnames";
import styles from "./HomePage.module.scss";

export default function HomePage() {
	return (
		<div className="container">
			<h1 className="tac">Учебные проекты на React</h1>
			<p className={classNames(styles["home-page-description"], "tac")}>
				Коллекция моих проектов на React, выполненные в рамках обучения в
				Нетологии.
			</p>
			<ProjectList list={PROJECT_LIST} />
		</div>
	);
}
