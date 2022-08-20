<h1>Javascript Assíncrono e Promises</h1>

## <h2>Sistema Síncrono</h2>
<p>Um sistema síncrono (synchronous) é uma tarefa que é concluída após a outra.</p>

    Ex: Uma imagem só carrega depois que a anterior termina de carregar. Ou seja, no sistema síncrono a tarefa anterior precisa ser concluída, para então iniciar a próxima.

    Por padrão, o JavaScript é um sistema síncrono

## <h2>Sistema Assíncrono</h2>
<p>Num sistema assíncrono (asynchronous) as tarefas são executadas de maneira independente uma da outra.</p>

    Ex: As imagens são carregadas de maneira independente, não é necessário esperar a primeira imagem carregar para iniciar o carregamento da próxima.

    O JavaScript poderá usar o assincronismo ao seu favor

## <h2>Callback Conceito</h2>
<p>Antes de entender o conceito de Callback no JavaScript, primeiro precisamos entender que funções aceitam qualquer tipo de dado como argumento, então no JavaScript é possível passar qualquer tipo de dado em uma função.</p>

    function imprimirDado(dado) {
        console.log(dado)
    }

    imprimirDado(1) 
    imprimirDado('texto') 
    imprimirDado(true)
    imprimirDado({ nome: 'João' })
    imprimirDado([1, 2, 3])

    function imprimirDado(dado) {
        console.log('outras tarefas')
        console.log(dado())
    }

    imprimirDado(function () {
        return 'Olá Mundo'
    })

<p>Callback (chamar de volta) é uma função que é passada como argumento de outra função e depois de algum tempo ela é chamada de volta.</p>

## <h2>setTimeout</h2>
<p><b>setTimeout()</b> é uma função que recebe como argumento uma outra função e um tempo para ser executada.</p>

    // setTimeout(function, delay)
    setTimeout(function () {
        console.log('depois de 1s')
    }, 1000)

<p> A função de argumento do setTimeout é uma callback, ela vai executar depois de um certo tempo. No caso do exemplo acima, a função vai ser executada depois de 1000ms que é o mesmo que 1s. </p>

## <h2>Conectando API com HTTPS e Callback</h2>
<p>Nesta aula vamos verificar se estamos entendendo como que funciona o callback e o assincronismo no JavaScript.</p>

    const https = require('http')
        const API = 'https://jsonplaceholder.typicode.com/users?_limit=2'

    https.get(API, res => {
        console.log(res.statusCode)
    })

    console.log('conectando API')

## <h2>Promise</h2>
<h3>O que é uma Promise?</h3>

-   É um objeto JavaScript com a promessa de que algo será realizado
-   É usado para operações assíncronas
-   Não bloqueia outras operações
-   Essa promessa não significa que vai dar certo ou que vai dar errado.

<p>Exemplo:</p>

    Carregar um arquivo
    Leitura de dados de uma API

<p>Uma promessa poderá ser:</p>

    Pending: Estado inicial, assim que o objeto da promessa é iniciado
    Fulfilled: A promessa foi concluída com sucesso
    Rejected: A promessa foi rejeitada, houve um erro
    Settled: Seja com sucesso ou erro, ela foi finalmente concluída

## <h2>Promises no Código</h2>
<p>Nesta aula vamos ver na prática quais são os detalhes de uma Promise no javaScript</p>

    // Promessa retorna com sucesso
    console.log('pedir uber') 
    const promessa = new Promise((resolve, reject) => {
        return resolve('carro chegou')
    })

    console.log('aguardando')

    promessa.then(result => console.log(result))

    // Promessa é rejeitada e usamos o catch() para capturar o erro
    console.log('pedir uber') 
    const promessa = new Promise((resolve, reject) => {
        return reject('pedido negado!')
    })

    console.log('aguardando')

    promessa
        .then(result => console.log(result)) // .then retornará o valor true
        .catch(erro => console.log(erro)) // .catch captura o erro e retornar o valor false

    -------------------------------------------------------------------------

    let aceitar = true

    console.log('pedir uber') 
    const promessa = new Promise((resolve, reject) => {
        if (aceitar) {
            return resolve('pedido aceito!')
        }

        return reject('pedido negado!')
    })

    console.log('aguardando')

    promessa
        .then(result => console.log(result)) // Retorna true
        .catch(erro => console.log(erro)) // Retorna false
        .finally(() => console.log('finalizada')) // Finaliza

## <h2>Promises com Fetch</h2>
<p><b>fetch("...")</b> É uma função que recebe como primeiro argumento a URL que deseja pegar (fetch) informações de uma API.</p>

    Exemplo 1: (pegando repositório github = repos_url)

    fetch('url...')
    .then( response => { //response pode ser qualquer nome
        response.json() //transforma os dados da url (api) em formato .json
        .then( data => {
            fetch(data.repos_url)
            .then( res => res.json().then(d => console.log(d)))
        })
    })

    -------------------------------------------------------------------------------

    Exemplo correto: (pegando repositório github com promises = repos_url)

    fetch('url...')
    .then(response => response.json()) //transforma os dados da url (api) em formato .json
    .then(data => fetch(data.repos_url)) //Importando dado com "fatch(data.dado_da_api)" para pegar determinado dado de dentro da API
    .then(res => res.json()) //Criar um novo then para converter a informação de repos_url em JSON
    .then(d => console.log(d)) // Retornando dados da repos_url
    .catch( err => console.log(err)) //Caso houver erro em alguma parte co código o catch é acionado

## <h2>Async / Await</h2>
<p>Exemplo:</p>
<p>Await serve para devolver a resposta da promises</p>

    const promessa = new Promisse( function( resolve, reject) {
        return reject('error')
    })

    async function start() {
        try {
            const result = await promessa // await = espera
            console.log(result)
        } catch( e ) {
            console.log(e)
        } finally {
            console.log('rodar sempre)
        }
    }

    start()

## <h2>Async / Await com Fetch</h2>
<p>Exemplos corretos que voltam a mesma resposta:</p>

    async function start() {
        try {
            const response = await fetch('https://api.url.com')
            const user = await response.json()
            const reposResponse = await fetch(user.repos_url) 
            const repos = await reposResponse.json()
            console.log(repos)
        } catch (e) {
            console.log(e)
        }
    } 

    start()

    --------------------------------------------------------
    async function start() {
        const response = await fetch('https://api.url.com')
        const user = await response.json()
        const reposResponse = await fetch(user.repos_url) 
        const repos = await reposResponse.json()
        console.log(repos)
    } 

    start().catch (e => console.log(e)}

    -----------------------------------------------------------
    async function start() {
        const url = "https://api.url.com"
        const user = await fetch(url).then( r => r.json())
        const userRepos = await fecth(user.repos_url).then(r => r.json());
        console.log(userRepos)
    } 

    start().catch (e => console.log(e)}