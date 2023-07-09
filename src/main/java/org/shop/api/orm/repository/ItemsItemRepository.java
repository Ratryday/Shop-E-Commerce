package org.shop.api.orm.repository;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import org.shop.api.orm.entity.ItemsItem;

@Repository
public interface ItemsItemRepository extends PagingAndSortingRepository<ItemsItem, Integer> {

}