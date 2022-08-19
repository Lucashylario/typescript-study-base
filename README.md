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
    let info: any;

    info = [123];
    info = 'João';
    info = true;
    info = 10.50;
- // Com o tipo any a variável aceitará qualquer valor.

## <h2>Tipos primitivos</h2>
<p>Esses são os tipos primitivos que podemos utilizar no TypeScript:</p>

    let loading: boolean; // boolean: receberá só true ou false
    loading = false;

    let email: string; // string: receberá palavras, pontuação e símbolos
    email = "joao@email.com";

    let price: number; // number: receberá números int ou float
    price = 10.50;
    price = 10;

## <h2>Matrizes</h2>
<p>Existem duas maneiras de tipar arrays no TypeScript, confira os exemplos:</p>

    let numbers: number[];
    numbers = [1,2,3,4,5,6];
    let users: Array<string>;
    users = ['Rodrigo', 'João'];

## <h2>Funções</h2>
<p>Uma função pode ter ou não um retorno, quando ela não tem um retorno ela é do tipo "void"</p>
<p>Dessa maneira, tipamos dessa forma no TypeScript:</p>

    function showMessages(message: string):void { 
        console.log(message) 
    }

<p>Já quando a função tem um retorno, a tipagem é inferida automaticamente na função.</p>

    function showMessages(message: string) { 
        return message; 
    }
    console.log(showMessages("Oi, João"))

## <h2>Union</h2>
<p>O Operador Union, representado pelo pipe "|" nos permite adicionar mais de um tipo na variável. Vamos ao exemplo:</p>

    function printUserId(id: number | string) { 
        console.log(`O ID do usuário é: ${id}`); 
    }

    printUserId(101);
    printUserId("101");

    // Dessa forma, podemos passar tanto number quanto string

## <h2>Generics</h2>
<p>O generic no TypeScript nos permite reutilizar uma determinada implementação de código, de forma tipada. Para representar um generic, nós declaramos ele dessa forma < T > (podendo ser utilizado qualquer outra letra, existem as convenções que podemos seguir:</p>

- < S > → Representando State 
- < T > → Representando Type 
- < K > → Representando Key 
- < V > → Representando Value 
- < E > → Representando Element


<p>Exemplo de um trecho de código utilizando generics:</p>

    function useState<T>() {
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


## <h2>Type</h2>
<p>Para não ficar sempre repetindo os tipos para todas as variáveis podemos criar Types para cada uma delas.</p>
<p>Veja o exemplo a seguir:</p>

    type IdType = string | number | undefined; //Type global para reutilizar em variáveis

    let userId: IdType; //reutilizando o "type" criado a cima
    let adminId: IdType; //reutilizando o "type" criado a cima

    userId = 1;
    userId = '1';
    userId = undefined;

    adminId = 1;
    adminId = '2';
    adminId = undefined;

## <h2>Type Assertions</h2>
<p>Asserção de tipo normalmente é utilizado quando o TypeScript não sabe qual é a tipagem em um determinado objeto.</p>
<p>Para contornarmos isso, podemos criar um <b>type</b> informando quais são as propriedades desse objeto.</p>
    
    //propriedades do objeto
    type UserResponse = { 
        id: number;
        name: string;
        avatar: string;
    }

    // Var recebendo objeto vazio que importará conforme (as) infos que constam no objeto UserResponse 
    let userResponse = {} as UserResponse;

## <h2>Objetos</h2>
<p>Nessa aula vamos aprendemos como criar tipagens utilizando objetos no TypeScript.</p>
<p>Segue o exemplo:</p>

    type Point = {
        x: number;
        y: number;
    }

    function printCoord(points: Point) {
        console.log(`O eixo x é: ${points.x}`)
        console.log(`O eixo y é: ${points.y}`)
    }

    printCoord({x: 101, y: 50})

    Resultado do log:

    [LOG]: "O eixo x é: 101"
    ------------------------
    [LOG]: "O eixo y é: 50"

## <h2>Opcional</h2>
<p>Para informamos que uma propriedade é opcional inserimos o sinal de <b>?</b></p>
<p>Veja o exemplo:</b>

    type User = {
        name: string;
        email: string;
        age: number;
        isAdmin?: boolean; // isAdmin não será obrigatória na sua declaração
    }

    let newUser: User = {
        name: 'João',
        email: 'joao@email.com',
        age: 18
    }

## <h2>Intersecção de tipos</h2>
<p>A intersecção de tipos como o próprio nome já diz, podemos unir dois tipos e usar as suas propriedades dentro de um objeto.</p>
<p>Segue o exemplo abaixo:</p>

    type User = {
        id: number,
        name: string,
    }

    type Char = {
        nickname: string,
        level: number
    }

    type PlayerInfo = User & Char; // Com a intersecção (&), é necessário que passe dentro da var os dados dos objetos "User" & "Char"

    let info: PlayerInfo = {
        id: 1,
        name: 'João Inácio',
        nickname: 'birobirobiro',
        level: 50
    }

## <h2>Interface</h2>
<p>Outra maneira de criar tipagens no TypeScript é utilizando a <b>interface</b> .</p>
<p>Segue o exemplo:</p>

    interface User {
        id: number
        name: string,
    }

    let newUser: User = {
        id: 1,
        name: "João"
    }

    function registerNewUser(newUser: User){
        newUser.id
        newUser.name
    }

## <h2>Type e Interface</h2>
<p>
    O objetivo de ambos serve para definir tipagens no TypeScript. O <b>type</b> é mais recomendado por ser mais simples, fácil de lidar com tipos primitivos, por ser mais flexível. Já as <b>interfaces</b> são utilizadas normalmente em criação de libs, para aqueles que gostam da programação orientada a objetos.
</p>
<p>O exemplo abaixo mostra a diferença na sintaxe e união entre <b>type</b> e <b>inteface:</b></p>

    type TUser = {
        id: number;
        name: string;
    }

    type TPayment = {
        method: string;
    }

    // Fazendo união com Type
    type TAccount = TUser & TPayment

    interface IUser {
        id: number;
        name: string;
    }

    interface IPayment {
        method: string;
    }

    // Fazendo união com interfaces
    interface IAccount extends IUser, IPayment {}type TUser = {
        id: number;
        name: string;
    }

    type TPayment = {
        method: string;
    }

    // Fazendo união com Type
    type TAccount = TUser & TPayment

    interface IUser {
        id: number;
        name: string;
    }

    interface IPayment {
        method: string;
    }

    // Fazendo união com interfaces
    interface IAccount extends IUser, IPayment {}

## <h2>Tipando Componente</h2>
<p>Definindo tipagens para o componente Card:</p>

    import './styles.css';

    type CardProps = {
        name: string;
        time: string;
    }

    export function Card(props: CardProps) {
        return (
            <div className="card">
            <strong>{props.name}</strong>
            <small>{props.time}</small>
            </div>
        )
    }

## <h2>Tipando Estados</h2>
<p>Para tipar os estados precisamos exportar o <b>type</b> do nosso componente Card.</p>

    export type CardProps = {
    name: string;
    time: string;
    }

- Após a exportação, precisamos importar em nosso arquivo Home.tsx

    import { Card, CardProps } from '../../components/Card';

- E em seguida, passar as propriedades para o nosso estado:

    const [students, setStudents] = useState< CardProps[] >([]);

## <h2>Tipando resposta da API</h2>
<p>Para a tipagem de resposta da API precisamos criar dois <b>types</b></p>

    type ProfileResponse = {
        name: string;
        avatar_url: string;
    }

    type User = {
        name: string;
        avatar: string;
    }

- Modificar o nosso estado:

    const [students, setStudents] = useState< CardProps[] >([]);

- Importar as propriedades do nosso type no useEffect():

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://api.github.com/users/rodrigorgtic');
            const data = await response.json() as ProfileResponse; // add "as ProfileResponse"

            setUser({
                name: data.name,
                avatar: data.avatar_url,
            });
        }

        fetchData();
    }, []);
