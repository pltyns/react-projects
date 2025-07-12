
export default function ExpensiveTree() {
   let now = performance.now();  // Başlangıç zamanını alıyoruz
  while (performance.now() - now < 100) {
    // 100ms yapay gecikme
  }
  console.log("ExpensiveTree render edildi");
  return <p>I am a very slow component tree.</p>;
}