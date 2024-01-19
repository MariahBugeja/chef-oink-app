import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./sign-in/sign-in.module').then( m => m.SignInPageModule)
  },
  {
    path: 'sign-in2',
    loadChildren: () => import('./sign-in2/sign-in2.module').then( m => m.SignIn2PageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'index',
    loadChildren: () => import('./index/index.module').then( m => m.IndexPageModule)
  },
  {
    path: 'cookie',
    loadChildren: () => import('./cookie/cookie.module').then( m => m.CookiePageModule)
  },
  {
    path: 'addtocart',
    loadChildren: () => import('./addtocart/addtocart.module').then( m => m.AddtocartPageModule)
  },
  {
    path: 'sausageroll',
    loadChildren: () => import('./sausageroll/sausageroll.module').then( m => m.SausagerollPageModule)
  },
  {
    path: 'veggie',
    loadChildren: () => import('./veggie/veggie.module').then( m => m.VeggiePageModule)
  },
  {
    path: 'spinach',
    loadChildren: () => import('./spinach/spinach.module').then( m => m.SpinachPageModule)
  },
  {
    path: 'meatpie',
    loadChildren: () => import('./meatpie/meatpie.module').then( m => m.MeatpiePageModule)
  },
  {
    path: 'setmeal',
    loadChildren: () => import('./setmeal/setmeal.module').then( m => m.SetmealPageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./payment/payment.module').then( m => m.PaymentPageModule)
  },
  {
    path: 'paymentsuccesful',
    loadChildren: () => import('./paymentsuccesful/paymentsuccesful.module').then( m => m.PaymentsuccesfulPageModule)
  },
  {
    path: 'hisoty',
    loadChildren: () => import('./hisoty/hisoty.module').then( m => m.HisotyPageModule)
  },
  {
    path: 'shared-data-service',
    loadChildren: () => import('./shared-data-service/shared-data-service.module').then( m => m.SharedDataServicePageModule)
  },
  {
    path: 'userservices',
    loadChildren: () => import('./userservices/userservices.module').then( m => m.UserservicesPageModule)
  },
  {
    path: 'vegan',
    loadChildren: () => import('./vegan/vegan.module').then( m => m.VeganPageModule)
  },
  {
    path: 'dessert',
    loadChildren: () => import('./dessert/dessert.module').then( m => m.DessertPageModule)
  },
  {
    path: 'picky',
    loadChildren: () => import('./picky/picky.module').then( m => m.PickyPageModule)
  },
  {
    path: 'savoury',
    loadChildren: () => import('./savoury/savoury.module').then( m => m.SavouryPageModule)
  },
  {
    path: 'brownie',
    loadChildren: () => import('./brownie/brownie.module').then( m => m.BrowniePageModule)
  },
  {
    path: 'muffinb',
    loadChildren: () => import('./muffinb/muffinb.module').then( m => m.MuffinbPageModule)
  },
  {
    path: 'choc',
    loadChildren: () => import('./choc/choc.module').then( m => m.ChocPageModule)
  },
  {
    path: 'oat',
    loadChildren: () => import('./oat/oat.module').then( m => m.OatPageModule)
  },
  {
    path: 'beet',
    loadChildren: () => import('./beet/beet.module').then( m => m.BeetPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
