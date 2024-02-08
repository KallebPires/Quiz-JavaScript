const perguntas = [
    {
       pergunta: "O que é JavaScript?",
       respostas: [
        "Uma linguagem de marcação",
        "Uma linguagem de programação",
        "Um banco de dados",
       ],
       correta: 1
    },
    {
       pergunta: "Qual palavra-chave é usada para declarar uma variável em JavaScript?",
       respostas: [
        "var",
        "let",
        "const",
       ],
       correta: 1
    },
    {
       pergunta: "Qual é a função do método 'console.log()' em JavaScript?",
       respostas: [
        "Imprimir no console do navegador",
        "Iniciar uma animação",
        "Criar um alerta",
       ],
       correta: 0
    },
    {
       pergunta: "Como se refere a um bloco de código condicional em JavaScript?",
       respostas: [
        "If/Else",
        "Switch/Case",
        "Loop/While",
       ],
       correta: 0
    },
    {
       pergunta: "O que é um array em JavaScript?",
       respostas: [
        "Um tipo de dado booleano",
        "Uma estrutura de controle de fluxo",
        "Uma coleção de elementos indexados",
       ],
       correta: 2
    },
    {
       pergunta: "Qual é a sintaxe correta para um loop 'for' em JavaScript?",
       respostas: [
        "for (i = 0; i < 5; i++)",
        "loop (i = 0; i < 5; i++)",
        "while (i < 5; i++)",
       ],
       correta: 0
    },
    {
       pergunta: "O que significa a sigla 'DOM' em JavaScript?",
       respostas: [
        "Data Object Model",
        "Document Object Model",
        "Dynamic Output Mechanism",
       ],
       correta: 0
    },
    {
       pergunta: "Como se faz uma função anônima em JavaScript?",
       respostas: [
        "function minhaFuncao()",
        "() => {}",
        "anonymous function()",
       ],
       correta: 1
    },
    {
       pergunta: "Qual é a função do operador '===' em JavaScript?",
       respostas: [
        "Atribuição",
        "Comparação estrita",
        "Concatenação",
       ],
       correta: 1
    },
    {
       pergunta: "Como se chama a estrutura de dados que armazena pares chave-valor em JavaScript?",
       respostas: [
        "Array",
        "Object",
        "String",
       ],
       correta: 1
    },
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

// loop ou laço de repetição
for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta

    for (let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
        dt.querySelector('input').onchange = (event) => {
            // Correção na comparação
            const estaCorreta = parseInt(event.target.value, 10) === item.correta

            if (estaCorreta) {
                corretas.add(item)
            } else {
                corretas.delete(item)
            }
            mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        }
        quizItem.querySelector('dl').appendChild(dt)
    }

    // Correção na remoção do primeiro item da lista de respostas
    quizItem.querySelector('dl dt:first-child').remove()
    
    // Adicionando o item clonado ao quiz
    quiz.appendChild(quizItem)
   }