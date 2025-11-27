import styles from "./Calendar.module.scss";
import CalendarDay from "./CalendarDay";
import type { ICalendarDay } from "./types";
import { DAYS_SHORT_RUS, getDayName } from "./utils";

/**
 * Интерфейс, описывающий свойства компонента CalendarTable
 */
interface ICalendarTableProps {
	calendarDays: ICalendarDay[];
	today: Date;
}

/**
 * Компонент таблицы календаря
 */
export default function CalendarTable({
	calendarDays,
	today,
}: ICalendarTableProps) {
	const weeks = Array.from({ length: 6 }, (_, weekIndex) => {
		const start = weekIndex * 7;
		return calendarDays.slice(start, start + 7);
	});

	return (
		<table className={styles["ui-datepicker__calendar"]}>
			<colgroup>
				<col />
				<col />
				<col />
				<col />
				<col />
				<col className={styles["ui-datepicker__week-end"]} />
				<col className={styles["ui-datepicker__week-end"]} />
			</colgroup>

			<thead>
				<tr>
					{DAYS_SHORT_RUS.map((day) => (
						<th
							key={day}
							scope="col"
							title={getDayName(DAYS_SHORT_RUS.indexOf(day))}
							className={styles["ui-datepicker__calendar-head-day"]}
						>
							{day}
						</th>
					))}
				</tr>
			</thead>

			<tbody className={styles["ui-datepicker__calendar-body"]}>
				{weeks.map((weekDays, weekIndex) => {
					const weekKey =
						weekDays[0]?.date.toISOString() || `week-${weekIndex}`;

					return (
						<tr
							key={weekKey}
							className={styles["ui-datepicker__calendar-week"]}
						>
							{weekDays.map((dayObj) => (
								<CalendarDay
									key={dayObj.date.toISOString()}
									dayObj={dayObj}
									today={today}
								/>
							))}
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}
