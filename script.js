const form = document.getElementById("form");
form.addEventListener("submit", handleSubmit);

const inputValue = document.getElementById("value-real");
const selectedCurrency = document.getElementById("currency");
const result = document.getElementById("result");
let valueConverted = 0;

function handleSubmit(e) {
  e.preventDefault();

  if (!inputValue.value || inputValue.value < 0) {
    alert("Informe um valor correto!");
    return;
  } else if (!selectedCurrency.value) {
    alert("Escolha uma moeda!");
    return;
  }

  converter();
}
function converter() {
  if (selectedCurrency.value === "eur") {
    valueConverted = inputValue.value * 5.5; // Inverter a fórmula para converter 1 euro em real
    result.innerHTML = valueFormatter("pt-BR", "BRL"); // Alterar a moeda de exibição para real (BRL)
    animateResult();
  } else if (selectedCurrency.value === "dol") {
    valueConverted = inputValue.value * 5.1; // Inverter a fórmula para converter 1 dólar em real
    result.innerHTML = valueFormatter("pt-BR", "BRL"); // Alterar a moeda de exibição para real (BRL)
  } else if (selectedCurrency.value === "lib") {
    valueConverted = inputValue.value * 6.8; // Inverter a fórmula para converter 1 libra em real
    result.innerHTML = valueFormatter("pt-BR", "BRL"); // Alterar a moeda de exibição para real (BRL)
  } else if (selectedCurrency.value === "jpy") {
    valueConverted = inputValue.value * 0.047; // Inverter a fórmula para converter 1 iene em real
    result.innerHTML = valueFormatter("pt-BR", "BRL"); // Alterar a moeda de exibição para real (BRL)
  } 

  inputValue.value = "";
  selectedCurrency.value = "";
}

function valueFormatter(locale, currency) {
  const value = valueConverted.toLocaleString(`${locale}`, {
    style: "currency",
    currency: `${currency}`,
  });
  return `<span>🤑</span> ${value} <span>🤑</span>`;
}

function animateResult() {
  return result.animate(
    [{ transform: "translateY(-150px)" }, { transform: "translateY(0px)" }],
    { duration: 500 }
  );
}
