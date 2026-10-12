import { useState } from 'react';
import styled from 'styled-components/native';

import { colors } from '@/constants/theme';

export default function Home() {
  const [count, setCount] = useState(0);

  function handleAdd() {
    setCount(count + 1);
  }

  return (
    <Container>
      <Title>Atividade 12.10</Title>
      <Description>Tela Atividade</Description>

      <Counter>Cliques: {count}</Counter>

      <Button onPress={handleAdd}>
        <ButtonText>Clique aqui</ButtonText>
      </Button>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: ${colors.background};
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${colors.title};
  margin-bottom: 8px;
`;

const Description = styled.Text`
  font-size: 14px;
  color: ${colors.text};
  margin-bottom: 20px;
`;

const Counter = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${colors.primary};
  margin-bottom: 20px;
`;

const Button = styled.Pressable`
  background-color: ${colors.primary};
  padding: 12px 24px;
  border-radius: 12px;
`;

const ButtonText = styled.Text`
  color: ${colors.white};
  font-size: 16px;
  font-weight: bold;
`;
