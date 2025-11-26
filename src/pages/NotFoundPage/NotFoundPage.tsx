import { Link, useLocation, useNavigate } from "react-router";
import style from "./NotFoundPage.module.scss";

export function NotFoundPage() {
	const navigate = useNavigate();
	const location = useLocation();
	const currentPath = location.pathname.slice(1);

	return (
		<div className={style.container}>
			<div className={style.content}>
				<img
					src="/assets/router-demo/error404.jpeg"
					alt="Ошибка 404"
					className={style["error-image"]}
				/>

				<p className={style.description}>
					Страница <strong>«{currentPath}»</strong> не найдена
				</p>

				<div className={style["link-container"]}>
					<Link to="/" className={style.link}>
						На главную
					</Link>
					<Link to="/" className={style.link} onClick={() => navigate(-1)}>
						Вернуться назад
					</Link>
				</div>
			</div>
		</div>
	);
}
