var nasc = 2009;
let nome = "Samiria";
const viva = true;

function calcIdade(ano=2026){
    let idade = ano -nasc;
    let menor;
    if (idade < 18){
         menor = true;
        var podebeber = false;
    }else{
         menor = false;
         var podebeber = true;
    }
        alert(`${nome} é menor de idade? ${menor}\nIdade: ${idade}\nPode beber:${podebeber}`)
    return idade;
}

calcIdade();
/* var 'vaza' a variável dentro do escopo da mesma função
alert(`Pode beber; ${podebeber}`);
/*
alert(`Fora da funcao : Idade ${idade}`;
Erro pois a variavel let nao existe fora do escopo dela
*/
alert(`Fora da funcao : chamando calcIdade ${calcIdade(2027)}`);
