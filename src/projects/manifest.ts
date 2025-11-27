import React from "react";
import type { IProjectList } from "@/common/shared/interfaces";

export const PROJECT_LIST: IProjectList[] = [
	{
		id: "component-shop-item",
		order: 1,
		content: {
			title: "Component Shop Item",
			descriptionShort:
				"Функциональный и классовый React-компонент для отображения товаров из каталога на сайте.",
			descriptionLong:
				"Обе задачи реализуют один и тот же компонент, но разными способами",
			tags: ["React", "Typescript"],
		},
		Component: React.lazy(
			() => import("./001-component-shop-item/Pages/ShopItemDemoPage"),
		),
	},
	{
		id: "calendar",
		order: 2,
		content: {
			title: "Calendar",
			descriptionShort:
				"Создать React-компонент Calendar, который бы показывал текущую дату и текущий месяц.",
			tags: ["React", "Typescript"],
		},
		Component: React.lazy(
			() => import("./002-calendar/Pages/CalendarDemoPage"),
		),
	},
	{
		id: "state-portfolio-filter",
		order: 3,
		content: {
			title: "Портфолио с фильтрами",
			descriptionShort:
				"Веб-приложение для отображения портфолио проектов с возможностью их фильтрации по категориям",
			descriptionLong:
				"Необходимо создать веб-приложение для отображения портфолио проектов с возможностью их фильтрации по категориям. Основная цель — отработать навыки управления состоянием и взаимодействия компонентов в React. Приложение должно быть реализовано как набор компонентов с чётким разделением ответственности между ними.",
			tags: ["React", "Typescript"],
		},
		Component: React.lazy(
			() => import("./003-state-portfolio/Pages/StatePortfolioDemoPage"),
		),
	},
	{
		id: "state-goods-view",
		order: 3,
		content: {
			title: "Расположение товаров",
			descriptionShort:
				"Компонент для отображения списка товаров в магазине с возможностью выбора формата отображения",
			descriptionLong:
				"Необходимо разработать компонент для отображения списка товаров в магазине с возможностью выбора формата отображения из двух вариантов: в виде сетки из карточек или в виде вертикального списка. Основная цель этого задания — попрактиковаться в управлении состоянием и научиться реализовывать условный рендеринг компонентов в зависимости от выбора пользователя.",
			tags: ["React", "Typescript"],
		},
		Component: React.lazy(
			() => import("./004-state-goods-view/Pages/GoodsDemoPage"),
		),
	},
];
