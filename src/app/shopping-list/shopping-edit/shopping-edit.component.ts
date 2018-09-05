import { Component, OnInit, ElementRef, ViewChild,EventEmitter,Output} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('itemName') nameInputRef:ElementRef;
  @ViewChild('itemAmt') amtInputRef:ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  constructor() { }Ingredient

  ngOnInit() {
  }
  onAddItem(){
    const ingdName = this.nameInputRef.nativeElement.value;
    const ingdAmt = this.amtInputRef.nativeElement.value;
     
    const newingredient = new Ingredient(ingdName,ingdAmt);
    this.ingredientAdded.emit(newingredient);
  } 
}
