import { DataTypes, Model } from "sequelize";
import db from "../db/db.js";

class Product extends Model{}


Product.init(
    {
        name:{
            type:DataTypes.STRING(50),
            allowNull:false
        },
        description:{
            type:DataTypes.TEXT,
            allowNull:false
        },
        price:{
            type:DataTypes.DECIMAL(10,2),
            allowNull:false
        },
        stock:{
            type:DataTypes.INTEGER,
            allowNull:false
        }
    },
    {
        sequelize:db,
        modelName:"Product"
    }
)
// await Product.sync({force:true})
export default Product