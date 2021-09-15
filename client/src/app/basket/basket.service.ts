import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Basket, IBasket } from '../shared/models/basket';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  baseUrl = environment.apiUrl;
  private basketSource = new BehaviorSubject<IBasket>(new Basket());
  basket$ = this.basketSource.asObservable();

  constructor(
    private http: HttpClient,
  ) { }

  getBasket(id: string) {
    return this.http.get(this.baseUrl + 'basket?id=' + id)
    .pipe(
      map((basket) => { this.basketSource.next(basket as IBasket); })
    );
  }

  setBasket(basket: IBasket) {
    return this.http.post(this.baseUrl + 'basket', basket). subscribe(
      response => {
        this.basketSource.next(response as IBasket);
      },
      error => {
        console.log(error);
      });
  }

  getCurrentBasketValue() {
    return this.basketSource.value;
  }
}
