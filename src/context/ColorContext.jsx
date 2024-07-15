import  {useState, useContext, createContext} from 'react';

const ColorContext = createContext();

const ColorProvider = ({children}) => {
    const [colorSelect , setColorSelect] = useState('');

    const colors = ['red', 'green', 'pink', 'yellow', 'purple', 'white', 'blue', 'aqua', 'olive'];

    const getColor = (newColor) => {
        setColorSelect(newColor);
    }

    return (
        <ColorContext.Provider value={{colors,colorSelect,getColor}}>
            {children}
        </ColorContext.Provider>
    );
}

const useColor = () => useContext(ColorContext);

export {ColorProvider, useColor};