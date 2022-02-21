const PRODUCTOS = [
    {
        id:1,
        ruta:'https://http2.mlstatic.com/D_NQ_NP_971510-MLA46260077895_062021-O.jpg',
        descripcion: 'Redmi Note 9',
        precio: 320,
        categoria: 'telefonos',
        stock: 10
    },
    {
        id:2,
        ruta: 'https://f.fenicio.app/imgs/08cb67/stienda.uy/sam/a2f8/original/catalogo/A041131/1500-1500/samsung-galaxy-s21-5g-128-gb-phantom-gray.jpg',
        descripcion: 'Samsung S21',
        precio: 1100,
        categoria: 'telefonos',
        stock: 7
    },
    {
        id:3,
        ruta:'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-family-select-2021?wid=940&hei=1112&fmt=jpeg&qlt=80&.v=1617135051000',
        descripcion: 'Iphone 12',
        precio: 990,
        categoria: 'telefonos',
        stock: 1
    },
    {
        id:4,
        ruta:'https://http2.mlstatic.com/D_NQ_NP_616400-MLA46494251983_062021-O.jpg',
        descripcion: 'Realme 8 Pro',
        precio: 414,
        categoria: 'telefonos',
        stock: 4
    },
    {
        id:5,
        ruta:'https://www.miuruguay.com.uy/wp-content/uploads/2021/10/xiaomiPad5GrisPerla-01.jpg',
        descripcion: 'Mi Pad 5',
        precio: 674,
        categoria: 'tablets',
        stock: 30
    },
    {
        id:6,
        ruta:'https://d21buns5ku92am.cloudfront.net/68766/images/374630-JBL_CHARGE5_HERO_WHITE_0030_x2-31c804-large-1609760345.png',
        descripcion: 'JBL Charge 5',
        precio: 250,
        categoria: 'parlantes',
        stock: 15
    },
    {
        id:7,
        ruta:'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-select-wifi-spacegray-202104_GEO_MX_FMT_WHH?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1617923546000',
        descripcion: 'IPad Pro',
        precio: 1674,
        categoria: 'tablets',
        stock: 2
    },
    {
        id:8,
        ruta:'https://www.jbl.es/dw/image/v2/AAUJ_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw1962ae8b/JBL_GO_3_HERO_CAMO_0183_1605x1605px.png?sw=537&sfrm=png',
        descripcion: 'JBL Go 3',
        precio: 58,
        categoria: 'parlantes',
        stock: 88
    },
    
];

const promesa = new Promise(function(resolve,reject){
    
    setTimeout(function(){
        resolve(PRODUCTOS);
    },1000)  //Simulacion de llamada a BackEnd, demora de 1000ms = 1segundo
});

function getItems(){
    return promesa;
}

export {
    getItems,
}

