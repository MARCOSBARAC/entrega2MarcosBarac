class silueta {
  constructor(marca, modelo, talle, precio, stock) {
    this.marca = marca;
    this.modelo = modelo;
    this.talle = talle;
    this.precio = precio;
    this.stock = stock;
  }
}

const travisScott = new silueta(
  "Jordan",
  "1 High x Travis Scott",
  "12 US",
  1275,
  1
);
const yeezy700 = new silueta("Yeezy", "700 Waveruner", "11.5 US", 334, 1);
const dunk = new silueta("Nike", "Dunk What The Paul", "9 US", 471, 1);
const jordanLost = new silueta(
  "Jordan",
  "1 Chicago Lost n Found",
  "9.5 US",
  422,
  2
);
const forumBadBunny = new silueta(
  "Adidas",
  "Forum x Bad Bunny",
  "9 US",
  471,
  1
);
const airMax97 = new silueta(
  "Nike",
  "Airmax 97 Have a Nike Day",
  "12 US",
  370,
  1
);
const myArray = [
  travisScott,
  yeezy700,
  dunk,
  jordanLost,
  forumBadBunny,
  airMax97,
];

function cuotasValidas(num) {
  return num == 1 || num == 3 || num == 6 || num == 12;
}

function ventaDePar(_silueta) {
  const par = myArray.find((i) => i.modelo == _silueta);
  par.stock = par.stock - 1;
}

function precioConCuotas() {
  let par = prompt("Ingrese el par a comprar");
  ventaDePar(par);
  let importeAbonar = myArray.find((i) => i.modelo == par).precio;
  let cantidadCuotas = prompt("Cuantas cuotas?");
  while (!cuotasValidas(cantidadCuotas)) {
    alert("El numero de cuotas no es correcto");
    cantidadCuotas = prompt("Cuantas cuotas?");
  }
  if (cantidadCuotas == 1) {
    alert("El importe a abonar es: " + importeAbonar * 1);
  }
  if (cantidadCuotas == 3) {
    alert("El importe a abonar es: " + importeAbonar * 1.25);
  } else if (cantidadCuotas == 6) {
    alert("El importe a abonar es: " + importeAbonar * 1.5);
  } else if (cantidadCuotas == 12) {
    alert("El importe a abonar es: " + importeAbonar * 2);
  }
  console.log(myArray.find((i) => i.modelo == par).stock);
}

precioConCuotas();
