const productList = [
  {
    img: "./imagenes/163465-800-auto.png",
    name: "Lavarropas",
    time: "Nuevo",
    price: 1111,
    sold: 34,
  },
  {
    img: "./imagenes/163465-800-auto.png",
    name: "Lavarropas",
    time: "Nuevo",
    price: 8111,
    sold: 12,
  },
  {
    img: "./imagenes/163465-800-auto.png",
    name: "Lavarropas",
    time: "Nuevo",
    price: 6500,
    sold: 10,
  },
];

function main() {
  //paso 1 referenciar al template
  const template = document.getElementById("product-card");
  //paso 2 clonar el template
  productList.forEach((product) => {
    const clone = template.content.cloneNode(true);
    //paso 3 Asignar contenido al clon
    const img = clone.getElementById("photos");
    img.src = product.img;
    const name = clone.querySelector("h2");
    name.innerText = product.name;
    const time = clone.querySelector("h3");
    time.innerText = product.time;
    const sold = clone.querySelector("p");
    sold.innerText = 'Vendidos: ' + product.sold;
    const price = clone.querySelector("h1");
    price.innerText = "$" + product.price;
    //paso 4 agregar al padre
    const container = document.querySelector("div.tarjetas");
    container.appendChild(clone);
  });
}

main();
