import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { HttpClient } from '@angular/common/http'
import { from } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private http: HttpClient) { }
  
  title = "Ürünler";
  ///upperData: any[]
  products: Product[];
  filterText = "Bi";

  ngOnInit() {

    this.http.get<Product[]>("https://api.coinlore.net/api/tickers/")
      //.map(response => response.json().items)
      .subscribe(data => {
        this.products = data,
          console.log(this.products)
      }


      )
  }

}
