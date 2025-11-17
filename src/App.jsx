import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Epicode S9/L1 – React Intro</h1>

      <h2>ButtonComponent (funzionale)</h2>
      <ButtonComponent text="Premi Qui" />

      <h2>ImageComponent (classe)</h2>
      <ImageComponent src="https://picsum.photos/300" alt="Immagine random" />
    </div>
  );
}

export default App;
