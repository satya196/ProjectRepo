import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ItemDetail } from 'src/app/services-and-Models/item-detail';
import { ShopBridgeService } from 'src/app/services-and-Models/shopBridge.service';

@Component({
  selector: 'app-shop-bridge-item-detail',
  templateUrl: './shop-bridge-item-detail.component.html',
  styleUrls: ['./shop-bridge-item-detail.component.css']
})
export class ShopBridgeItemDetailComponent implements OnInit {

  constructor( private service:ShopBridgeService) { }
  detailSubscription:Subscription
  detail:ItemDetail=new ItemDetail();
  ngOnInit(): void {
  this.service.GetConfig();
  this.detailSubscription=this.service.sharedmessage$.subscribe(x=>{
  this.detail=x ;
  });
  let store=JSON.parse(localStorage.getItem("code"));
  if(store)
  {
    this.detail=store;
  }
  }

  ngOnDestroy()
  {
    if(this.detailSubscription)
    this.detailSubscription.unsubscribe();
  
  }

}
