import { Component, OnInit } from '@angular/core';
import { Http, Jsonp } from '@angular/http';

@Component({
  moduleId: module.id,
  selector: 'app-products',
  templateUrl: 'products.component.html',
  styleUrls: ['products.component.css']
})
export class ProductsComponent implements OnInit {
  constructor(
      private http: Http,
      private jsonp: Jsonp) {
  }

  ngOnInit() {
      this.jsonp.request('http://api.bestbuy.com/beta/products/trendingViewed(categoryId=abcat0400000)?format=json&apiKey=8qrxwa9tdqkrm8usncp4bbt6')
          .map((response) => {
              console.log(response);
              return response;
          })
          .subscribe((response) => {
              console.log(response);
          });
          // .map(res => { return res.json() }).toPromise().then((res) => { console.log(res); });
  }

}
