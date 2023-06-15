import classNames from "classnames";
import styles from "./ErrorTip.module.scss";

export type ErrorTipProps = React.PropsWithChildren<{
	children: React.ReactNode;
}>;

export function ErrorTip({ children }: ErrorTipProps) {
	return <p className={classNames(styles.errorTip)}>{children}</p>;
}

export default ErrorTip;
