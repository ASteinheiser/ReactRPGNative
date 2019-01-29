import React  from 'react';
import styled from 'styled-components/native';

export default function Error(props) {
  return(
    <Centered>
      <ErrorText>
        {'Error loading...'}
      </ErrorText>

      <ErrorText>
        {'Please check your internet connection and try again.'}
      </ErrorText>
    </Centered>
  );
}

const ErrorText = styled.Text`
  font-size: 28px;
  color: #adadad;

  text-align: center;

  padding: 0 32px 8px;
`

const Centered = styled.View`
  display: flex;
  flex: 1;

  flex-direction: column;
  justify-content: center;
  align-items: center;
`
