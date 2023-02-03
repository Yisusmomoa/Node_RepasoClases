import {Category} from "../models/index.js";


class CategoryController{

    static async getAllCategories (req, res) {
        try {
            const categories=await Category.findAll({
                attributes:['id', 'name', 'createdAt']
            })
            if (categories.length===0) {
                throw "No hay categorias para mostrar"
            }
            res.status(200).send(categories)
        } catch (error) {
            return  res.status(500).send(error)
        }
    }

    static async getCategoryById (req, res){
        const {id}=req.params
        try {
            const category=await Category.findOne({
                where:{
                    id:id,
                },
                attributes:["id", "name"]
            })
            console.log("categoria", typeof(Category))
            if(!category) {
                throw "No se encontro la categoría"
            }
            res.status(200).send(category)
        } catch (error) {
            res.status(500).send({error})
        }
    }

    static async createCategory(req, res){
        try {
            const result=await Category.create(req.body)
            res.status(201).send(result)
        } catch (error) {
            return  res.status(500).send({message:error})
        }
    }

    static async deleteCategory(req, res){
        const {id}=req.params
        try {
            const result=await Category.destroy({
                where: {id:id}
            })
            console.log(result)
             if(!result) {
                throw "No se encontro el producto"
            }
            res.status(200).send({result})
        } catch (error) {
            return res.status(500).send(error)
        }
    }

    static async updateCategory(req, res){
        const{name}=req.body
        try {
            const category=await Category.findByPk(req.params.id)
            if(!category) throw "No se encontro la categoría"
            category.name=name
            category.save()
            
            // const result=await Category.update({
            //     name:req.body.name
            // },{where:{id:req.params.id}})
            res.status(200).send(category)
        } catch (error) {
            return res.status(500).send({message:error})
        }
    }
    
}


export default CategoryController