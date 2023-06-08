import { App } from "./App";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.scss";
import { ErrorPage } from "@pages/error";
import { CustomForm } from "@pages/form";
import { Login } from "@pages/login";

const rootElement = document.getElementById("root");

const router = createBrowserRouter([
	{
		path: "/",
		element: <Login />,
		errorElement: <ErrorPage />,
	},
	{
		path: "create",
		element: <CustomForm />,
	},
]);

if (!rootElement) throw new Error("Failed to find the root element");

createRoot(rootElement).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
