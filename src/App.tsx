import { Outlet } from "react-router";
import "./App.scss";

/**
 * Основной компонент приложения, точка входа
 */
export default function App() {
	return (
		<div className="App">
			<main className="main">
				<Outlet />
			</main>

			<footer className="footer">
				<div className="container">
					<div className="footer__copyright">
						<a
							href="https://github.com/stormozov/neto-react"
							target="_blank"
							rel="noopener"
							className="footer__link"
						>
							© 2025 stormozov
						</a>
					</div>
				</div>
			</footer>
		</div>
	);
}
