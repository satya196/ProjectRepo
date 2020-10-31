import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ItemDetail } from 'src/app/services-and-Models/item-detail';
import { ShopBridgeService } from 'src/app/services-and-Models/shopBridge.service';

@Component({
  selector: 'app-shop-bridge-home',
  templateUrl:'./shop-bridge-home.component.html',
  styleUrls: ['./shop-bridge-home.component.css']
})
export class ShopBridgeHomeComponent implements OnInit {

  constructor(private service:ShopBridgeService,private router:Router) { }
  ItemList :ItemDetail[]=[];
  ngOnInit(): void {
    this.service.GetConfig();
    this.service.GetItem().subscribe(data=>{
     
    this.ItemList=data;
    });
  }
  updateItemList(item:any)
  {
      this.service.GetItem().subscribe(data=>{
      this.ItemList=data;
      });

  }
  deleteItem(item:any)
  {
    this.service.DeleteItem(item).subscribe(x=>{

    });
    this.updateItemList(item);
  }
  showDetail(item:ItemDetail)
  {
    localStorage.removeItem("code");
    localStorage.setItem("code",JSON.stringify(item));
    this.service.forwardItemDetails(item);
    this.router.navigateByUrl("\detail")
    
  }

}
