import {
  FormControl,
  FormLabel,
  Select,
  SelectProps,
  Text,
} from "@chakra-ui/react";
interface IProps extends SelectProps {
  label: string;
  isInvalid?: boolean;
  errorMessage?: string;
  children: React.ReactNode;
}
const MySelect = ({
  label,
  errorMessage,
  children,
  isInvalid,
  ...rest
}: IProps) => {
  return (
    <FormControl>
      <FormLabel color="white" fontSize="sm" fontWeight="bold" mb="10px">
        {label}
      </FormLabel>
      <Select
        color="gray.200"
        bg="#262f63"
        border="0.5px solid"
        borderColor="#E2E8F04D"
        borderRadius="15px"
        fontSize="md"
        isInvalid={isInvalid}
        {...rest}
      >
        {children}
      </Select>
      {isInvalid && (
        <Text mt={2} fontSize={"xs"} color="tomato">
          {errorMessage}
        </Text>
      )}
    </FormControl>
  );
};

export default MySelect;
