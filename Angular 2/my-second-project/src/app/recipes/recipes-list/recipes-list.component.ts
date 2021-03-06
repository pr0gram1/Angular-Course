import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This a simply a test','' +
      'https://upload.wikimedia.org/wikipedia/commons/1/!5/Recipe_logo.png' )
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
