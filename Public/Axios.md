<h1>AXIOS</h1>
<p>Para utilizar Axios para fazer requisição de API é necessário sua instalação.</p>

- Install Axios: `npm install axios`
- Axios site: `https://axios-http.com/ptbr/docs/intro`

## <h2>Axios API</h2>
<p>Requisições podem ser feitas passando as configuraçãos relevantes para o axios.</p>

    import axios from 'axios';

    // Envia uma requisição post
    axios({
    method: "post",
    url: "/user/12345",
    data: {
        firstName: "Fred",
        lastName: "Flintstone",
    },
    });

    -------------------------------------------
    
        // Requisição GET para imagem remota em node.js
    axios({
        method: "get",
        url: "http://bit.ly/2mTM3nY",
        responseType: "stream",
    }).then(function (response) {
        response.data.pipe(fs.createWriteStream("ada_lovelace.jpg"));
    });

## <h2>Promises com axios</h2>
<p>Exemplo de como utilizar Axios no projeto com promises.</p>

    import axios from 'axios' // Necessário sua importação após instalar

    axios.get('https://api.url.com')
    .then(response => {
        const user = response.data

        return axios.get(user.repos_url)
    })
    .then(repos => repos.data)
    .catch( error => console.log(error))

    ----------------------------------------------
    // Forma 2 com o mesmo objetivo da de cima

    axios.get('https://api.url.com')
    .then(response => axios.get(response.data.repos_url))
    .then(repos => repos.data)
    .catch( error => console.log(error))


## <h2>Executando Promessas em Paralelo com Promise all</h2>

    import axios from 'axios' 

    Promise.all([
        axios.get('https://api.url1.com/users/lucashylario'),
        axios.get('https://api.url2.com/users/lucashylario/repos'),
    ])
    .then( responses => {
        console.log(responses[0].data.login) // (responses[0].data.login) = Retorna o "login" a api da primeira API que é igual a posição zero ([0])
        console.log(responses[1].data.length) // (responses[1].data.length) = Retorna o tamanho (length) da segunda API (url) que é igual a posição Um ([1])
    })
    .catch( err => console.log(err.message))

## <h2></h2>
<p></p>

