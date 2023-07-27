import {
  Modal,
  ModalContent,
  ModalContentProps,
  ModalOverlay,
  ModalOverlayProps,
  ResponsiveValue,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import React from "react";

interface IProps extends ModalContentProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  size?: ResponsiveValue<
    | (string & {})
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "full"
    | "xs"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl"
  >;
  overlayProps?: ModalOverlayProps;
}
const MyModal = ({
  isOpen,
  onClose,
  children,
  size,
  overlayProps,
  ...props
}: IProps) => {
  return (
    <>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
        size={size}
      >
        <ModalOverlay background={"rgba(0,0,0,0.7)"} {...overlayProps} />
        <ModalContent
          background={"brand.900"}
          borderRadius="15px"
          width={"90%"}
          {...props}
        >
          {children}
        </ModalContent>
      </Modal>
    </>
  );
};

export default MyModal;

export const ColorfulModal = styled(MyModal)`
  --borderWidth: 3px;

  position: relative;
  padding-top: 20px;
  border-radius: 0.5rem;
  ::after {
    content: "";
    position: absolute;
    top: calc(-1 * var(--borderWidth));
    left: calc(-1 * var(--borderWidth));
    height: calc(100% + var(--borderWidth) * 2);
    width: calc(100% + var(--borderWidth) * 2);
    background: linear-gradient(
      60deg,
      #f79533,
      #f37055,
      #ef4e7b,
      #a166ab,
      #5073b8,
      #1098ad,
      #07b39b,
      #6fba82
    );
    border-radius: calc(2 * 0.5rem);
    z-index: -1;
    animation: animatedgradient 10s ease alternate infinite;
    background-size: 300% 300%;
  }

  @keyframes animatedgradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;
