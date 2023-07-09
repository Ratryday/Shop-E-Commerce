package org.shop.api.common;

import org.shop.api.orm.entity.ItemsItem;
import org.shop.api.dto.ItemDTO;

public class Utils {

    public static ItemDTO convertItemsItemToItemDTO(ItemsItem itemsItem) {
        ItemDTO itemDTO = new ItemDTO();
        itemDTO.setName(itemsItem.getName());
        itemDTO.setImageUrl(itemsItem.getImageUrl());
        itemDTO.setDescription(itemsItem.getDescription());
        itemDTO.setPrice(itemsItem.getPrice() + " " + itemsItem.getCurrencyEnum().getCurrency());
        return itemDTO;
    }

}
