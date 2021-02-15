import { Component, Input, OnInit } from '@angular/core';
import { Cart } from '../../models/cart.model';

@Component({
  selector: 'app-card-cart',
  templateUrl: './card-cart.component.html',
  styles: [
  ]
})
export class CardCartComponent implements OnInit {
  @Input()  products : Cart[] = []
  constructor() { }

  ngOnInit(): void {
  }

}
