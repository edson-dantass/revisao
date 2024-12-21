import { ButtonText, Container } from "./styles";

export function Button(props) {
  const { label, ...rest } = props

  return (
    <Container {...rest}>
      <ButtonText>{label}</ButtonText>
    </Container>
  );
}
