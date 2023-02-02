import Category from "./Category.js";
import Product from "./Product.js";
import User from './User.js'
Category.hasMany(Product)
Product.belongsTo(Category)
// await Category.sync({alter:true})
// await Product.sync({alter:true})

export  {
    Category,
    Product,
    User
}
