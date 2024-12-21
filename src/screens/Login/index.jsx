import { Text, TouchableOpacity } from "react-native";
import { Container } from "./styles";
import { Button } from "../../components/Button";

export function Login({ navigation }) {
  const irParaHome = () => {
    navigation.navigate("tab")
  }

  return (
    <Container>
      <Text>Login page...</Text>

      <Button onPress={irParaHome} label="Fazer login" />
    </Container>
  );
}
