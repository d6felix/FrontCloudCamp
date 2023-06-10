import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.scss";
import { ErrorPage } from "@pages/error";
import { FormPage } from "@pages/form";
import { LoginPage } from "@pages/login";

const rootElement = document.getElementById("root");

const router = createBrowserRouter([
	{
		path: "/",
		element: <LoginPage />,
		errorElement: <ErrorPage />,
	},
	{
		path: "create",
		element: <FormPage />,
	},
]);

if (!rootElement) throw new Error("Failed to find the root element");

createRoot(rootElement).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
