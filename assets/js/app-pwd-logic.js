const data = document.querySelector('.app-pwd__datetime');
const bemVindo = document.querySelector('.app-pwd__welcome');
const slider = document.querySelector('.app-pwd__slider');
const contSenhaGerada = document.querySelector('.app-pwd__result');
const senha = document.querySelector('.app-pwd__output');
const tamanhoSenha = document.querySelector('.app-pwd__size');
const botaoLimpar = document.querySelector('.app-pwd__button--clear');
const botaoGerar = document.querySelector('.app-pwd__button');


// objetos que vao guardar as opções de caracteres
const char = {
    lowercase: 'abcdefghijklmnopqrstuvwxyz', //letras minusculas
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', //letras maiusculas
    numbers: '0123456789', //numeros
    specials: '!@#$%&*' //caracteres especiais
}

//variaveis aue vao guardar a nova sneha e o historico de sneha
let novaSenha = ''; //let que vai mostrra a senha gerada agora
let historicoSenha = []; //array que vai guardar as ultimas snehas cridas


const saudacao = () => {
    hours = new Date().getHours(); //vai atualizando as horas

        if(hours < 12) return 'Bom dia'
        if (hours < 18) return 'Boa tarde'
        else return 'Boa noite'

};

const dataHora = () =>{
    const agora = new Date(); //data do dia de hoje

    const diasSemana = ['Domingo', 
        'Segunda-feira', 
        'Terça-feira', 
        'Quarta-feira', 
        'Quinta-feira', 
        'Sexta-feira', 
        'Sabado'];
    
    // data
    const dia = agora.getDate().toString().padStart(2, '0'); //pega o dia da semana de hoje, se for ate 9, ele poe um 0 na frente co o padstart
    const mes = (agora.getMonth() + 1).toString().padStart(2, '0' ) //pegou o mes, somou mais um pq ele conta desde o 0
    const ano = agora.getFullYear();

    // hora
    const hora = agora.getHours().toString().padStart(2, '0');
    const minuto = agora.getMinutes().toString().padStart(2, '0');
    const segundos = agora.getSeconds().toString().padStart(2, '0');

    return ` ${diasSemana}, ${dia}/${mes}/${ano}  ${hora}:${minuto}:${segundos}`;
    

};

const atualizarHeader = () => {
    bemVindo.textContent = `${saudacao()}!`;
    data.textContent = dataHora();
};

const gerarSenha = () =>{
    let selecionarCaracteres = ''; //string que vai pegar todos os caracteres

    //obtendo os checkbox selecionados
    const maiusculasChecked = document.querySelector('.uppercase-check').checked;
    const minusculasChecked = document.querySelector('.lowercase-check').checked;
    const numbersChecked = document.querySelector('.number-check').checked;
    const especiaisChecked = document.querySelector('.special-check').checked;

    //construir os caracteres baseado na op selecionada
    if (maiusculasChecked) selecionarCaracteres += charsets.uppercase;
    if (minusculasChecked) selecionarCaracteres += charsets.lowercase;
    if (numbersChecked) selecionarCaracteres += charsets.numbers;
    if (especiaisChecked) selecionarCaracteres += charsets.special;

    //se nenhuma opção estiver selecionada pega todAS
    if (!selecionarCaracteres) {
        selecionarCaracteres = Object.values(charsets).join('');
        console.log(selecionarCaracteres);
        document.querySelector('.uppercase-check').checked = true;
        document.querySelector('.lowercase-check').checked = true;
        document.querySelector('.numbers-check').checked = true;
        document.querySelector('.special-check').checked = true;

    }

    //inicia uma string vazia para armazenar a senha
    let pass= '';

        /* Loop que itera pelo número de caracteres definido no slider
    Usa o operador de incremento (++) para aumentar o contador */
    for(let i = 0; i < slider.value; ++i){
  
    /* Adiciona um caractere aleatório à senha:
    1. Math.random() gera um número decimal entre 0 e 1
    2. Multiplicado pelo comprimento do charset para obter um índice válido
    3. Math.floor() arredonda para baixo para obter um índice inteiro
    4. charAt() retorna o caractere na posição do índice calculado */
    
    pass +=  selecionarCaracteres.charAt(Math.floor(Math.random() * selecionarCaracteres.length));

    //remove o hide para exibir no container da senha
    senha.classList.remove('hide');

    senha.textContent = pass;

    contSenhaGerada = pass;

    historicoSenha.unshift(pass);

    if(historicoSenha.length > 3) {
        historicoSenha.pop();
    }

    const historico = document.querySelector('.app-pwd__history');
    if(historico) {

        historico.computedStyleMap.display = 'block';

        historico.querySelector('.app-pwd__history-list').innerHTML = historicoSenha
        .map(senhaa => `<li class="app=pwd-item">${senhaa}</li>`)
        .join('');
       0 
    }


};
// function exibirData(){
//     data = new Date().getFullYear();

//     if 
// }