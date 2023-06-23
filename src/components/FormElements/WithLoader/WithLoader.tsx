import { Loader, LoaderSize } from "@components/FormElements/Loader";

export type WithLoaderProps = React.PropsWithChildren<{
	loading: boolean;
	size?: LoaderSize;
	className?: string;
}>;

export const WithLoader = ({
	children,
	loading = true,
	size = LoaderSize.m,
	className,
}: WithLoaderProps) => {
	return (
		<>
			{!loading && children}
			{loading && (
				<Loader loading={loading} size={size} className={className} />
			)}
		</>
	);
};

export default WithLoader;
