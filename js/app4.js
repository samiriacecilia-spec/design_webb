let nasc= prompt("Digite seun ano nascimento:")
nasc = parseInt(nasc)

let fds = ("Se hoje for final de semana, clique ok")
let idade = 2026 - nasc

alert(`Voce é maior de idade: ${idade >= 18}`)
alert(`Hoje é final de samana: ${fds}`)

if(idade >= 18 && fds){
    alert("Voce pode beber")
}else{
    alert("Voce nao pode beber")
}