<h1>Sobre TypeScript</h1>

## <h2>O que é o TypeScript?</h2>
<p>
    O TypeScript foi criado pela Microsoft para trazer um superset de tipagens para o JavaScript.
</p>
<p>
    <b>A diferença entre o JavaScript e TypeScript é a sua tipagem que no JS não é obrigatório<b>, já no TS é obrigatório, mas nem pra todos os casos. Algumas vantagens de utilizar o TS é que a sua adoção pode ocorrer de forma gradual em um projeto JavaScript.
</p>

## <h2>Porquê utilizar TypeScript?</h2>
<p>
    A maior vantagem de usar o TypeScript além de aumentar a nossa produtividade no dia a dia é ele reconhecer os erros durante o desenvolvimento, diferente do JavaScript que reconhecerá apenas quando o projeto é executado.
</p>

## <h2>Any</h2>
<p>
    Ao declarar uma variável no TypeScript o seu tipo por padrão será any. Mas devemos tomar um certo cuidado com essa tipagem que ela pode ser perigosa ao decorrer do nosso projeto, não é muito recomendada a sua utilização.
</p>

- Exemplo:
- `let info: any;`

- `info = [123];`
- `info = 'João';`
- `info = true;`
- `info = 10.50;`
- // Com o tipo any a variável aceitará qualquer valor.

## <h2>Tipos primitivos</h2>
<p>Esses são os tipos primitivos que podemos utilizar no TypeScript:</p>
<br />

- `let loading: boolean;` // boolean: receberá só true ou false
- `loading = false;`
<br />

- `let email: string;` // string: receberá palavras, pontuação e símbolos
- `email = "joao@email.com";`
<br />

- `let price: number;` // number: receberá números int ou float
- `price = 10.50;`
- `price = 10;`

## <h2>Matrizes</h2>
<p>Existem duas maneiras de tipar arrays no TypeScript, confira os exemplos:</p>

- let numbers: number[];
- numbers = [1,2,3,4,5,6];

- let users: Array<string>;
- users = ['Rodrigo', 'João'];

## <h2>Funções</h2>
<p>Uma função pode ter ou não um retorno, quando ela não tem um retorno ela é do tipo "void"</p>
<p>Dessa maneira, tipamos dessa forma no TypeScript:</p>

- function showMessages(message: string):void { console.log(message) }

<p>Já quando a função tem um retorno, a tipagem é inferida automaticamente na função.</p>

- function showMessages(message: string) { return message; }
- console.log(showMessages("Oi, João"))

## <h2>Union</h2>
<p>O Operador Union, representado pelo pipe "|" nos permite adicionar mais de um tipo na variável. Vamos ao exemplo:</p>

- function printUserId(id: number | string) { console.log(`O ID do usuário é: ${id}`); }

- printUserId(101);
- printUserId("101");

- // Dessa forma, podemos passar tanto number quanto string

## <h2>Generics</h2>
<p>O generic no TypeScript nos permite reutilizar uma determinada implementação de código, de forma tipada. Para representar um generic, nós declaramos ele dessa forma < T > (podendo ser utilizado qualquer outra letra, existem as convenções que podemos seguir:</p>

- < S > → Representando State 
- < T > → Representando Type 
- < K > → Representando Key 
- < V > → Representando Value 
- < E > → Representando Element

<p>Exemplo de um trecho de código utilizando generics:</p>

<p>
    function useState< T >() {
        let state: T;

        function get(){
            return state;
        }

        function set(newValue: T){
            state = newValue;
        }

        return { get, set}
    }

    let newState = useState();
    newState.get();
    newState.set("João");
    newState.set(123);
</p>

## <h2></h2>
<p></p>

## <h2></h2>
<p></p>

## <h2></h2>
<p></p>

## <h2></h2>
<p></p>

## <h2></h2>
<p></p>

## <h2></h2>
<p></p>

## <h2></h2>
<p></p>
