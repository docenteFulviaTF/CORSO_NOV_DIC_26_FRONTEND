export default function Intestazione({ titolo, sottotitolo }) {
  return (
    <header className="riquadro">
      <h1>{titolo}</h1>
      <p>{sottotitolo}</p>
    </header>
  );
}
