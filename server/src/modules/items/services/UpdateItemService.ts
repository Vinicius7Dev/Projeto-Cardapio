/**
 * Update Item Service
 */

import 'reflect-metadata';
import { inject, injectable } from 'tsyringe';

import Item from '../typeorm/entities/Item';

import { IUpdateItemDTO } from '../dtos/IUpdateItemDTO';

import IItemsRepository from '../repositories/IItemsRepository';
import ICategoriesRepository from '../repositories/ICategoriesRepository';
import IRestaurantsRepository from '../../restaurants/repositories/IRestaurantsRepository';

import AppError from '../../../shared/errors/AppError';

@injectable()
class UpdateItemService {
    constructor(
        @inject('ItemsRepository')
        private itemsRepository: IItemsRepository,

        @inject('CategoriesRepository')
        private categoriesRepository: ICategoriesRepository,

        @inject('RestaurantsRepository')
        private restaurantsRepository: IRestaurantsRepository,
    ) {}

    // Executing the service
    public async execute({
        restaurant_id,
        item_id,
        image,
        title,
        description,
        price,
        discount_price,
        category_name,
        enabled,
    }: IUpdateItemDTO): Promise<Item> {
        // Check if restaurant exists
        const restaurant = await this.restaurantsRepository.findById(
            restaurant_id,
        );

        // If not exists, cancel the operation
        if (!restaurant) {
            throw new AppError('O restaurante não existe.');
        }

        // Check if this item exists
        const itemToUpdate = await this.itemsRepository.findById(item_id);

        // If not exists, cancel the operation
        if (!itemToUpdate) {
            throw new AppError('O item não está cadastrado.');
        }

        // If the authenticated restaurant is not the owner of the item, cancel the operation
        if (restaurant_id !== itemToUpdate.restaurant_id) {
            throw new AppError(
                'O restaurante não tem permissão para alterar este item.',
            );
        }

        // Search for a category already registered in database
        const findSameCategoryInDataBase = await this.categoriesRepository.findByName(
            category_name,
        );

        // Define the category id
        let category_id = 0;

        // If not exists this category in database, register
        if (!findSameCategoryInDataBase) {
            const createdCategory = await this.categoriesRepository.create(
                category_name,
            );

            // Saving the category id
            category_id = createdCategory.id;
        } else {
            // Saving the category id
            category_id = findSameCategoryInDataBase.id;
        }

        // Updating item data
        const updatedItem = await this.itemsRepository.update({
            ...itemToUpdate,
            restaurant_id,
            image,
            title,
            description,
            price,
            discount_price,
            enabled,
            category_id,
        });

        // Returning item updated
        return updatedItem;
    }
}

export default UpdateItemService;
