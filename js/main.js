class siluetas {
  constructor(marca, modelo, talle, precio, stock) {
    this.marca = marca;
    this.modelo = modelo;
    this.talle = talle;
    this.precio = precio;
    this.stock = stock;
  }
  venta() {
    this.stock--;
  }
}
const travisScott = new siluetas(
  "Jordan",
  "1 High x Travis Scott",
  "12 US",
  "US$ 1275",
  "1"
);
const yeezy700 = new siluetas(
  "Yeezy",
  "700 Waveruner",
  "11.5 US",
  "US$ 334",
  "1"
);
const dunk = new siluetas("Nike", "Dunk What The Paul", "9 US", "US$ 471", "1");
const jordanLost = new siluetas(
  "Jordan",
  "1 Chicago Lost n Found",
  "9.5 US",
  "US$ 422",
  "2"
);
const forumBadBunny = new siluetas(
  "Adidas",
  "Forum x Bad Bunny",
  "9 US",
  "US$ 471",
  "1"
);
const airMax97 = new siluetas(
  "Nike",
  "Airmax 97 Have a Nike Day",
  "12 US",
  "US$ 370",
  "1"
);
const myArray = [
  travisScott,
  yeezy700,
  dunk,
  jordanLost,
  forumBadBunny,
  airMax97,
];

travisScott;
travisScott.venta();
console.log(travisScott);

function cuotasValidas(num) {
  return num == 3 || num == 6 || num == 12;
}

function precioConCuotas() {
  let importeAbonar = prompt("Importe a abonar");
  let cantidadCuotas = prompt("Cuantas cuotas?");
  while (!cuotasValidas(cantidadCuotas)) {
    alert("El numero de cuotas no es correcto");
    cantidadCuotas = prompt("Cuantas cuotas?");
  }
  if (cantidadCuotas == 3) {
    alert("El importe a abonar es: " + Number(importeAbonar * 1.25));
  } else if (cantidadCuotas == 6) {
    alert("El importe a abonar es: " + Number(importeAbonar * 1.5));
  } else if (cantidadCuotas == 12) {
    alert("El importe a abonar es: " + Number(importeAbonar * 2));
  }
}

precioConCuotas();
