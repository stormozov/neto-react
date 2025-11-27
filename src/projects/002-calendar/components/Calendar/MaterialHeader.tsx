import styles from "./Calendar.module.scss";

/**
 * Интерфейс, описывающий свойства компонента MaterialHeader
 */
interface IMaterialHeaderProps {
	dayName: string;
	dayNumber: number;
	monthNameGenitive: string;
	year: number;
}

/**
 * Шапка календаря, отображающая день недели, день, месяц и год
 */
export default function MaterialHeader({
	dayName,
	dayNumber,
	monthNameGenitive,
	year,
}: IMaterialHeaderProps) {
	return (
		<div className={styles["ui-datepicker__material-header"]}>
			<div className={styles["ui-datepicker__material-day"]}>{dayName}</div>
			<div className={styles["ui-datepicker__material-date"]}>
				<div className={styles["ui-datepicker__material-day-num"]}>
					{dayNumber}
				</div>
				<div className={styles["ui-datepicker__material-month"]}>
					{monthNameGenitive}
				</div>
				<div className={styles["ui-datepicker__material-year"]}>{year}</div>
			</div>
		</div>
	);
}
