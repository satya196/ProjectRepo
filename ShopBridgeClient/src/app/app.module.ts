import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopBridgeHomeComponent } from 'src/app/Components/shop-bridge-home/shop-bridge-home.component';
import { ShopBridgeRegisterItemComponent } from 'src/app/Components/shop-bridge-register-item/shop-bridge-register-item.component';
import { FormsModule } from '@angular/forms';
import { ShopBridgeItemDetailComponent } from './Components/shop-bridge-item-detail/shop-bridge-item-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopBridgeHomeComponent,
    ShopBridgeRegisterItemComponent,
    ShopBridgeItemDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
