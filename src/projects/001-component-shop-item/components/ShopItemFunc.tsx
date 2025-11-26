import type { IShopItem } from "../shared/interfaces";
import { ShopItemContent } from "./ShopItemContent";

interface IShopItemFuncProps {
	item: IShopItem;
}

export function ShopItemFunc({ item }: IShopItemFuncProps) {
  return <ShopItemContent item={item} />
}
