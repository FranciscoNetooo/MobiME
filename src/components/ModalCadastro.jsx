import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Text,
} from "@chakra-ui/react";

const ModalCadastro = () => {
  const { onOpen } = useDisclosure();

  function reload(e) {
    window.location.reload();
  }

  return (
    <>
      <Modal isOpen={onOpen} onClose={reload}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Text textAlign={"center"}>Cadastro realizado.</Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalCadastro;
