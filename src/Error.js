import React  from 'react';
import styled from 'styled-components/native';

export default function Error(props) {
  return(
    <React.Fragment>
      <ErrorText>
        {'Error loading...'}
      </ErrorText>

      <ErrorText>
        {'Please check your internet connection and try again.'}
      </ErrorText>
    </React.Fragment>
  );
}

const ErrorText = styled.Text`
  font-size: 28px;
  color: #adadad;

  text-align: center;

  padding: 0 32px 8px;
`
