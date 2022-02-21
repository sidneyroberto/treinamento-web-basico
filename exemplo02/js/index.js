// Cria um alias para document.querySelector
const $ = document.querySelector.bind(document)

// Arrow function
const changeSignal = () => {
  const isSumChecked = $('#sum').checked
  const isSubtractionChecked = $('#subtraction').checked
  const isMultiplicationChecked = $('#multiplication').checked

  let operatorSignal = '/'
  if (isSumChecked) {
    operatorSignal = '+'
  } else if (isSubtractionChecked) {
    operatorSignal = '-'
  } else if (isMultiplicationChecked) {
    operatorSignal = '*'
  }

  $('#operator-signal').innerText = operatorSignal

  // Invoca a função calculate()
  calculate()
}

const calculate = () => {
  let value1 = $('#number1').value
  let value2 = $('#number2').value

  // Utiliza o operador ternário para atribuir o valor correto às variáveis
  value1 = !value1 ? '0' : value1
  value2 = !value2 ? '0' : value2

  const number1 = parseFloat(value1)
  const number2 = parseFloat(value2)

  const isSumChecked = $('#sum').checked
  const isSubtractionChecked = $('#subtraction').checked
  const isMultiplicationChecked = $('#multiplication').checked
  let result = 0

  if (isSumChecked) {
    result = number1 + number2
  } else if (isSubtractionChecked) {
    result = number1 - number2
  } else if (isMultiplicationChecked) {
    result = number1 * number2
  } else if (number2 !== 0) {
    result = number1 / number2
  } else {
    result = 'Não pode dividir por zero'
  }

  $('#result').innerText = result
}