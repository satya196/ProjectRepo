import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Config, ItemDetail } from './item-detail';
import{HttpClient, HttpParams} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ShopBridgeService {

constructor(private http:HttpClient) { }

private  config:Config;
  
  APIURL:string="http://localhost:51010/api/Item/";
private message: BehaviorSubject<ItemDetail> = new BehaviorSubject<ItemDetail>(new ItemDetail());
sharedmessage$=this.message.asObservable();
GetConfig(){
//  this.http.get<Config>("assets/Config.json").subscribe(data=>{
//  this.APIURL=data.ApiUrl; 
//   });
}
saveItem(item:ItemDetail):Observable<any>
{
return this.http.post(this.APIURL+"AddItem",item)
}
GetItem():Observable<ItemDetail[]>
{
  return this.http.get<ItemDetail[]>(this.APIURL+"GetItem");
}
DeleteItem(item:ItemDetail):Observable<any>
{
const params = new HttpParams().set('Code', item.Code.toString());
return this.http.get<any>(this.APIURL+"DeleteItem?Code="+ item.Code)
}
forwardItemDetails(item:ItemDetail)
{
  this.message.next(item);
}
}
