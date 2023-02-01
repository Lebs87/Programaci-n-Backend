/* ------CARGA MASIVA----- */
/* import Products from "../model/products.js";

const create = async ()=>{
    const ProductsToAdd = [
        {title: 'Colador de Pasta 1', description: 'Colador de Pasta 1', code: '1111', price: 1400, stock: 10, thumbnail:'https://res.cloudinary.com/dhw4kmb5x/image/upload/v1667490839/fabihogar/colador_pasta1_s0als0.png'},
        {title: 'Colador de Pasta 2', description: 'Colador de Pasta 2', code: '1112', price: 1900, stock: 10, thumbnail:'https://res.cloudinary.com/dhw4kmb5x/image/upload/v1667490839/fabihogar/colador_pasta1_s0als0.png'},
        {title: 'Mortero de Marmol 1', description: 'Mortero de Marmol 1', code: '1113', price: 2400, stock: 10, thumbnail:'https://res.cloudinary.com/dhw4kmb5x/image/upload/v1667490839/fabihogar/mortero_marmol1_okywfc.png'},
        {title: 'Mortero de Marmol 2', description: 'Mortero de Marmol 2', code: '1114', price: 2900, stock: 10, thumbnail:'https://res.cloudinary.com/dhw4kmb5x/image/upload/v1667490839/fabihogar/mortero_marmol1_okywfc.png'},
        {title: 'Jarro Hervidor 1', description: 'Jarro Hervidor 1', code: '1115', price: 3400, stock: 10, thumbnail:'https://res.cloudinary.com/dhw4kmb5x/image/upload/v1667490839/fabihogar/jarro_hervidor1_my0uxw.png'},
        {title: 'Jarro Hervidor 2', description: 'Jarro Hervidor 2', code: '1116', price: 3900, stock: 10, thumbnail:'https://res.cloudinary.com/dhw4kmb5x/image/upload/v1667490839/fabihogar/jarro_hervidor1_my0uxw.png'}
    ];
    await Products.insertMany(ProductsToAdd);
}

export default create; */

/* ----- Iterar sobre el array de productos, cuando no queremos hacer carga masiva ----- */
import Products from "../model/products.js";

const create = async ()=>{
    const ProductsToAdd = [
        {title: 'Colador de Pasta 3', description: 'Colador de Pasta 3', code: '1117', price: 4400, stock: 10, thumbnail:'https://res.cloudinary.com/dhw4kmb5x/image/upload/v1667490839/fabihogar/colador_pasta1_s0als0.png'},
        {title: 'Colador de Pasta 4', description: 'Colador de Pasta 4', code: '1118', price: 4900, stock: 10, thumbnail:'https://res.cloudinary.com/dhw4kmb5x/image/upload/v1667490839/fabihogar/colador_pasta1_s0als0.png'},
        {title: 'Mortero de Marmol 3', description: 'Mortero de Marmol 3', code: '1119', price: 5400, stock: 10, thumbnail:'https://res.cloudinary.com/dhw4kmb5x/image/upload/v1667490839/fabihogar/mortero_marmol1_okywfc.png'},
        {title: 'Mortero de Marmol 4', description: 'Mortero de Marmol 4', code: '1120', price: 5900, stock: 10, thumbnail:'https://res.cloudinary.com/dhw4kmb5x/image/upload/v1667490839/fabihogar/mortero_marmol1_okywfc.png'},
        {title: 'Jarro Hervidor 3', description: 'Jarro Hervidor 3', code: '1121', price: 6400, stock: 10, thumbnail:'https://res.cloudinary.com/dhw4kmb5x/image/upload/v1667490839/fabihogar/jarro_hervidor1_my0uxw.png'},
        {title: 'Jarro Hervidor 4', description: 'Jarro Hervidor 4', code: '1122', price: 6900, stock: 10, thumbnail:'https://res.cloudinary.com/dhw4kmb5x/image/upload/v1667490839/fabihogar/jarro_hervidor1_my0uxw.png'}
    ];
const promises = ProductsToAdd.map(product => {
    const newProduct = new Products(product);
    return newProduct.save();
});
await Promise.all(promises);
};
export default create;
