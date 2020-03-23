import React from 'react';

import { Container, ProblemsList, Problem, Date } from './styles';

export default function DeliveryProblems() {
  return (
    <Container>
      <ProblemsList>
        <Problem>Destinatário ausente</Problem>
        <Date>15/02/2020</Date>
      </ProblemsList>
    </Container>
  );
}
