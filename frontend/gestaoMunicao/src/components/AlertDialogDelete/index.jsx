import { ModalWrapper, ModalContent, ContainerButton } from "./AlertDialogDelete.styled"

export default function AlertDialogDelete({ message, onCancel, onConfirm, obj }) {

  return (
    <ModalWrapper>
      <ModalContent>
        
        <h2>{message}</h2>

        <p>{obj}</p>

        <ContainerButton>
          <button onClick={onConfirm}>Confirmar</button>
          <button onClick={onCancel}>Cancelar</button>
        </ContainerButton>
      </ModalContent>
    </ModalWrapper>
  );
}