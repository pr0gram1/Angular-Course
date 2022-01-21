import {Ingredient} from '../shared/ingredient.model';
import { EventEmittter } from '@angular/core';
export class ShoppingListService {

  ingredientChanged = new EventEmittter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];
  getIngredients() {
    return this.ingredients.slice();
  }

  // adding items

  addIngredient(ingredient: Ingredient[]) {
    this.ingredients.push(ingredient);
    this.ingredientChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    // for (let ingredient of ingredients) {
      // this.addIngredient(ingredient);
   // }

    // directly add all ingred in one go and then emit event
    // spread(...) operator - turn array of el to list of el
    // push handles multiple obj but not many arrays.
    this.ingredients.push(...ingredients);
    this.ingredientChanged.emit(this.ingredients.slice());


  }
}
