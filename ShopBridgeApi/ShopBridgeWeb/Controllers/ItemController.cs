using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using ShopBridgeBusiness;
using System.Web.Http.Cors;
namespace ShopBridgeWeb.Controllers
{
   
    //[EnableCors(origins: "http://localhost:4200", headers: "*", methods: "GET,POST,DELETE")]  
    
    public class ItemController :ApiController
    {
        ShopBridgeBusiness.ShopBridgeBusiness business = new ShopBridgeBusiness.ShopBridgeBusiness();
        [HttpPost]
        public IHttpActionResult AddItem(ItemDetail item)
        {
            business.AddItem(item);
            return Ok();
        }
        [HttpGet]
        public IHttpActionResult GetItem()
        {
            var result=business.GetItem();
            return Ok(result);
        }
        [HttpGet]
        public IHttpActionResult DeleteItem(int Code)
        {
            business.DeleteItem(Code);
            return Ok();
        }
    }
}
