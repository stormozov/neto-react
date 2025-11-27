import styles from "./Calendar.module.scss";
import type { ICalendarDay } from "./types";
import { isSameDay } from "./utils";

interface CalendarDayProps {
	dayObj: ICalendarDay;
	today: Date;
}

export default function CalendarDay({ dayObj, today }: CalendarDayProps) {
	const isToday = isSameDay(dayObj.date, today);

	const classNames = [
		styles["ui-datepicker__calendar-day"],
		!dayObj.isCurrentMonth &&
			styles["ui-datepicker__calendar-day--other-month"],
		isToday && styles["ui-datepicker__calendar-day--today"],
	]
		.filter(Boolean)
		.join(" ");

	return (
		<td key={dayObj.date.toISOString()} className={classNames}>
			{dayObj.day}
		</td>
	);
}
