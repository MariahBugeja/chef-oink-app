import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 


@Component({
  selector: 'app-dessert',
  templateUrl: './dessert.page.html',
  styleUrls: ['./dessert.page.scss'],
})
export class DessertPage  {

  constructor(private router: Router) { }

  goBack() {
    this.router.navigate(['/tabs/tab1']);
  }

}
