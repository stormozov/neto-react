/**
 * Интерфейс, описывающий свойства объекта даты
 */
export interface ICalendarDay {
	day: number;
	isCurrentMonth: boolean;
	date: Date;
}

/**
 * Интерфейс, описывающий свойства данных календаря
 */
export interface ICalendarData {
	dayName: string;
	monthNameNominative: string;
	monthNameGenitive: string;
	year: number;
	dayNumber: number;
	calendarDays: ICalendarDay[];
	today: Date;
}
