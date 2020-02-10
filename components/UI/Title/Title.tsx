import { Text } from './Title.styles';

interface TitleProps {
  text: string;
  centered?: boolean;
  isBold?: boolean;
  isSmall?: boolean;
};

function Title(props: TitleProps) {
  const { text, centered, isBold, isSmall } = props;
    return (
    <Text isBold={isBold} centered={centered} isSmall={isSmall}>{text}</Text>
  )
};

export default Title;