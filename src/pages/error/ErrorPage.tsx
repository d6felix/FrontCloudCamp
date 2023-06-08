/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useRouteError } from "react-router-dom";

export function ErrorPage() {
	const error: any = useRouteError();
	// eslint-disable-next-line no-console
	console.error(error);

	return (
		<div id="error-page">
			<h1>Oops!</h1>
			<p>Sorry, an unexpected error has occurred.</p>
			<p>
				<i>{error?.statusText || error?.message}</i>
			</p>
		</div>
	);
}

export default ErrorPage;
