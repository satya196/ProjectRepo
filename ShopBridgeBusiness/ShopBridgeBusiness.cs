using ShopBridgeConnectionHandler;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ShopBridgeBusiness
{
     public class ShopBridgeBusiness
    {
        SqlConnection Sql;
        public ShopBridgeBusiness()
        {
            Sql = ShopBridgeConnectionHandler.Connection.Singleton.SqlConnetionFactory;
        }
        
        public void AddItem(ItemDetail item)
        {
            
            SqlCommand cmd = new SqlCommand("INSERT INTO Item(Name,Description,Price) VALUES(@param1,@param2,@param3)",Sql);
            cmd.Parameters.AddWithValue("@param1", item.Name);
            cmd.Parameters.AddWithValue("@param2", item.Description);
            cmd.Parameters.AddWithValue("@param3", item.Price);
            try
            {
                Sql.Open();
                cmd.ExecuteNonQuery();
            }
            catch (Exception ex)
            {
             
            }
            finally
            {
                Sql.Close();
            }
        }

        public IEnumerable<ItemDetail>GetItem()
        {
            List<ItemDetail> result = new List<ItemDetail>();
            try
            {
                Sql.Open();
                SqlCommand cmd = new SqlCommand("select * from Item", Sql);
                using (SqlDataReader reader = cmd.ExecuteReader())
                {
                    while (reader.Read())
                    {

                        result.Add(new ItemDetail()
                        {
                            
                            Code= reader.GetInt32(reader.GetOrdinal("Code")),
                            Name = reader.GetString(reader.GetOrdinal("Name")),
                            Description = reader.GetString(reader.GetOrdinal("Description")),
                            Price=reader.GetInt32(reader.GetOrdinal("Price"))
                        });
                    }
                }
            }
            catch (Exception ex)
            {

                throw;
            }
            finally
            {
                Sql.Close();
            }
            return result;
        }

        public void DeleteItem(int Code)
        {
            SqlCommand cmd = new SqlCommand("Delete from Item where Code=@param1", Sql);
            cmd.Parameters.AddWithValue("@param1", Code);
           
            try
            {
                Sql.Open();
                cmd.ExecuteNonQuery();
            }
            catch (Exception ex)
            {

            }
            finally
            {
                Sql.Close();
            }

        }
    }
}
