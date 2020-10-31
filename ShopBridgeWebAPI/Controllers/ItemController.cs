using ShopBridgeBusiness;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ShopBridgeWebAPI.Controllers
{
    public class ItemController : ApiController
    {
        ShopBridgeBusiness.ShopBridgeBusiness business = new ShopBridgeBusiness.ShopBridgeBusiness();
        [HttpPost]
        public void AddItem(ItemDetail item)
        {
            business.AddItem(item);
        }
    }
}
