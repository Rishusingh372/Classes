import { useState,useEffect,useRef} from 'react'


function App() {
  // const [initialstate,finalstate] = useState(0)
  // let val = useRef(0);
  // let clr = useRef(null);
  // const increment = () => {
  //   finalstate(initialstate + 1)
  //   val.current = initialstate + 1
  //   console.log(val);
  // }
  // useEffect(()=>{
  //   console.log("mai chal raha hu")
  // })
  // const changecolour = () => {
  //   clr.current.style.color = "#fff"
  //   clr.current.style.backgroundColor = "black"
  // }

  // create a stope watch using useref hook

  const [time, setTime] = useState(0);
  const timeref=useRef(null);
  const startwatch=()=>{
    timeref.current= setInterval(()=>{
     setTime((time) => time + 1);
    }, 1000);

  }

  const stopwatch=()=>{
    clearInterval(timeref.current);
  }
  const restartwatch=()=>{
    setTime(0);
  }


  return (
    <>
      {/* <div>
        <h1>project 3</h1>
        <h1>{initialstate}</h1>
        <h1>value={val.current}</h1>
        <button onClick={increment}>Click</button>
        <button ref={clr}>change hogo color</button>
        <button onClick={changecolour}>changecolour</button>
        <button onMouseOver={changecolour}>MouseDown</button>
      </div> */}

        {/* // create a stope watch using useref hook */}
        <div>
          <h1>{time}</h1>
          <button onClick={startwatch}>start</button>
          <button onClick={stopwatch}>stop</button>
          <button onClick={restartwatch}>restart</button>

        </div>
    </>
  )
}

export default App
