// Escreva um programa que permita inserir o nome e o poder de ataque de um personagem, depois o nome, a quantidade de pontos de vida, o poder de defesa de outro personagem e se ele possui um escudo, e então calcule a quantidade de dano causado baseado nas seguintes regras:
// Se o poder de ataque for maior do que a defesa e o defensor não possuir um escudo, o dano causado será igual a diferença entre o ataque e a defesa.
// Se o poder de ataque for maior do que a defesa e o defensor possuir um escudo, o dano causado será igual a metade da diferença entre o ataque e a defesa.
// Se o poder de ataque for menor ou igual a defesa, o dano causado será 0.
// Por fim, o programa deve subtrair a quantidade de dano da quantidade de pontos de vida do personagem defensor e exibir na tela a quantidade de dano e as informações atualizadas de ambos os personagens.

const name1 = prompt ("Digite o nome do personagem de ataque: ")
const power = parseFloat(prompt("Digite o poder de ataque do personagem de ataque: "))

const name2 = prompt("Digite o nome do personagem de defesa: ")
let life = parseFloat(prompt("Digite a quantidade de pontos de vida do personagem de defesa: "))
const defense = parseFloat(prompt("Digite a quantidade do poder de defesa do personagem de defesa: "))
const shield = prompt("O personagem de defesa possui escudo? (S/N)")

let dano = 0

if (power > defense && shield === "N") {
    dano = power - defense
} else if (power > defense && shield === "S") {
    dano = (power - defense) / 2
}

life -= dano

alert(name1 + " causou " + dano + " pontos de dano em " + name2)
alert(
    name1 + "\n Poder de ataque: " + power + "\n\n" + 
    name2 + "\n Pontos de vida: " + life + 
    "\nPoder de defesa: " + defense + "\nPossui escudo: " + shield
)