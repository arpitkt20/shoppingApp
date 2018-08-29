import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('McSpicy Paneer Burger','Burger','https://5.imimg.com/data5/OR/KH/MY-33353830/mcspicy-paneer-burger-500x500.png')
  ];
  constructor() { }

  ngOnInit() {
  }

}
