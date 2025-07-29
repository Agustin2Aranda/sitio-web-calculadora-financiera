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
  const tasa = parseFloat(document.getElementById("loanRate").value) / 100 / 12;
  const plazo = parseInt(document.getElementById("loanYears").value);

  if (!isNaN(monto) && !isNaN(tasa) && !isNaN(plazo)) {
    const total = (monto * tasa * Math.pow(1 + tasa, plazo)) / (Math.pow(1 + tasa, plazo) - 1);
    const cuota = total * plazo;
    const interes = cuota - monto;

    document.getElementById("totalPayment").textContent = `$ ${cuota.toFixed(0)}`;
    document.getElementById("monthlyPayment").textContent = `$ ${total.toLocaleString()}`;
    document.getElementById("totalInterest").textContent = `$ ${interes.toFixed(0)}`;

    document.getElementById("loanResults").classList.remove("hidden");
  }
});

// Calculadora de Inversión
document.getElementById("btnInvCalc").addEventListener("click", () => {
  const inicial = parseFloat(document.getElementById("initialInvestment").value) || 0;
  const mensual = parseFloat(document.getElementById("monthlyContribution").value) || 0;
  const rendimiento = parseFloat(document.getElementById("investmentRate").value) / 100 / 12;
  const años = parseInt(document.getElementById("investmentYears").value);

  if (!isNaN(inicial) && !isNaN(mensual) && !isNaN(rendimiento) && !isNaN(años)) {
    const meses = años * 12;
    const valorInicialFuturo = inicial * Math.pow(1 + rendimiento, meses);
    const valorAnualidad = mensual * (Math.pow(1 + rendimiento, meses) - 1) / rendimiento;
    const valorFinal = valorInicialFuturo + valorAnualidad;
    const totalInvertido = inicial + (mensual * meses);
    const ganancia = valorFinal - totalInvertido;

    document.getElementById("finalValue").textContent = `$ ${valorFinal.toFixed(0)}`;
    document.getElementById("totalInvested").textContent = `$ ${totalInvertido.toFixed(0)}`;
    document.getElementById("totalGains").textContent = `$ ${ganancia.toFixed(0)}`;

    document.getElementById("investmentResults").classList.remove("hidden");
  }
});

// Calculadora de Hipoteca
document.getElementById("btnHipCalc").addEventListener("click", () => {
  const precio = parseFloat(document.getElementById("homePrice").value);
  const enganche = parseFloat(document.getElementById("downPayment").value) / 100;
  const tasaInteres = parseFloat(document.getElementById("mortgageRate").value) / 100 / 12;
  const plazo = parseInt(document.getElementById("mortgageYears").value);

  if (!isNaN(precio) && !isNaN(enganche) && !isNaN(tasaInteres) && !isNaN(plazo)) {
    const montoEnganche = precio * enganche;
    const montoPrestamo = precio - montoEnganche;
    const meses = plazo * 12;
    const pagoMensual = (montoPrestamo * tasaInteres * Math.pow(1 + tasaInteres, meses)) / (Math.pow(1 + tasaInteres, meses) - 1);

    document.getElementById("mortgagePayment").textContent = `$ ${pagoMensual.toFixed(0)}`;
    document.getElementById("downPaymentAmount").textContent = `$ ${montoEnganche.toLocaleString()}`;
    document.getElementById("loanAmountMortgage").textContent = `$ ${montoPrestamo.toFixed(0)}`;

    document.getElementById("mortgageResults").classList.remove("hidden");
  }
});


// Calculadora de Ahorro
document.getElementById("btnAhoCalc").addEventListener("click", () => {
  const deposito  = parseFloat(document.getElementById("initialDeposit").value) || 0;
  const mensual = parseFloat(document.getElementById("monthlySaving").value) || 0;
  const tasa = parseFloat(document.getElementById("savingsRate").value) / 100 / 12;
  const tiempo  = parseInt(document.getElementById("savingsYears").value);

  if (!isNaN(deposito) && !isNaN(mensual) && !isNaN(tasa) && !isNaN(tiempo)) {
    const meses = tiempo * 12;
    const valorInicial = deposito * Math.pow(1 + tasa, meses);
    const valorAnual = mensual * (Math.pow(1 + tasa, meses) - 1) / tasa;
    const totalAhorrado = valorInicial + valorAnual;
    const totalDepositado = deposito + (mensual * meses);
    const interes = totalAhorrado - totalDepositado;

    document.getElementById("totalSavings").textContent = `$ ${totalAhorrado.toFixed(0)}`;
    document.getElementById("totalDeposited").textContent = `$ ${totalDepositado.toLocaleString()}`;
    document.getElementById("interestEarned").textContent = `$ ${interes.toFixed(0)}`;

    document.getElementById("mortgageResults").classList.remove("hidden");
  }
});