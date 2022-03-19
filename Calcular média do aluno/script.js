//declarando as constantes que iremos usar no código
const campo1 = document.querySelector("#nota1");
const campo2 = document.querySelector("#nota2");
const campo3 = document.querySelector("#nota3");
const campo4 = document.querySelector("#nota4");
const retornoFuncao = document.querySelector("#retorno_funcao");
const resultadoMedia = document.querySelector("#resultado_media");
const situacaoAluno = document.querySelector("#situacao_aluno");

//verificar cada um dos campos, para ver se eles não estão sem nada, antes de fazer o cálculo
function calcularMedia() {
    if (campo1.value == '') {
        //SE O VALUE DO CAMPO1 FOR STRING VAZIA ("")
        retornoFuncao.innerHTML = "Não foi inserido nenhum valor na nota 1, por isso não foi possível fazer a conta!";
        campo1.focus();
    } else {
        // se value do campo1 tiver alguma coisa
        if (campo2.value == '') {
            retornoFuncao.innerHTML = "não foi inserido valor da nota 2, por isso não foi possível calcular";
            campo2.focus();

        } else {
            // se o value do campo 2 estiver alguma coisa//
            if (campo3.value == '') {
                // se o value do campo 3 for string vazia('')
                retornoFuncao.innerHTML = "não foi inserido valor no campo nota3, por isso não possível fazer conta"
                campo3.focus();
            } else {

                if (campo4.value == '') {
                    // se o value do campo 4 for string vazia('')
                    retornoFuncao.innerHTML = "não foi inserido valor no campo nota4, por isso não possível fazer conta"
                    campo4.focus();
                } else {

                    // se todos os inputs estiveem preenchidos
                    retornoFuncao.innerHTML = "";
                    let valor1 = Number(campo1.value);
                    let valor2 = Number(campo2.value);
                    let valor3 = Number(campo3.value);
                    let valor4 = Number(campo4.value);


                    let media = (valor1 + valor2 + valor3 + valor4) / 4;
                    resultadoMedia.innerHTML = `o resultado da media das notas é de ${media.toFixed(2)}`

                    classificarAluno(media);
                }
            }
        }

    }

}
function classificarAluno(notaMedia) {
    // se a nota for > ou = a 6 , aprovado//
    // se nota for entre 3 e 6, recuperacao//
    // se nota < = 3, reprovado//
    if (notaMedia >= 6) {
        situacaoAluno.innerHTML = "o aluno foi aprovado";
    }
    else if (notaMedia < 6 && notaMedia > 3) {
        situacaoAluno.innerHTML = "o aluno esta de recuperacao";
    }
    else {
        situacaoAluno.innerHTML = "o aluno foi reprovado";
    }



}

//para começar o primeiro pensamento que devemos ter sempre é:
//  o que vamos fazer? onde queremos chegar? qual o resultado final?

//o segundo pensamento é:
//  como eu chego no meu resultado? através do que?
//  (pensar nas ferramentas que conhece para alcançar o resultado final)