function somar(event) {
    event.preventDefault()
    let valor1 = document.getElementById("numero1").value
    // A variável valor1 tem algum valor dentro dela?
    if (!valor1) {
        valor1 = "0"
    }
    let valor2 = document.getElementById("numero2").value
    if (!valor2) {
        valor2 = "0"
    }

    // parseInt converte texto/string para número
    let numero1 = parseInt(valor1)
    let numero2 = parseInt(valor2)

    let resultado = numero1 + numero2
    document.getElementById("resultado").innerText = `Resultado: ${resultado}`
}