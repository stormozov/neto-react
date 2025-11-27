import { Calendar } from "../components";
import styles from "./CalendarDemoPage.module.scss";

/**
 * Компонент страницы демонстрации компонента Calendar
 */
export default function CalendarDemoPage() {
	return (
		<div className={styles["shop-item-demo-page"]}>
			<div className={styles["shop-item-demo-page__section"]}>
				<div className={styles["shop-item-demo-page__task-info"]}>
					<p>
						Компонент должен содержать один обязательный атрибут date, в который
						будет передана текущая дата в формате объекта Date. Дата, указанная
						в атрибуте date, должна быть визуально выделена с помощью класса
						ui-datepicker-today.
					</p>
					<p>
						Если первый день месяца не является понедельником, то в начале
						календарной недели необходимо отобразить даты предыдущего месяца,
						пометив их классом ui-datepicker-other-month. Аналогично, если
						последний день месяца не является воскресеньем, то в конце
						календарной недели следует добавить даты следующего месяца и также
						пометить их классом ui-datepicker-other-month.
					</p>
					<p>
						Названия дней недели на русском языке должны быть размещены в тегах
						div с классом ui-datepicker-material-day. Даты должны быть
						представлены в тегах div с классом ui-datepicker-material-day-num.
						Название месяца в родительном падеже следует указывать в тегах div с
						классом ui-datepicker-material-month, а год — в тегах div с классом
						ui-datepicker-material-year.
					</p>
					<p>
						Название текущего месяца в именительном падеже должно быть размещено
						в теге span с классом ui-datepicker-month, а год — в теге span с
						классом ui-datepicker-year.
					</p>
				</div>
				<Calendar date={new Date()} />
			</div>
		</div>
	);
}
