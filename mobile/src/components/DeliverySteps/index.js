import React from 'react';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';

import { Container } from './styles';

export default function DeliverySteps({ activeStep }) {
  return (
    <Container>
      <ProgressSteps
        activeStep={activeStep}
        progressBarColor="#7D40E7"
        completedProgressBarColor="#7D40E7"
        completedStepIconColor="#7D40E7"
        borderWidth={1}
        activeStepIconBorderColor="#7D40E7"
      >
        <ProgressStep label="Aguardando Retirada" />
        <ProgressStep label="Retirada" />
        <ProgressStep label="Entregue" />
      </ProgressSteps>
    </Container>
  );
}
