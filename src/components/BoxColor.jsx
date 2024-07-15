function BoxColor ({color, value}) {
  return (
    <>
      {color != value &&
        <p>I'm not a {value} color</p>
      }
      {color == value &&
        <p>Yes, I'm {value} color</p>
      }
    </> 
  )
}
export default BoxColor;  
