import { Component } from "@angular/core";
import { Recipe } from "./recipe.model";


@Component({
    selector:'app-recipes',
    templateUrl:'./recipes.component.html',
    styleUrls: ['./recipes.component.css']
})

export class RecipesComponent{
    mySelectedRecipe : Recipe;
    onRecipeSelected(mySelectedRecipe:Recipe){
        this.mySelectedRecipe=mySelectedRecipe;
    }
}