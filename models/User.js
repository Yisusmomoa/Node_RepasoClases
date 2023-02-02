import { DataTypes, Model } from "sequelize";
import db from "../db/db.js";

class User extends Model{}

User.init(
    {
        name:{
            type:DataTypes.STRING(50),
            allowNull:false,
        },
        lastName:{
            type:DataTypes.STRING(50),
            allowNull:false
        },
        password:{
            type:DataTypes.STRING(50),
            allowNull:false
        },
        role:{
            type:DataTypes.STRING(25)
        }
    },
    {
        sequelize:db,
        modelName:"User"
    }
)


export default User