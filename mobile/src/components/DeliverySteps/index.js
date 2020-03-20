import React from 'react';
import { Container, Step, StepRow, Line, StepLabel, Row } from './styles';

export default function DeliverySteps({ activeStep }) {
  return (
    <Container>
      <StepRow>
        <Step activeStep={activeStep >= 1} />
        <Line />
        <Step activeStep={activeStep >= 2} />
        <Line />
        <Step activeStep={activeStep >= 3} />
      </StepRow>
      <Row>
        <StepLabel>Aguardando{'\n'}Retirada</StepLabel>
        <StepLabel>Retirada</StepLabel>
        <StepLabel>Entregue</StepLabel>
      </Row>
    </Container>
  );
}

// export default function DeliverySteps({ activeStep }) {
//   return (
//     <Container>
//       <ProgressSteps
//         activeStep={activeStep}
//         progressBarColor="#7D40E7"
//         completedProgressBarColor="#7D40E7"
//         completedStepIconColor="#7D40E7"
//         borderWidth={1}
//         activeStepIconBorderColor="#7D40E7"
//       >
//         <ProgressStep label="Aguardando Retirada" />
//         <ProgressStep label="Retirada" />
//         <ProgressStep label="Entregue" />
//       </ProgressSteps>
//     </Container>
//   );
// }
