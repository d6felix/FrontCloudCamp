import styles from "./ErrorTip.module.scss";

export type ErrorTipProps = React.PropsWithChildren<{
	children: React.ReactNode;
	className?: string;
}>;

export function ErrorTip({ children, className }: ErrorTipProps) {
	return <p className={(styles.errorTip, className)}>{children}</p>;
}

export default ErrorTip;
