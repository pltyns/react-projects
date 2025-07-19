import { useQuery } from '@tanstack/react-query';
import { fetchUsers } from '../api/users';
import { FixedSizeList as List } from 'react-window';
import { useSearchStore } from '../store';
import React, { useMemo } from 'react';

const UserList = React.memo(() => {
  const { data: users = [], isLoading } = useQuery({queryKey:['users'], queryFn: fetchUsers})
  const search = useSearchStore((state) => state.search);

  const filtered = useMemo(() => {
    return users.filter((u) =>
      u.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [users, search]);

  if (isLoading) return <div>Yükleniyor...</div>;

  return (
    <List
      height={300}
      itemCount={filtered.length}
      itemSize={50}
      width={'100%'}
    >
      {({ index, style }) => (
        <div style={style} className="border-b p-2">
          {filtered[index].name}
        </div>
      )}
    </List>
  );
});

export default UserList;
