const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div role="alert" style={{ color: 'red', border: '1px solid red', padding: '1rem' }}>
      <p>❌ Bir hata oluştu:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Yeniden Dene</button>
    </div>
  );
};

export default ErrorFallback;
