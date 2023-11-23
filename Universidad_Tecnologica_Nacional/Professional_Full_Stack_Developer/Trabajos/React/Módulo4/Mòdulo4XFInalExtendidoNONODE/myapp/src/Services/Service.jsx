import firebase from '../Services/Firebase'

export function getDocById (id) {
    return firebase.firestore().doc(`productos/${id}`).get();
}


export function getting(table) {
    return firebase.firestore().collection(`${table}`).get();
}

export function updating (id, data) {
    return firebase.firestore().doc(`productos/${id}`).set(data);
}


export async function createProduct (product) {
    return await firebase.firestore().collection('productos').add({
        nombre: product.nombre,
        precio: product.precio,
        sku: product.sku,
        descripcion: product.descripcion,
    });
}

export async function deleteProduct (id) {
    return await firebase.firestore().doc(`productos/${id}`).delete()
}