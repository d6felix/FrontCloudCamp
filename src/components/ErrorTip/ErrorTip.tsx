import styles from "./ErrorTip.module.scss";

export type ErrorTipProps = React.PropsWithChildren<{
	children: React.ReactNode;
}>;

export function ErrorTip({ children }: ErrorTipProps) {
	return <p>{children}</p>;
}

export default ErrorTip;
