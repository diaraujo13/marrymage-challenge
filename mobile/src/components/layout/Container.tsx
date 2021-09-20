import React from 'react';
import { Platform, KeyboardAvoidingView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

const ContainerWrapper = styled.View`
  flex: 1;
  padding: 10px;
`;

export default ({ children }) => (
  <>
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white'  }}>
      <ContainerWrapper>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{ flex: 1}}
          contentContainerStyle={{ flex: 1 }}
        >
          {children}
        </KeyboardAvoidingView>
      </ContainerWrapper>
    </SafeAreaView>
  </>
);
