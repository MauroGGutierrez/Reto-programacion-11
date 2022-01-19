function removeChildNode(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild)
  }
}
const conAsync = async () => {
      document.getElementById('search').addEventListener('submit', async(e) => {
      e.preventDefault();
      try {
          const container = document.querySelector('div.tarjetas');
          removeChildNode(container);
          const inputSearch = document.getElementById('busqueda');
          const res = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${inputSearch.value}`);
          const datos = await res.json();
          //paso 1 referenciar al template
          const template = document.getElementById("product-card");
          //paso 2 clonar el template
          datos.results.forEach((product) => {
            const clone = template.content.cloneNode(true);
            //paso 3 Asignar contenido al clon
            const img = clone.getElementById("photos");
            img.src = product.thumbnail;
            const name = clone.querySelector("h2");
            name.innerText = product.title;
            const time = clone.querySelector("h3");
            time.innerText = 'Estado: ' + product.condition;
            const sold = clone.getElementById("venta");
            sold.innerText = 'Vendidos: ' + product.sold_quantity;
            const price = clone.querySelector("h1");
            price.innerText = "$" + product.price;
            //paso 4 agregar al padre
            const container = document.querySelector("div.tarjetas");
            container.appendChild(clone);
          });
       } catch (error) {
      console.log(error)
     }
  })
}
// const productList = [
//   {
//     img: "./imagenes/163465-800-auto.png",
//     name: "Lavarropas",
//     time: "Nuevo",
//     price: 1111,
//     sold: 34,
//   },
//   {
//     img: "./imagenes/163465-800-auto.png",
//     name: "Lavarropas",
//     time: "Nuevo",
//     price: 8111,
//     sold: 12,
//   },
//   {
//     img: "./imagenes/163465-800-auto.png",
//     name: "Lavarropas",
//     time: "Nuevo",
//     price: 6500,
//     sold: 10,
//   },
// ];
function main() {
  conAsync();
};

main();
