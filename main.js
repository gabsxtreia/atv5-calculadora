function darklightMode() {
    var element = document.body;
    element.classList.toggle("darklightmode");
}
const operacoesbasicas = ()=> {
    let numero1 = document.getElementById("numero1").value
    let numero2 = document.getElementById("numero2").value
    let operacao = document.getElementById("operacao").value
    let calculando = eval(numero1 + operacao + numero2)
    resultado.innerHTML = calculando
}
let calcular = document.getElementById('calcular');
let resultado = document.getElementById('resultado');
calcular.addEventListener('click', operacoesbasicas)