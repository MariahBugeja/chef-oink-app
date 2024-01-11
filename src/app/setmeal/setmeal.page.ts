import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-setmeal',
  templateUrl: './setmeal.page.html',
  styleUrls: ['./setmeal.page.scss'],
})
export class SetmealPage   {

  constructor(private router: Router) { }

  goBack() {
    this.router.navigate(['/tabs/tab1']);
  }

}
