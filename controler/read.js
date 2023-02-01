import Products from "../model/products.js"

const read = async () => {
    /* ---Ordenar de forma Ascendente + Traer el tiempo de creación del primer arreglo--- */
        const sortedProducts = await Products.find({}).sort({ code: 1 });
        const sortedProductsIdTimestamp = sortedProducts[0]._id.getTimestamp();
        console.log({ sortedProductsIdTimestamp})
        /* ---Ordenar de forma Descendente--- */ 
        //const sortedProducts = await Products.find({}).sort({ code: -1 });
    /*---Ordenar de forma Ascendente pero solo mostrar el title y code--- */ 
        //const sortedProducts = await Products.find({}, {code: 1, title: 1}).sort({ code: -1 });
    /*---Ordenar de forma Ascendente pero que no se muestre el ID y solo mostrar el title y code--- */ 
        //const sortedProducts = await Products.find({}, {_id: 0, code: 1, title: 1}).sort({ code: -1 });
    /* ---Producto de menor precio--- */
        //const sortedProducts = await Products.find({}).sort({ code: 1 }).limit(1);
    /* ---Producto con el tercer menor precio--- */
        //const sortedProducts = await Products.find({}).sort({ code: 1 }).skip(2).limit(1);


    //console.log(JSON.stringify(sortedProducts, null, 2))
};

export default read;
