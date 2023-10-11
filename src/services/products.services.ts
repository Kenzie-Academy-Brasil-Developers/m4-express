import { generateId, productsDatabase } from "../database/database";
import { IProduct } from "../interfaces/products.interfaces";

export class ProductsServices{
    getProducts(){
        return productsDatabase;
    }

    getOneProduct(id: string){
        const findProduct = productsDatabase.find(product => product.id === Number(id));

        return findProduct;
    }

    createProduct(data: Omit<IProduct, 'id'>){
        const newProduct: IProduct = { id: generateId(), name: data.name, price: data.price };
        
        productsDatabase.push(newProduct);

        return newProduct;
    }

    deleteProduct(id: string){
        const index = productsDatabase.findIndex(product => product.id === Number(id));

        productsDatabase.splice(index, 1);
    }

    editProduct(id: string, data: Partial<Omit<IProduct, 'id'>>){
        const product = productsDatabase.find(product => product.id === Number(id)) as IProduct;

        const newProduct = { ...product, ...data};

        const index = productsDatabase.findIndex(product => product.id === Number(id));

        productsDatabase.splice(index, 1, newProduct);

        return newProduct;
    }
}