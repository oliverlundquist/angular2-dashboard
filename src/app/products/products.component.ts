import { Component, OnInit } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Component({
  moduleId: module.id,
  selector: 'app-products',
  templateUrl: 'products.component.html',
  styleUrls: ['products.component.css']
})
export class ProductsComponent implements OnInit {
  public products: Array<any> = [];

  constructor(
      private http: Http) {
  }

  ngOnInit() {
    let url = 'http://mystore-api.eu-west-1.elasticbeanstalk.com/shops/xtralars/products';
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEzMzcsImlhdCI6MTQ2OTYxNzEzNDA1OCwiZXhwIjoxNDY5ODc2MzM0MDU4LCJuYmYiOjE0Njk2MTcxMzQwNTgsImlzcyI6Imh0dHBzOi8vbG9naW4ubXlzdG9yZS5ubyIsImp0aSI6Ijk0ZTZiZjFkMmIyM2M0OWFjMzI5MjFhMmRlYTM4ODk0Iiwibm9fbXlzdG9yZV9ob3N0cyI6WyJ4dHJhbGFycyJdLCJub19teXN0b3JlX3Njb3BlcyI6WyJyZWFkOm9yZyJdfQ.sN6MXo_cLEHGKhYZBRMBTscsBbRAPooLELQWpwi4JbQ');

    this.http.get(url, { headers: headers, body: "" })
              .map(this.extractData)
              .map(this.flattenJsonApiAttributes)
              .catch(this.handleError)
              .subscribe(response => this.products = response);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || [];
  }

  private flattenJsonApiAttributes(data: Array<any>) {
    return data.map(_data => {
      return {
        id: parseInt(_data.id, 10),
        type: _data.type,
        price: _data.attributes.price
      }
    });
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

}
