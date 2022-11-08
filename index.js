let n1 = 5;
let n2 = 11;

let cond = "";
let maior_menor = "";
let maior_menor2 = "";

let soma = n1 + n2;

if((n1) == (n2)){
    cond = ""
}else {cond = "não"}

if((soma) > 10){
    maior_menor = "maior"
} else { maior_menor = "menor"}

if((soma) > 20){
    maior_menor2 = "maior"
} else { maior_menor2 = "menor"}

console.log(`Os números ${n1} e ${n2} ${cond} são iguais.
Sua soma é ${(soma)}, que é ${maior_menor} que 10 e ${maior_menor2} que
20.`)