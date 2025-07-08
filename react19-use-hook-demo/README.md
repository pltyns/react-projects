# React 19 `use()` Hook ile Aktivite Uygulaması

Bu proje, React 19 ile birlikte gelen `use()` hook'unu kullanarak rastgele bir aktivite verisini Bored API üzerinden çeker. Next.js 13+ App Router yapısı ile geliştirilmiştir.

---

##  Kullanılan Teknolojiler

-  TypeScript
-  Suspense (yüklenme ekranı)
-  Server Components
-  Bored API (`https://bored-api.appbrewery.com/random`)

---

##  Proje Açıklaması

Bu projede, `use()` hook'u kullanılarak veriler **Server Component** içinde asenkron şekilde çekilir. Bu sayede:
- Kod sadeleşir
- Veri çekme işlemi `Suspense` ile sarmalanır ve yüklenme ekranı otomatik olarak gösterilir.

---

## React 19 `use()` vs Klasik Veri Çekme

Bu projede kullanılan `use()` hook’u, React 19 ile gelen yeniliklerden biridir. Aşağıda eski yöntemle farkını görebilirsin:

### Eski Yöntem: `useEffect` + `useState`

```tsx
'use client'
import { useEffect, useState } from 'react';

export default function HomePage() {
  const [joke, setJoke] = useState(null);

  useEffect(() => {
    fetch('https://bored-api.appbrewery.com/random')
      .then(res => res.json())
      .then(data => setJoke(data));
  }, []);

  if (!joke) return <p>Yükleniyor...</p>;

  return <div>{joke.activity}</div>;
}

###  Yeni Yöntem: React 19 `use()`

```tsx
import { use } from 'react';
import { getJoke } from '@/lib/api';

export default function HomePage() {
  const joke = use(getJoke());

  return <div>{joke.activity}</div>;
}
```

---

### Karşılaştırma Tablosu

| Özellik                     | useEffect (Eski) | use() (Yeni) |
|-----------------------------|------------------|--------------|
| Server-side çalışır mı?     | Hayır            | Evet         |
| Kod karmaşıklığı            | Yüksek           | Düşük        |
| Yükleme ekranı              | Manuel           | `Suspense` ile otomatik |
| SEO Dostu                   | Düşük            | Yüksek       |
| Modernlik                   | Eski             |  Yeni ve modern |

---

##  Kurulum

```bash
git clone https://github.com/pltyns/react-projects.git
cd react-projects/react19-use-hook-demo
npm install
npm run dev
```

---

---

##  Notlar

- `use()` sadece Server Component içinde çalışır.
- `HomePage.tsx` bileşeni **"use client"** içermemelidir.
- Yüklenme durumu `Suspense` ile otomatik kontrol edilir.

---

## Geliştiren
- [@pltyns](https://github.com/pltyns)
---



