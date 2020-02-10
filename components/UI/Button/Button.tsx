 import { Btn } from './Button.styles';

interface ButtonProps {
  text: string;
  isDisabled?: boolean;
  onClick: () => void;
};

function Button(props: ButtonProps) {
  const { text, isDisabled, onClick } = props;

  function onClickButton(): void {
    if (!isDisabled) {
      onClick();
    }
  };

  return <Btn onClick={onClickButton} isDisabled={isDisabled}>{text}</Btn>
};

export default Button;