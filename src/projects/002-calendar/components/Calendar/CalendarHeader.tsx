import styles from "./Calendar.module.scss";

/**
 * Интерфейс, описывающий свойства компонента CalendarHeader
 */
interface ICalendarHeaderProps {
	monthNameNominative: string;
	year: number;
}

/**
 * Компонент заголовка календаря, в котором отображается текущий месяц и год
 */
export default function CalendarHeader({
	monthNameNominative,
	year,
}: ICalendarHeaderProps) {
	return (
		<div className={styles["ui-datepicker__header"]}>
			<div className={styles["ui-datepicker__title"]}>
				<span className={styles["ui-datepicker__month"]}>
					{monthNameNominative}
				</span>
				&nbsp;
				<span className={styles["ui-datepicker__year"]}>{year}</span>
			</div>
		</div>
	);
}
