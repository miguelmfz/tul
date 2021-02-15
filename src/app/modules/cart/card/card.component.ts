import { Component, OnInit,Input} from '@angular/core';
import { Product } from 'src/app/shared/models/products.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() products: Product[];
  
  constructor() { }

  ngOnInit(): void {
  }

}
