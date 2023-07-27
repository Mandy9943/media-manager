import { Box, BoxProps, useStyleConfig } from "@chakra-ui/react";

interface IProps extends BoxProps {
  children: React.ReactNode;
  variant?: string;
}

function Card({ children, variant, ...rest }: IProps) {
  const styles = useStyleConfig("Card", { variant });
  return (
    <Box __css={styles} {...rest}>
      {children}
    </Box>
  );
}

export default Card;
