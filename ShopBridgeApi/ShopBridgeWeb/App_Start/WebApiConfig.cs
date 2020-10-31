﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Cors;
using System.Web.Http;
using System.Web.Http.Cors;
namespace ShopBridgeWeb
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services

            //EnableCorsAttribute cors = new EnableCorsAttribute("http://localhost:4200", "*", "GET,POST,DELETE");
            //config.EnableCors(cors);
            
            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{action}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
        }
    }
}
