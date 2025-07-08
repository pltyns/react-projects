import { getJoke } from '@/lib/api';
import { Joke } from '@/types/joke';
import { use } from 'react';

export default function HomePage() {

  const joke: Joke = use(getJoke());
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Oyun Bilgileri</h1>

      <p><strong>Aktivite:</strong> {joke.activity}</p>
      <p><strong>Erişilebilirlik:</strong> { joke.availability}</p>
      <p><strong>Tip:</strong> { joke.type}</p>
      <p><strong>Katılım Sayısı:</strong> {joke.price}</p>
      <p><strong>Ödül:</strong> { joke.availability}</p>
      <p><strong>Tip:</strong> { joke.type}</p>
      <p><strong>Erişilebilirlik:</strong> {joke.accessibility}</p>
      <p><strong>Link:</strong> { joke.link}</p>
      <p><strong>Anahtar:</strong> { joke.key}</p>
  
    </main>
  );
}