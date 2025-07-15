import { Header, JsonInput } from '../components';
import Copy from '../components/copy/Copy';

const style = {
  app: {
    height: '100dvh' as const,
    display: 'flex' as const,
    flexDirection: 'column' as const,
  },
};

export default function page() {
  return (
    <div style={style.app}>
      <Header />
      <JsonInput />
      <Copy />
    </div>
  );
}
