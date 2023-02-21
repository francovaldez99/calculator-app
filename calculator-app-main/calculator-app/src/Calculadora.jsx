import React from "react";
import "./Calculadora.css";
import { evaluate ,parse} from "mathjs";

function Calculadora({ settheme, theme, input, setInput }) {
  function validateExpression(expression) {
    try {
      parse(expression);
      return true
    } catch (error) {
      return false
    }
  }
  const handleTheme = (event) => settheme(event.target.value);
  const addInput = (value) => setInput(input + value);
  const delInput = () =>{ 
    
    setInput("")
  }
  const calcularResultado = () => {
    if (input) {
     if(validateExpression(input))setInput(evaluate(input));
     else setInput("Sintax Error")
    } else {
      setInput("");
    }
  };
  return (
    <div className={`Calculadora `}>
      <div className="container-input">
        <div className={`numberinput numberinput${theme}`}>
          <span>1</span> <span>2</span> <span>3</span>
        </div>
        <div className={`radio_container radio_container${theme}`}>
          <input
            type="radio"
            name="theme"
            id="theme1"
            value="theme1"
            checked={theme === "theme1"}
            onChange={handleTheme}
          />
          <label htmlFor="theme1" className="toggle-input">
            0
          </label>
          <input
            type="radio"
            name="theme"
            id="theme2"
            value="theme2"
            checked={theme === "theme2"}
            onChange={handleTheme}

          />
          <label htmlFor="theme2" className="toggle-input">
            0
          </label>
          <input
            type="radio"
            name="theme"
            id="theme3"
            value="theme3"
            checked={theme === "theme3"}
            onChange={handleTheme}
          />
          <label htmlFor="theme3" className="toggle-input">
            0
          </label>
        </div>
      </div>
      <div className={`inputbox inputbox${theme}`}>
            
        <input type="text" className={`displayinput`} value={input} readOnly  />
      </div>

      <div className={`contenedorbtn contenedorbtn${theme}`}>
        <div className={`disposicionbtn`}>
          <button
            className={`botonContenedor ${theme}btn`}
            value="7"
            onClick={(e) => addInput(e.target.value)}
          >
            7
          </button>
          <button
            className={`botonContenedor ${theme}btn`}
            value="8"
            onClick={(e) => addInput(e.target.value)}
          >
            8
          </button>
          <button
            className={`botonContenedor ${theme}btn`}
            value="9"
            onClick={(e) => addInput(e.target.value)}
          >
            9
          </button>
          <button
            className={`botonContenedor ${theme}btnredel`}
            onClick={() => delInput()}
          >
            DEL
          </button>
        </div>
        <div className={`disposicionbtn`}>
          <button
            className={`botonContenedor ${theme}btn`}
            value="4"
            onClick={(e) => addInput(e.target.value)}
          >
            4
          </button>
          <button
            className={`botonContenedor ${theme}btn`}
            value="5"
            onClick={(e) => addInput(e.target.value)}
          >
            5
          </button>
          <button
            className={`botonContenedor ${theme}btn`}
            value="6"
            onClick={(e) => addInput(e.target.value)}
          >
            6
          </button>
          <button
            className={`botonContenedor ${theme}btn`}
            value="+"
            onClick={(e) => addInput(e.target.value)}
          >
            +
          </button>
        </div>

        <div className={`disposicionbtn`}>
          <button
            className={`botonContenedor ${theme}btn`}
            value="1"
            onClick={(e) => addInput(e.target.value)}
          >
            1
          </button>
          <button
            className={`botonContenedor ${theme}btn`}
            value="2"
            onClick={(e) => addInput(e.target.value)}
          >
            2
          </button>
          <button
            className={`botonContenedor ${theme}btn`}
            value="3"
            onClick={(e) => addInput(e.target.value)}
          >
            3
          </button>
          <button
            className={`botonContenedor ${theme}btn`}
            value="-"
            onClick={(e) => addInput(e.target.value)}
          >
            -
          </button>
        </div>
        <div className={`disposicionbtn`}>
          <button
            className={`botonContenedor ${theme}btn`}
            value="."
            onClick={(e) => addInput(e.target.value)}
          >
            .
          </button>
          <button
            className={`botonContenedor ${theme}btn`}
            value="0"
            onClick={(e) => addInput(e.target.value)}
          >
            0
          </button>
          <button
            className={`botonContenedor ${theme}btn`}
            value="/"
            onClick={(e) => addInput(e.target.value)}
          >
            /
          </button>
          <button
            className={`botonContenedor ${theme}btn`}
            value="*"
            onClick={(e) => addInput(e.target.value)}
          >
            x
          </button>
        </div>

        <div className={`disposicionbtn`}>
          <button
            className={`botonContenedor ${theme}btnredel`}
            onClick={() => delInput()}
          >
            RESET
          </button>
          <button
            className={`botonContenedor ${theme}btnigual`}
            onClick={() => calcularResultado()}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calculadora;
