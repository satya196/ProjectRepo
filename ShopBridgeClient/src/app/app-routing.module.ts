import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopBridgeHomeComponent } from 'src/app/Components/shop-bridge-home/shop-bridge-home.component';
import { ShopBridgeItemDetailComponent } from './Components/shop-bridge-item-detail/shop-bridge-item-detail.component';

const routes: Routes = [
  {path:"",component:ShopBridgeHomeComponent},
  {path:"\detail",component:ShopBridgeItemDetailComponent},
  {path:"\GetItem",component:ShopBridgeHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
