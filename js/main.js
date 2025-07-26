const secciones = [
  {
    id: "loan",
    title: "Calculadora de Préstamos",
    inputs: [
      {label: "Monto del Préstamo", id: "monto", tipo:"number"},
      {label: "Tasa de Interés Anual (%)", id: "intereses", tipo:"number"},
      {label: "Plazo del Préstamo (años)", id: "plazos", tipo:"number"}
    ],
    calcular: (monto, intereses, plazos) => {
      const mensual = (monto * (intereses / 100)) / plazos;
      return `Cuota anual aproximada: $${mensual.toFixed(2)}`;
  },
  },
  {
    id: "investments",
    titulo: "Calculadora de Inversiones",
    inputs: [
      { label: "Inversión Inicial", id: "inicial", tipo: "number" },
      { label: "Aporte Mensual", id: "aporte", tipo: "number" },
      { label: "Rendimiento Anual (%)", id: "rendimiento", tipo: "number" },
      { label: "Años de Inversión", id: "años", tipo: "number" },
    ],
    calcular: (inicial, aporte, rendimiento, años) => {
      const total = inicial * Math.pow(1 + rendimiento / 100, años);
      return `Inversión estimada: $${total.toFixed(2)}`;
    },
  },
  {
    id: "mortgage",
    titulo: "Calculadora de Hipoteca",
    inputs: [
      { label: "Precio de la Propiedad", id: "precio", tipo: "number" },
      { label: "Pago Inicial (%)", id: "pagoInicial", tipo: "number" },
      { label: "Tasa de Interés Anual (%)", id: "tasaInteres", tipo: "number" },
      { label: "Plazo del Préstamo (años)", id: "plazo", tipo: "number" },
    ],
    calcular: (precio, pagoInicial, tasaInteres, plazo) => {
      const montoPrestamo = precio * (1 - pagoInicial / 100);
      const interesMensual = tasaInteres / 100 / 12;
      const numeroPagos = plazo * 12;
      const cuotaMensual = (montoPrestamo * interesMensual) / (1 - Math.pow(1 + interesMensual, -numeroPagos));
      return `Cuota mensual aproximada: $${cuotaMensual.toFixed(2)}`;
    },
  },
  {
    id: "savings",
    title: "Calculadora de Ahorros",
    inputs: [
      { label: "Ahorro Mensual", id: "ahorroMensual", tipo: "number" },
      { label: "Tasa de Interés Anual (%)", id: "tasaInteresAhorro", tipo: "number" },
      { label: "Años de Ahorro", id: "añosAhorro", tipo: "number" },
    ],
    calcular: (ahorroMensual, tasaInteresAhorro, añosAhorro) => {
      const total = ahorroMensual * 12 * añosAhorro * (1 + tasaInteresAhorro / 100);
      return `Total ahorrado: $${total.toFixed(2)}`;
    },
  }
]

const contenedor = document.getElementById("calculator-container");
const botones = document.querySelectorAll(".tab-button");

botones.forEach((btn) => {

})