import { ProjectTags } from "@common/components/Project";
import type { IProjectContent } from "@common/shared/interfaces";
import classNames from "classnames";
import { FaListOl } from "react-icons/fa6";
import { Link } from "react-router";
import styles from "./ProjectPageLayout.module.scss";

interface IProjectListProps {
	headerProps: IProjectContent;
	children: React.ReactNode;
}

export function ProjectPageLayout({
	headerProps,
	children,
}: IProjectListProps) {
	const { title, descriptionShort, descriptionLong, tags } = headerProps;

	return (
		<div className={styles["project-page"]}>
			<div className="container">
				<header className={styles["project-page__header"]}>
					<div className={styles["project-page__header-row"]}>
						<Link
							to="/"
							className={classNames(
								styles["project-page__header-link"],
								"with-icon",
							)}
						>
							<FaListOl />
							<span>Список проектов</span>
						</Link>
					</div>

					<div className={styles["project-page__header-row"]}>
						<div className={styles["project-page__header-project-wrapper"]}>
							<span className={styles["project-page__header-project"]}>
								Проект:
							</span>
							<h1 className={styles["project-page__header-title"]}>{title}</h1>
							{descriptionShort && (
								<p className={styles["project-page__header-desc-short"]}>
									{descriptionShort}
								</p>
							)}
							{tags && <ProjectTags tags={tags} />}
						</div>
					</div>

					<div className={styles["project-page__header-row"]}>
						{descriptionLong && (
							<div className={styles["project-page__header-desc-long"]}>
								{descriptionLong}
							</div>
						)}
					</div>
				</header>
				<div className={styles["project-page__content"]}>{children}</div>
			</div>
		</div>
	);
}
