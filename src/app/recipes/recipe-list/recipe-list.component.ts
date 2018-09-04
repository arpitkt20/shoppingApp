import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('McSpicy Paneer Burger','Burger','https://5.imimg.com/data5/OR/KH/MY-33353830/mcspicy-paneer-burger-500x500.png'),
    new Recipe('Cheese Pasta','Pasta','https://d33oocx83zywzt.cloudfront.net/img650_new/10371012.jpg')
  ];
  @Output() selectedRecipe = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(selectedRecipe:Recipe){
    this.selectedRecipe.emit(selectedRecipe);
  }
}
