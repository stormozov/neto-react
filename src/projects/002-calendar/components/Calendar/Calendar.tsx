import styles from "./Calendar.module.scss";
import CalendarHeader from "./CalendarHeader";
import CalendarTable from "./CalendarTable";
import MaterialHeader from "./MaterialHeader";
import { getCalendarData } from "./utils";

/**
 * Интерфейс, описывающий свойства компонента Calendar
 */
interface ICalendarProps {
	date: Date;
}

/**
 * Компонент календаря, который отрисовывает в DOM компоненты CalendarHeader,
 * CalendarTable и MaterialHeader
 */
export default function Calendar({ date }: ICalendarProps) {
	const {
		// Данные для CalendarHeader и MaterialHeader
		year,

		// Данные для MaterialHeader
		dayName,
		dayNumber,
		monthNameGenitive,

		// Данные для CalendarHeader
		monthNameNominative,

		// Данные для CalendarTable
		calendarDays,
		today,
	} = getCalendarData(date);

	return (
		<div className={styles["ui-datepicker"]}>
			<MaterialHeader {...{ dayName, dayNumber, monthNameGenitive, year }} />
			<CalendarHeader {...{ monthNameNominative, year }} />
			<CalendarTable {...{ calendarDays, today, }} />
		</div>
	);
}
