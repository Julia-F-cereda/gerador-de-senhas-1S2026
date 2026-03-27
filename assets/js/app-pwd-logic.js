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

// function exibirData(){
//     data = new Date().getFullYear();

//     if 
// };