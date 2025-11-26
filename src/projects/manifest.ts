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
];
