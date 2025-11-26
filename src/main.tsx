import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router/dom";
import "./index.scss";
import { router } from "./router/routes.ts";

const root = document.getElementById("root");

createRoot(root ? root : document.body).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
