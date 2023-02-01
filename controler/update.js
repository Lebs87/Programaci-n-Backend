import Products from "../model/products.js"

const update = async ()=> {
/* -----UPDATE DE UN SOLO PRODUCTO -----*/ 
   /*  const updateProduct = await Products.findOneAndUpdate(
        {code: 1111},
        {$set: {price: 1400}},
        {new: true}, // Si no se coloca el new true, no me regresa el console.log actualizado
    );
    console.log({ updateProduct }) */
/* -----UPDATE MASIVO -----*/
    /* const updateMasivo = await Products.updateMany({}, { $set: { stock: 10}});
    console.log({ updateMasivo }) */
/* -----UPDATE MASIVO QUE CUMPLA UNA CARACTERISTICA-----*/
    /* const updateMasivo = await Products.updateMany({ code: 1111}, { $set: { stock: 5}});
    console.log({ updateMasivo }) */
    /* -----DELETE MASIVO -----*/
    /* const deleteMasivo = await Products.deleteMany({ stock: 10});
    console.log({ deleteMasivo }) */
};

export default update;
