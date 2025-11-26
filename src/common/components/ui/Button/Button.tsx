import classNames from "classnames";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import "./Button.scss";

export type ButtonVariants = "primary" | "secondary" | "ghost" | "danger";

export type ButtonSizes = "small" | "medium" | "large";

export type ButtonContentPositions = "start" | "center" | "end";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: ButtonVariants;
	size?: ButtonSizes;
  position?: ButtonContentPositions;
	iconOnly?: boolean;
	children?: ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
	variant = "primary",
	size = "medium",
  position = "center",
	iconOnly = false,
	className,
	children,
	...rest
}) => {
	const buttonClass = classNames(
		"btn",
		`btn--${variant}`,
		`btn--${size}`,
    `btn--position-${position}`,
		{
			"btn--icon-only": iconOnly,
		},
		className,
	);

	return (
		<button className={buttonClass} {...rest}>
			{children}
		</button>
	);
};
