const mobiles = document.getElementById('head');

const phones = [
    {
        brand: 'Samsung',
        model: 'S20',
        img:"assets/samsung.jfif",
        ram: 8,
        rom: 256,
        camera: '20 megapixel',
        USD: 521,
    },
    {
        brand: 'Xiomi',
        model: 'note10',
        img:"assets/xiomi.jfif",
        ram: 4,
        rom: 64,
        camera: '10 megapixel',
        USD: 949,
    },
    {
        brand: 'Infinix',
        model: 'z10',
        img:"assets/infinix.jfif",
        ram: 2,
        rom: 16,
        camera: '5 megapixel',
        USD: 310,
    },
    {
        brand: 'Tecno',
        model: 'spark10',
        img:"assets/tecno.jfif",
        ram: 12,
        rom: 512,
        camera: '25 megapixel',
        USD: 450,
    },
    {
        brand: 'Iphone',
        model: '14',
        img:"assets/N53347123A_1.avif",
        ram: 4,
        rom: 1024,
        camera: '30 megapixel',
        USD: 399,
    },
    {
        brand: 'Oppo',
        model: 'F11',
        img:"assets/oppo.jfif",
        ram: 8,
        rom: 256,
        camera: '20 megapixel',
        USD: 330,
    },
    {
        brand: 'Vivo',
        model: 'y20',
        img:"assets/vivo.jfif",
        ram: 4,
        rom: 64,
        camera: '8 megapixel',
        USD: 499,
    },

]

 console.log(phones[1].brand);

 for (let i = 0; i < phones.length; i++) {
    mobiles.innerHTML += `<div class="header">
    <h3>${phones[i].brand}</h3>
    <img src="${phones[i].img}" class="image">
    <h5>Model:${phones[i].model}</h5>
    <h5>Ram:${phones[i].ram}GB</h5>
    <h5>Rom:${phones[i].rom}GB</h5>
    <h5>Camera:${phones[i].camera}</h5>
    <h5>USD: ${phones[i].USD}</h5>
    <button class="btn">Add To Cart</button>

</div>`
    
    
 }