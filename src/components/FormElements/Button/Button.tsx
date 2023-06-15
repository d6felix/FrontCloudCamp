import classNames from "classnames";

import styles from "./Button.module.scss";

export type ButtonProps = React.PropsWithChildren<{
	children: React.ReactNode;
	className?: string;
	style?: "solid" | "border";
}> &
	React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
	children,
	className = "",
	style = "solid",
	...props
}: ButtonProps) => {
	return (
		<button
			{...props}
			className={classNames(
				styles.button,
				className,
				styles.button.concat("_", style)
			)}
		>
			<div>{children}</div>
		</button>
	);
};

export default Button;