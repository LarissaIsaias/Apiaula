// Escreva uma função JavaScript que receba uma string e verifica se é um palíndromo (deve retornar true se for um palíndromo e false se não for).
function palindromo(string){
    let frase = string
    frase = frase.split(' ').join('')
    frase = frase.split(',').join('')
    frase = frase.toLowerCase()
    let reverseString = frase.split('').reverse().join('')
    if(frase === reverseString){
       return true
    }else{
        return false
    }
}

module.exports = palindromo;

console.log(palindromo('socorram me subi no onibus em marrocos'))
console.log(palindromo('arara'))
console.log(palindromo('pedro'))
console.log(palindromo('aibofobia'))
console.log(palindromo('larissa'))
//split recebe uma string e divide em uma lista, fazendo com que cada caractere vire uma posição na lista, são substrings.