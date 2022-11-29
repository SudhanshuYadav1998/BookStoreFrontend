import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './Components/cart/cart.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ForgotpasswordComponent } from './Components/forgotpassword/forgotpassword.component';
import { GetallbooksComponent } from './Components/getallbooks/getallbooks.component';
import { LoginComponent } from './Components/login/login.component';
import { OrdersComponent } from './Components/orders/orders.component';
import { OrdersucessComponent } from './Components/ordersucess/ordersucess.component';
import { QuickviewComponent } from './Components/quickview/quickview.component';
import { ResetpasswordComponent } from './Components/resetpassword/resetpassword.component';
import { SignupComponent } from './Components/signup/signup.component';
import { WishlistComponent } from './Components/wishlist/wishlist.component';

const routes: Routes = [
  { path:'', redirectTo:"/signup", pathMatch:'full' },
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: 'forgot-password', component: ForgotpasswordComponent},
  {path:'reset-password/:token',component:ResetpasswordComponent},

  {path: 'home', component: DashboardComponent,
  children:[{path: 'books', component: GetallbooksComponent},
  {path: 'orders', component: OrdersComponent},
  {path: 'cart', component: CartComponent},
  {path: 'wishlist', component: WishlistComponent},
  {path: 'quickview/:bookId', component: QuickviewComponent},
  {path: 'order-success', component: OrdersucessComponent}
]}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
