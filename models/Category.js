import { DataTypes, Model } from "sequelize";
import db from "../db/db.js";

class Category extends Model{}

// primer parametro le paso un obj con los parametros de la tabla
// segundo parametro le paso la conexión
// Category.init(
//     {
        // estructura de la tabla de la bd
//     },
//     {
        // conexión a la bd
//     }
// )

Category.init(
    {
        name:{
            type:DataTypes.STRING,
            allowNull:false,
        }
        // la estructura de la tabla que quiero crear
    },
    {
        // la cnexión a la bd y el nombre de la tabla
        sequelize:db,
        modelName:"Category"
    }
)

// este modo de crear la tabla, esta bien si esta en desarrollo yesta siendo modificada constantemente
// User.sync({ alter: true }) -> esto altera la tabla para que sea congurnete con el modelo
// await Category.sync()

export default Category