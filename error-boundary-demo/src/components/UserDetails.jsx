import { useEffect, useState } from 'react';

const UserDetails = () => {
  const [user, setUser] = useState(null);
  const [shouldCrash, setShouldCrash] = useState(false);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(res => res.json())
      .then(data => {
        if (shouldCrash) {
          delete data.name; // hatayı tetikle
        }
        setUser(data);
      });
  }, [shouldCrash]);

  if (!user) return <p>Yükleniyor...</p>;

  return (
    <div>
      <h2>{user.name.toUpperCase()}</h2> {/* Hatalı veri varsa burada crash */}
      <p>{user.email}</p>
      <button onClick={() => setShouldCrash(true)}>Veriyi Boz</button>
    </div>
  );
};

export default UserDetails;
