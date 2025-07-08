  export async function getJoke() {
    const res = await fetch('https://bored-api.appbrewery.com/random');
    if (!res.ok) throw new Error('Kullanıcı verisi alınamadı');
    return res.json();
  }

