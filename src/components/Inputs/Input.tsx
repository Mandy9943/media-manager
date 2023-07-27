import {
  FormControl,
  FormLabel,
  Input,
  InputProps,
  Text,
} from "@chakra-ui/react";

interface IProps extends InputProps {
  label: string;
  isInvalid?: boolean;
  errorMessage?: string;
}
const MyInput = ({ label, errorMessage, isInvalid, ...rest }: IProps) => {
  return (
    <FormControl>
      <FormLabel color="white" fontSize="sm" fontWeight="bold" mb="10px">
        {label}
      </FormLabel>
      <Input
        color="gray.200"
        bg="#262f63"
        border="0.5px solid"
        borderColor="#E2E8F04D"
        borderRadius="15px"
        fontSize="md"
        isInvalid={isInvalid}
        {...rest}
      />
      {isInvalid && (
        <Text mt={2} fontSize={"xs"} color="tomato">
          {errorMessage}
        </Text>
      )}
    </FormControl>
  );
};

export default MyInput;
