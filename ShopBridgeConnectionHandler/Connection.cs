using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ShopBridgeConnectionHandler
{
    public class Connection
    {
        private static string connectionString = ConfigurationManager.AppSettings["DbString"];
        private static Connection singleton;
        private static SqlConnection sqlConnection;

        public SqlConnection SqlConnetionFactory
        {
            get { return sqlConnection; }
        }

        private Connection() { }

        public static Connection Singleton
        {
            get
            {
                if (singleton == null)
                    singleton = new Connection();

                sqlConnection = new SqlConnection(connectionString);
                return singleton;
            }
        }
    }
}
