import { useRef , useEffect , useState} from 'react';
import { useColor } from './context/ColorContext';
import MyForm from './components/MyFormChallenge';
import BoxColor from './components/BoxColor';

import './App.css'

function App() {
  const [prevColor, setPrevColor] = useState('');
  const {colorSelect, colors} = useColor();

  const colorsBox = useRef(null);
  let selected;

  useEffect(()=>{
    if(prevColor){
      selected = colorsBox.current.querySelector('.'+prevColor);
      selected.style.color = prevColor;
      selected.style.backgroundColor = "unset"
    }

    if (colors.includes(colorSelect)){
      selected = colorsBox.current.querySelector('.'+colorSelect);
      selected.style.color = "black";
      selected.style.backgroundColor = colorSelect;

      setPrevColor(colorSelect);
    }

  },[colorSelect])

  return (
    <>
      <MyForm />
      <div ref={colorsBox} className='container'>
        {colors.map((color)=>(
          <div 
            key={`${color}Box`} 
            className={`box ${color}`}
            style={{borderColor:color,color:color}}
          >
              <BoxColor color={color} value={colorSelect}/>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
