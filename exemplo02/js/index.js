/**
 * Cria um alias para document.querySelector
 */
const $ = document.querySelector.bind(document)

/**
 * Arrow Function
 */
const calculate = () => {
  let value1 = $('#number1').value
  let value2 = $('#number2').value
  value1 = !value1 ? '0' : value1
  value2 = !value2 ? '0' : value2
  const number1 = parseFloat(value1)
  const number2 = parseFloat(value2)

  let result = 0
  const isSumChecked = $('#sum').checked
  const isSubtractionChecked = $('#subtraction').checked
  const isMultiplicationChecked = $('#multiplication').checked

  if (isSumChecked) {
    result = number1 + number2
  } else if (isSubtractionChecked) {
    result = number1 - number2
  } else if (isMultiplicationChecked) {
    result = number1 * number2
  } else if (number2 > 0) {
    result = number1 / number2
  }

  $('#result').innerText = result
}

const changeSignal = () => {
  const isSumChecked = $('#sum').checked
  const isSubtractionChecked = $('#subtraction').checked
  const isMultiplicationChecked = $('#multiplication').checked

  let operatorSignal = $('#division').value
  if (isSumChecked) {
    operatorSignal = $('#sum').value
  } else if (isSubtractionChecked) {
    operatorSignal = $('#subtraction').value
  } else if (isMultiplicationChecked) {
    operatorSignal = $('#multiplication').value
  }

  $('#operator-signal').innerText = operatorSignal
  calculate()
}