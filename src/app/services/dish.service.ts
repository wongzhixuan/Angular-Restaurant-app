import { Injectable } from '@angular/core';
import {Dish} from '../shared/dish';
import {DISHES} from '../shared/dishes';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  getDishes(): any {
    const observable = new Observable(observer =>{
      setTimeout( () => {
        observer.next(DISHES)
      }, 1000);
    });
    return observable;  
  }

  getDish(id: string): Dish {
    return DISHES.filter((dish) => (dish.id === id))[0];
  }

  getFeaturedDish(): Dish {
    return DISHES.filter((dish) => (dish.featured))[0];
  }
}
