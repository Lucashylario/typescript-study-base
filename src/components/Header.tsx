interface HeaderProps {
    title: string;
    subtitle?: string; // ? = Não obrigatório
}

// React.FC = Function components (Forma de definir qual o tipo que as propiedades devem ter neste componente)
// <HeaderProps> = Interface generica
// (props) = serve para receber as propriedades do objeto interface
export const Header: React.FC<HeaderProps> = (props) => {
  return (
    <header>{props.title}</header>
    
  )
}
