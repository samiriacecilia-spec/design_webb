var nasc = 2009;
let nome = "Samiria";
const viva = true;

function calcIdade(ano=2026){
    let idade = ano -nasc;
    alert(`Dentro de funcao - Idade ${idade}`);
    return idade;
}

calcIdade();
/*
alert(`Fora da funcao : Idade ${idade}`;
Erro pois a variavel let nao existe fora do escopo dela
*/
alert(`Fora da funcao : chamando calcIdade ${calcIdade(2027)}`);
