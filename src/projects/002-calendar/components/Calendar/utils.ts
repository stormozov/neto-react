import type { ICalendarData, ICalendarDay } from "./types";

/**
 * Русские названия дней недели в кратком падеже
 *
 * @example
 * "Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"
 */
export const DAYS_SHORT_RUS = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

/**
 * Русские названия дней недели в полном падеже
 *
 * @example
 * "Понедельник", "Вторник", "Среда"...
 */
export const DAYS_FULL_RUS = [
	"Понедельник",
	"Вторник",
	"Среда",
	"Четверг",
	"Пятница",
	"Суббота",
	"Воскресенье",
];

/**
 * Русские названия месяцев в именительном падеже (для заголовка)
 *
 * @example
 * "Январь", "Февраль", "Март"...
 */
export const MONTHS_NOMINATIVE_RUS = [
	"Январь",
	"Февраль",
	"Март",
	"Апрель",
	"Май",
	"Июнь",
	"Июль",
	"Август",
	"Сентябрь",
	"Октябрь",
	"Ноябрь",
	"Декабрь",
];

/**
 * Русские названия месяцев в родительном падеже
 *
 * @example
 * "Января", "Февраля", "Марта"...
 */
export const MONTHS_GENITIVE_RUS = [
	"Января",
	"Февраля",
	"Марта",
	"Апреля",
	"Мая",
	"Июня",
	"Июля",
	"Августа",
	"Сентября",
	"Октября",
	"Ноября",
	"Декабря",
];

/**
 * Проверка двух дат на равенство
 * 
 * @example
 * isSameDay(new Date(), new Date()) // true
 */
export const isSameDay = (date1: Date, date2: Date): boolean => {
	return (
		date1.getDate() === date2.getDate() &&
		date1.getMonth() === date2.getMonth() &&
		date1.getFullYear() === date2.getFullYear()
	);
};

/**
 * Утилита для получения названия дня недели по его индексу
 */
export const getDayName = (dayIndex: number): string => {
	return DAYS_FULL_RUS[dayIndex];
};

// Получаем массив дней для отрисовки календаря
export const getCalendarDays = (date: Date): ICalendarDay[] => {
	const year = date.getFullYear();
	const month = date.getMonth();

	const firstDayOfMonth = new Date(year, month, 1);
	const lastDayOfMonth = new Date(year, month + 1, 0);

	const daysInMonth = lastDayOfMonth.getDate();
	const startDayOfWeek = firstDayOfMonth.getDay(); // 0 — вс, 1 — пн, ..., 6 — сб

	// Начинаем с понедельника (1), а не с воскресенья (0)
	const adjustedStartDay = startDayOfWeek === 0 ? 6 : startDayOfWeek - 1;

	const calendarDays: ICalendarDay[] = [];

	// Дни предыдущего месяца
	const prevMonthLastDay = new Date(year, month, 0).getDate();
	for (let i = 0; i < adjustedStartDay; i++) {
		calendarDays.push({
			day: prevMonthLastDay - adjustedStartDay + i + 1,
			isCurrentMonth: false,
			date: new Date(
				year,
				month - 1,
				prevMonthLastDay - adjustedStartDay + i + 1,
			),
		});
	}

	// Дни текущего месяца
	for (let day = 1; day <= daysInMonth; day++) {
		calendarDays.push({
			day,
			isCurrentMonth: true,
			date: new Date(year, month, day),
		});
	}

	// Дни следующего месяца
	const totalDays = calendarDays.length;
	const remainingCells = 42 - totalDays; // 6 недель * 7 дней = 42 ячейки
	for (let i = 1; i <= remainingCells; i++) {
		calendarDays.push({
			day: i,
			isCurrentMonth: false,
			date: new Date(year, month + 1, i),
		});
	}

	return calendarDays;
};

// Основная функция для получения всех данных календаря
export const getCalendarData = (date: Date): ICalendarData => {
	const today = new Date(date); // копия, чтобы не менять оригинал

	// Получаем день недели (0=вс, 1=пн, ... 6=сб)
	const dayOfWeekIndex = today.getDay(); // 0 — воскресенье
	const adjustedDayIndex = dayOfWeekIndex === 0 ? 6 : dayOfWeekIndex - 1; // 0 — пн, 6 — вс
	const dayName = getDayName(adjustedDayIndex);

	const monthNameNominative = MONTHS_NOMINATIVE_RUS[today.getMonth()];
	const monthNameGenitive = MONTHS_GENITIVE_RUS[today.getMonth()];
	const year = today.getFullYear();
	const dayNumber = today.getDate();

	const calendarDays = getCalendarDays(today);

	return {
		dayName,
		monthNameNominative,
		monthNameGenitive,
		year,
		dayNumber,
		calendarDays,
		today,
	};
};
