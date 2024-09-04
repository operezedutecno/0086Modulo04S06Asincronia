// Función asíncrona en ES5
async function regiones() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Listado de regiones");
        }, 5_000);
    })
}

// Función asíncrona en ES6
const tiposPagos = async() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Listado de tipos de pago");
        }, 2_000);
    })
}

const tiposBoletas = async() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Listado de tipos de boleta");
        }, 3_000);
    })
}

// Ejemplo de proceso asíncrono
// console.log("Llamando a regiones");
// regiones().then((response) => console.log(response))
// console.log("Llamando a tiposPagos");
// tiposPagos().then((response) => console.log(response))
// console.log("Llamando a tiposBoletas");
// tiposBoletas().then((response) => console.log(response))


// Ejemplo de proceso síncrono
// console.log("Llamando a regiones");
// regiones().then((response) => {
//     console.log(response);
//     console.log("Llamando a tiposPagos");
//     tiposPagos().then((response2) => {
//         console.log(response2);
//         console.log("Llamando a tiposBoletas");
//         tiposBoletas().then(response3 => {
//             console.log(response3);
//         }) 
//     })
// })


// Ejemplo de proceso síncrono
const procesoSincrono = async() => {
    const listadoRegiones = await regiones();
    console.log(listadoRegiones);
    const listadoTiposPagos = await tiposPagos();
    console.log(listadoTiposPagos);
    const listadoTiposBoletas = await tiposBoletas();
    console.log(listadoTiposBoletas);
}
// procesoSincrono()


// Ejemplo de proceso asíncrono
const promesaRegiones = regiones()
const promesaTiposPagos = tiposPagos()
const promesaTiposBoletas = tiposBoletas()


// Promise.all([promesaRegiones, promesaTiposPagos, promesaTiposBoletas]).then((response) => {
//     console.log("Promise.all",response);
// })


// Ejemplo donde se ejecutan la función de obtener regiones y tipos pagos en simultáneo, y una vez que estas 2
// terminen se podrá llamar a TiposBoletas.
const ejemploProceso = () => {
    const promesaRegiones = regiones()
    const promesaTiposPagos = tiposPagos()

    Promise.all([promesaRegiones, promesaTiposPagos]).then(async (response) => {
        console.log(response);
        // Opción 1 aplicando callback
        // tiposBoletas().then(resp => {
        //     console.log(resp);
        // })
        
        // Opción2 aplicando await 
        const promesaTiposBoletas = await tiposBoletas()
        console.log(promesaTiposBoletas);
    })
}
ejemploProceso()
