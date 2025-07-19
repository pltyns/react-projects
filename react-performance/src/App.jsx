import React, { Suspense, useTransition } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import SearchInput from './components/SearchInput';
import UserList from './components/UserList';

const queryClient = new QueryClient();

const App = () => {
  const [isPending, startTransition] = useTransition();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="p-4 max-w-md mx-auto">
        <h1 className="text-xl font-bold mb-4">👥 Kullanıcı Listesi</h1>
        <SearchInput />
        {isPending && <div>Arama uygulanıyor...</div>}
        <Suspense fallback={<div>Liste yükleniyor...</div>}>
          <UserList />
        </Suspense>
      </div>
    </QueryClientProvider>
  );
};

export default App;
