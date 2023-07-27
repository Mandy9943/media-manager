import { Flex, FlexProps } from "@chakra-ui/react";
import React from "react";

interface IProps extends FlexProps {
  children: React.ReactNode;
}

const Container = ({ children, ...rest }: IProps) => {
  return (
    <Flex w="full" flexDir={"column"} alignItems={"center"}>
      <Flex w="90%" {...rest} flexDir={"column"}>
        {children}
      </Flex>
    </Flex>
  );
};

export default Container;
