const PRODUCTOS = [
    {
        id:1,
        ruta:'https://http2.mlstatic.com/D_NQ_NP_971510-MLA46260077895_062021-O.jpg',
        descripcion: 'Redmi Note 9',
        precio: 320
    },
    {
        id:2,
        ruta: 'https://f.fenicio.app/imgs/08cb67/stienda.uy/sam/a2f8/original/catalogo/A041131/1500-1500/samsung-galaxy-s21-5g-128-gb-phantom-gray.jpg',
        descripcion: 'Samsung S21',
        precio: 1100
    },
    {
        id:3,
        ruta:'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-family-select-2021?wid=940&hei=1112&fmt=jpeg&qlt=80&.v=1617135051000',
        descripcion: 'Iphone 12',
        precio: 990
    },
    {
        id:4,
        ruta:'https://http2.mlstatic.com/D_NQ_NP_616400-MLA46494251983_062021-O.jpg',
        descripcion: 'Realme 8 Pro',
        precio: 414
    },
];

const promesa = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve(PRODUCTOS);
    },2222)
});

function obtenerProductos(){
    return promesa;
}

export {
    obtenerProductos,
}

