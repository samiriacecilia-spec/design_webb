let nasc = prompt("Digite seu ano e nascimento:");
nasc = parseInt(nasc);

let viva = confirm("Se voce esta viva, clique em ok.");

if (viva){
    alert(`Voce tem ${2026-nasc} anos.`);
}else{
    alert("Voce morreu.");
}