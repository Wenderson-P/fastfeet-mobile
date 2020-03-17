import createRouter from './routes';

export default function App() {
  const signed = true;
  return createRouter(signed);
}
