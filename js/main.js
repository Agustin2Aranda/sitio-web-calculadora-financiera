const botones = document.querySelectorAll(".tab-button");

botones.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab-content, .loan-content").forEach(s => s.classList.remove("active"));

    botones.forEach(b => b.classList.remove("active"));

    btn.classList.add("active");

    const id = btn.id.replace("btn", "").toLowerCase();

    const seccion = document.getElementById(
      id === "prestamo" ? "loan" :
      id === "inversion" ? "investment" :
      id === "hipoteca" ? "mortgage" :
      id === "ahorro" ? "savings" : null
    );

    if (seccion) {
      seccion.classList.add("active");
    }
  });
});

// Calculadora de Préstamos
document.getElementById("btnLoanCalc").addEventListener("click", () => {
  const monto = parseFloat(document.getElementById("loanAmount").value);
  const tasa = parseFloat(document.getElementById("loanRate").value);
  const plazo = parseInt(document.getElementById("loanYears").value);

  if (!isNaN(monto) && !isNaN(tasa) && !isNaN(plazo)) {
    const total = monto * (1 + (tasa / 100) * plazo);
    const cuota = total / (plazo * 12);
    const interes = total - monto;

    document.getElementById("monthlyPayment").textContent = `$ ${cuota.toFixed(0)}`;
    document.getElementById("totalPayment").textContent = `$ ${total.toLocaleString()}`;
    document.getElementById("totalInterest").textContent = `$ ${interes.toFixed(0)}`;

    document.getElementById("loanResults").classList.remove("hidden");
  }
});

// Calculadora de Inversión
document.getElementById("btnInvCalc").addEventListener("click", () => {
  const inicial = parseFloat(document.getElementById("initialInvestment").value);
  const mensual = parseFloat(document.getElementById("monthlyContribution").value);
  const rendimiento = parseFloat(document.getElementById("investmentRate").value);
  const años = parseInt(document.getElementById("investmentYears").value);

  if (!isNaN(inicial) && !isNaN(mensual) && !isNaN(rendimiento) && !isNaN(años)) {
    const meses = años * 12;
    let total = inicial;
    for (let i = 0; i < meses; i++) {
      total += mensual;
      total += total * (rendimiento / 100) / 12;
    }
    const ganancia = total - (inicial + mensual * meses);
    const valorTotal = total + ganancia;

    document.getElementById("finalValue").textContent = `$ ${valorTotal.toFixed(0)}`;
    document.getElementById("totalInvested").textContent = `$ ${total.toFixed(0)}`;
    document.getElementById("totalGains").textContent = `$ ${ganancia.toFixed(0)}`;

    document.getElementById("investmentResults").classList.remove("hidden");
  }
});

// Calculadora de Hipoteca
document.getElementById("btnHipCalc").addEventListener("click", () => {
  const precio = parseFloat(document.getElementById("homePrice").value);
  const enganche = parseFloat(document.getElementById("downPayment").value);
  const interes = parseFloat(document.getElementById("mortgageRate").value);
  const plazo = parseInt(document.getElementById("mortgageYears").value);

  if (!isNaN(precio) && !isNaN(enganche) && !isNaN(interes) && !isNaN(plazo)) {
    const engancheMonto = precio * (enganche / 100);
    const montoPrestamo = precio - engancheMonto;
    const tasaMensual = interes / 100 / 12;
    const nPagos = plazo * 12;
    const cuota = (montoPrestamo * tasaMensual) / (1 - Math.pow(1 + tasaMensual, -nPagos));
    document.getElementById("mortgageResults").textContent = `Cuota mensual estimada: $${cuota.toFixed(2)}`;
  } else {
    document.getElementById("mortgageResults").textContent = "Por favor completa todos los campos.";
  }
});


// Calculadora de Ahorro
document.getElementById("btnAhoCalc").addEventListener("click", () => {
  const inicial = parseFloat(document.getElementById("initialDeposit").value);
  const mensual = parseFloat(document.getElementById("monthlySaving").value);
  const interes = parseFloat(document.getElementById("savingsRate").value);
  const años = parseInt(document.getElementById("savingsYears").value);

  if (!isNaN(inicial) && !isNaN(mensual) && !isNaN(interes) && !isNaN(años)) {
    const tasa = interes / 100 / 12;
    let total = inicial;
    for (let i = 0; i < años * 12; i++) {
      total += mensual;
      total *= (1 + tasa);
    }
    document.getElementById("savingsResults").textContent = `Ahorro estimado: $${total.toFixed(2)}`;
  } else {
    document.getElementById("savingsResults").textContent = "Por favor completa todos los campos.";
  }
});

