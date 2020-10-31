import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {NgForm} from '@angular/forms';
import { ItemDetail } from 'src/app/services-and-Models/item-detail';
import { ShopBridgeService } from 'src/app/services-and-Models/shopBridge.service';
@Component({
  selector: 'app-shop-bridge-register-item',
  templateUrl: './shop-bridge-register-item.component.html',
  styleUrls: ['./shop-bridge-register-item.component.css']
})
export class ShopBridgeRegisterItemComponent implements OnInit {

  constructor(private itemservice:ShopBridgeService) { }

  itemName:string;
  itemDesc:string;
  itemPrice:number;
  @Output() myEvent = new EventEmitter<string>();
  ngOnInit(): void {
  }
  onSubmit(event:any)
  {
   let item: ItemDetail=new ItemDetail();
   item.Name=this.itemName;
   item.Description=this.itemDesc;
   item.Price=this.itemPrice;
   this.itemservice.saveItem(item).subscribe(data=>{
   this.myEvent.emit('emitter');
   },(err=>{
     
   }));
   this.itemDesc="";
   this.itemName="";
   this.itemPrice=null;
  }
}
