const temIngresso: boolean = true
const idade: number = 15
const censura: number = 16
const estaAcompanhado: boolean = true

//&& = Operador lógico AND
//Ele testa se todas as condições e todas precisam ser verdadeiras

//OR = Operador lógico --> ||
//Testa se pelo menos uma condição é verdadeira


// if (temIngresso) {
//    if (idade >= censura || estaAcompanhado) {
//     console.log('Pode entrar')
//    } else {
//     console.log('Barrado')
//    }
// } else {
//     console.log('Barrado')
// }


if (temIngresso && (idade >= censura || estaAcompanhado)) {
     console.log('Pode entrar')
    } else {
     console.log('Barrado')
}