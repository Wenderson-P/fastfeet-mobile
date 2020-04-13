import React, { useState, useEffect } from 'react';

import { format, parseISO } from 'date-fns';
import { FlatList, ProblemsList, Problem, Date } from './styles';

import api from '~/services/api';

export default function DeliveryProblems({ route }) {
  const { deliveryId } = route.params;
  const [problems, setProblems] = useState('');

  useEffect(() => {
    async function loadProblems() {
      const response = await api.get(`/delivery/${deliveryId}/problems`);
      const data = response.data.map(problem => {
        const date = format(parseISO(problem.created_at), 'dd/MM/yyyy');
        return {
          description: problem.description,
          date,
        };
      });
      setProblems(data);
    }
    loadProblems();
  }, []);

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
