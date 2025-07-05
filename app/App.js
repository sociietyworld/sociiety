import { CapsuleProvider } from './CapsuleContext';
import AppLayout from './components/AppLayout';

export default function App() {
  return (
    <CapsuleProvider>
      <AppLayout />
    </CapsuleProvider>
  );
}
