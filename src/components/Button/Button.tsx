import classNames from "classnames";

import styles from "./Button.module.scss";

export type ButtonProps = React.PropsWithChildren<{
	children: React.ReactNode;
}> &
	React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, ...props }: ButtonProps) => {
	return (
		<button {...props} className={classNames(styles.button)}>
			<div>{children}</div>
		</button>
	);
};

export default Button;
