const productos = [
    {id: 1, nombre: 'Peugeot 504 Coupé', stock: '2', precio: 'US$18000', anio: '1978', km: '150000', transmision: 'Manual', puertas:'3', categoria: 'usado', img: "https://espirituracer.com/archivos/2020/06/peugeot-504-coupe-1969-1.jpg"},
    {id: 2, nombre: 'Honda Civic SI', stock: '5', precio: 'US$18000', anio: '1990', km: '120000', transmision: 'Manual', puertas:'3', categoria: 'usado', img: "https://i.blogs.es/108dd4/2000_honda_civic_si-5/1366_2000.jpg"},
    {id: 3, nombre: 'Ford Taunus GT', stock: '3', precio: 'US$12500', anio: '1980', km: '200000', transmision: 'Manual', puertas:'3', categoria: 'usado', img: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Ford_Taunus_2300_GT_Coup%C3%A9_RA.jpg"},
    {id:4, nombre: 'Volkswagen Taos', stock: '8', precio: 'US$32000', anio: '2021', km: '0', transmision: 'Tiptronic', puertas:'5', categoria: '0km', img: "https://www.megautos.com/wp-content/uploads/2020/10/Volkswagen-Taos-delantera.jpg"},
    {id: 5, nombre: 'Chevrolet Tracker', stock: '11', precio: 'US$28000', anio: '2021', km: '0', transmision: 'Automática', puertas:'5', categoria: '0km', img: "https://www.chevrolet.com.ar/content/dam/chevrolet/mercosur/argentina/espanol/index/crossover-and-suvs/2021-tracker/colorizer/01-images/nueva-tracker-summit-white.jpg?imwidth=960"},
    {id: 6, nombre: 'Ford Bronco', stock: '6', precio: 'US$30000', anio: '2021', km: '0', transmision: 'Manual', puertas:'5', categoria: '0km', img: "https://cdn-ds.com/chrome/2021-Ford-Bronco-Sport-Big-Bend-Arecibo-PR/seo/MzI0ODgwXk1lZGlhIEdhbGxlcnk/evX30XN9WOMz694NVB0C9x3xXrRTdC6mwQ0ACWbsQktfVA-bZno2vyLzBfWWhkSS_P6eEKaKF-W6LFb8pgcOnuYjeM3IBNzlKBEfNrN2dpLmr5sOhG6reHoaCdDZmqmhCoThV0pXt62Jr9gWltyOLjSCPEwmtLrWRwYQi83wXBW6fJxR0jY1sQ/w_705/h_522/cc_2021FOS400018_01_1280_JS.jpg"}
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

export const obtenerProductoById = (id) => {  
    return new Promise((resolve, reject) => {
        const product = productos.find(prod => parseInt(prod.id) === parseInt(id))
        setTimeout(() => resolve(product), 1000)
    })
}

export const obtenerProductosByCategoria = (category) => {
    return new Promise ((resolve, reject) => {
        const products = productos.filter(productos => productos.categoria === category)
        setTimeout(() => resolve(products), 1000)
    })
}
