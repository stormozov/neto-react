import React from "react";
import type { IShopItem } from "../shared/interfaces";
import { ShopItemContent } from "./ShopItemContent";

interface IShopItemClassProps {
	item: IShopItem;
}

export class ShopItemClass extends React.Component<IShopItemClassProps> {
	render() {
		const { item } = this.props;
		return <ShopItemContent item={item} />
	}
}
