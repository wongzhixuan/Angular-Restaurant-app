import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';

import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Observable, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.css']
})
export class DishdetailComponent implements OnInit, OnDestroy {

  dish!: Dish;
  private mySub!: Subscription;
  constructor(private dishservice: DishService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    // promise : call as soon as u define
    const promise = new Promise(resolve => {
      setTimeout(() => {
        // call immediately
        //console.log('Promise call'); 
        resolve('Promise working');
        // emit once
        // resolve('Promise working2');
        // resolve('Promise working3');
        // resolve('Promise working4');
      }, 1000);
    });
    // listen
    promise.then((result => console.log(result)));

    // observable: not call until subscribe
    const observable = new Observable(sub => {
      setTimeout(() => {
        // call once being subscribe
        //console.log('Observable call');
        
        // sub.next('Observable working')
        
        // emit multiple 
        // sub.next('Observable working2')
        // sub.next('Observable working3')
        // sub.next('Observable working4')

        let counter = 0;
        setInterval( () => {
          counter += 1;
          sub.next(counter);
        },1000);
      }, 1000);
    });
    /*
    observable.pipe(
      // only display observable working
      filter(d => d === 'Observable working2')
    )
    */
    // listen
    this.mySub = observable.subscribe(result => console.log(result));

    let id = this.route.snapshot.params['id'];
    this.dish = this.dishservice.getDish(id);
    console.log(id);
  }

  
  ngOnDestroy(): void {
      this.mySub.unsubscribe();
  }
  goBack(): void {
    this.location.back();
  }

}