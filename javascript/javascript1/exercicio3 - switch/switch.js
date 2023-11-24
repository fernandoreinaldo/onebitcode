//Escreva um programa em javascript que funcione como um conversor de medidas. O programa deverá pedir por um valor em metros e então dar a opção de escolher para qual unidade de medida esse valor deve ser convertido. As opções são:

//milímetro (mm)
//centímetro (cm)
//decímetro (dm)
//decâmetro (dam)
//hectômetro (hm)
//quilômetro (km)

//O programa deve então converter a medida de acordo com a opção escolhida e exibir o resultado.

//O programa também deve exibir uma mensagem de “Opção inválida” caso o usuário insira uma opção diferente das disponíveis (use o break e o default para isso)

let medida = parseFloat(prompt("Digite o valor em metros: "));
const unidade = prompt("mm / cm / dm / dam / hm / km");

switch (unidade) {
    case "mm":
        medida = medida * 1000
        alert(medida)
        break
    case "cm":
        medida = medida * 100
        alert(medida)
        break
    case "dm":
        medida = medida * 10
        alert(medida)
        break
    case "dam":
        medida = medida / 10
        alert(medida)
        break
    case "hm":
        medida = medida / 100
        alert(medida)
        break
    case "km":
        medida = medida / 1000
        alert(medida)
        break
    default:
        alert("Finalizando")
}