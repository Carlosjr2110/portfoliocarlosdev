import * as C from './style';


interface ButtonProps {
    label: string;
    link?: string;
    onClick?: () => void;
  }


export const Button = ({ label, link, onClick }: ButtonProps) => {
    return (
      <C.StyledButton onClick={onClick} href={link} target="_blank" rel="noopener noreferrer">
        {label}
      </C.StyledButton>
    );
  };
  
  export default Button;