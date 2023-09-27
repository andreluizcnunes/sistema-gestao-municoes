import { ModalWrapper, ModalContent, ContainerButton } from "./AlertDialog.styled"

export default function AlertDialog({ message, onCancel }) {

  return (
    <ModalWrapper>
      <ModalContent>
        
        <h2>{message}</h2>

        <ContainerButton>
          <button onClick={onCancel}>Fechar</button>
        </ContainerButton>
      </ModalContent>
    </ModalWrapper>
  );
}