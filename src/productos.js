const productos = [
    {id: 1, nombre: 'Peugeot 504 Coupé', precio: 'US$7000', categoria: 'usado', img: "https://espirituracer.com/archivos/2020/06/peugeot-504-coupe-1969-1.jpg"},
    {id: 2, nombre: 'Honda Civic SI', precio: 'US$4000', categoria: '0 km', img: "https://i.blogs.es/108dd4/2000_honda_civic_si-5/1366_2000.jpg"},
    {id: 3, nombre: 'Ford Taunus GT', precio: 'US$5000', categoria: 'usado', img: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Ford_Taunus_2300_GT_Coup%C3%A9_RA.jpg"}
]


export const obtenerProductos = () => {

    return new Promise ((resolve, reject) => {

        setTimeout(() => {
            resolve(productos)
        }, 2000)

    })
}

export const obtenerItem = () => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(productos[1])
        }, 2000)

    })
}

