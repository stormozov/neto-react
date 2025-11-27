import { Button } from "@common/components";
import classNames from "classnames";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaThList } from "react-icons/fa";
import styles from "./IconSwitch.module.scss";

/**
 * Интерфейс, описывающий свойства компонента IconSwitch
 */
interface IconSwitchProps {
	icon: string;
	position: string;
	onSwitch: () => void;
}

/**
 * Компонент, который отображает кнопку переключения между видами отображения
 */
export default function IconSwitch({
	icon,
	position,
	onSwitch,
}: IconSwitchProps) {
	const btnClass = classNames(
		"btn",
		styles["switch-view"],
		styles[`switch-view--${position}`],
	);

	return (
		<Button
			className={btnClass}
			variant="text"
			size="large"
			iconOnly
			title="Switch view"
			aria-label="Switch view"
			onClick={onSwitch}
		>
			{icon === "list" ? <FaThList /> : <BsFillGrid3X3GapFill />}
		</Button>
	);
}
