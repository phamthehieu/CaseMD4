import {AppDataSource} from "../data-soure";
import {Category} from "../model/category";

class CategoryService {
    private categoryRepository

    constructor() {
        this.categoryRepository = AppDataSource.getRepository(Category)
    }

    getAll = async () => {
        let sql = `select *
                   from category`
        return await this.categoryRepository.query(sql)
    }
<<<<<<< HEAD
    save = async (category) =>{
        return await  this.categoryRepository.save(category)
    }
    delete = async (id) =>{
        let category = this.categoryRepository.findOneBy({idCategory:id})
=======
    save = async (category) => {
        return await this.categoryRepository.save(category)
    }
    remove = async (id) => {
        let category = this.categoryRepository.findOneBy({idCategory: id})
        if (!category) {
            return null
        } else {
            return await this.categoryRepository.delete({idCategory: id})
        }


    }
    update = async (id,newCategory) => {
        let category = this.categoryRepository.findOneBy({idCategory : id})
>>>>>>> 1118e51c0186b21c0fc81b29636f81453d6b5960
        if(!category){
            return null
        }
        else {
<<<<<<< HEAD
            this.categoryRepository.delete({idCategory:id})
        }
    }
    update = async (id,newCategory)=>{
        let category = this.categoryRepository.findOneBy({idCategory:id})
        if (!category){
            return null

        }
        else {
            this.categoryRepository.update(id,newCategory)
        }
    }
=======
            return  await  this.categoryRepository.update(id,newCategory)
        }
}
>>>>>>> 1118e51c0186b21c0fc81b29636f81453d6b5960
}

export default new CategoryService()