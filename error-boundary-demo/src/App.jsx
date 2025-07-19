import { ErrorBoundary } from 'react-error-boundary';
import UserDetails from './components/UserDetails';
import ErrorFallback from './components/ErrorFallback';

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>🛡️ Error Boundary Örneği</h1>
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => {
          window.location.reload();
        }}
      >
        <UserDetails />
      </ErrorBoundary>
    </div>
  );
}

export default App;
