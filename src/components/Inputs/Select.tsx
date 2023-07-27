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
}
const MySelect = ({ label, errorMessage, isInvalid, ...rest }: IProps) => {
  return (
    <FormControl>
      <FormLabel color="white" fontSize="xs" fontWeight="bold" mb="10px">
        {label}
      </FormLabel>
      <Select
        placeholder="Select option"
        color="gray.400"
        bg="#262f63"
        border="0.5px solid"
        borderColor="#E2E8F04D"
        borderRadius="15px"
        fontSize="md"
        isInvalid={isInvalid}
        {...rest}
      >
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
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
