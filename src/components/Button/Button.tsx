import classNames from "classnames";

import styles from "./Button.module.scss";

export type ButtonProps = React.PropsWithChildren<{
	children: React.ReactNode;
	className?: string;
}> &
	React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, className = "", ...props }: ButtonProps) => {
	return (
		<button {...props} className={classNames(styles.button, className)}>
			<div>{children}</div>
		</button>
	);
};

export default Button;
