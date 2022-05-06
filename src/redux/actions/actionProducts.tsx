import { typesProductos } from "../types/types";

export const selectedSync = (nombre: string) => {
    return {
        type: typesProductos.selected,
        payload: nombre
    }
}
 
export const editAsync = (nombre: any, producto: any) => {
    console.log(nombre, producto);
    return async (dispatch: any) => {
        console.log('editAsync Action')
    } 

}

export const editSync = (producto: any) => {
    return {
        type: typesProductos.edit,
        payload: producto
    }
}

//-------------------delete--------------------//
export const deleteAsync = (nombre: any) => {
    return async (dispatch: any) => {
        // dispatch(deleteSync(nombre));
        // dispatch(listAsync());
    }
}

export const deleteSync = (producto: any) => {
    return {
        type: typesProductos.delete,
        payload: producto
    }
}

//---------------listar----------------//
export const listAsync = () => {
    return async (dispatch: any) => {
        // dispatch(listSync(productos));
    }
}

export const listSync = (productos: any) => {
    return {
        type: typesProductos.list,
        payload: productos
    }
}

//-------------agregar---------------//
export const addAsync = (producto: any) => {
    return (dispatch: any) => {
                // dispatch(addSync(producto));
                // dispatch(listAsync())
    }
}

export const addSync = (producto: any) => {
    return {
        type: typesProductos.add,
        payload: producto
    }
}

// ------- Agregar desde formik ------- //
export const addFormikAsync = (product: any) => {
    console.log('Action addFormik ',product);
    return (dispatch: any) => {
                // dispatch(addFormikSync(product))
            }
}

export const addFormikSync = (product: any) => {
    return {
        type: typesProductos.addFormik,
        payload: product
    }
}