import { useColor } from "../context/ColorContext";

function MyForm() {
  const {colorSelect, getColor} = useColor();

  return (
    <>
      <input
        id="colorInpt"
        type="text"
        placeholder="choose the color"
        className="input"
        onChange={(e) => getColor(e.target.value)}
        value={colorSelect}
      />
    </>
  );
}

export default MyForm;