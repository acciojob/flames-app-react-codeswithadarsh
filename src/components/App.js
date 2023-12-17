import React, {Component, useState} from "react";
import '../styles/App.css';

// class App extends Component {
//     render() {

//         return(
//             <div id="main">
//               <FlamesApp/>
//             </div>
//         )
//     }
// }

const App = () => {
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [relationshipStatus, setRelationshipStatus] = useState('');
    
    const calculateRelationship = () => {
      if (!input1 || !input2) {
        setRelationshipStatus('Please Enter valid input');
        return;
      }
  
      // Remove common characters
      let remaining1 = input1;
      let remaining2 = input2;
  
      for (let char of input1) {
        if (remaining2.includes(char)) {
          remaining1 = remaining1.replace(char, '');
          remaining2 = remaining2.replace(char, '');
        }
      }
  
      const totalLength = (remaining1.length + remaining2.length) % 6;
  
      switch (totalLength) {
        case 1:
          setRelationshipStatus('Friends');
          break;
        case 2:
          setRelationshipStatus('Love');
          break;
        case 3:
          setRelationshipStatus('Affection');
          break;
        case 4:
          setRelationshipStatus('Marriage');
          break;
        case 5:
          setRelationshipStatus('Enemy');
          break;
        case 0:
          setRelationshipStatus('Siblings');
          break;
        default:
          setRelationshipStatus('');
      }
    };
  
    const clearInputs = () => {
      setInput1('');
      setInput2('');
      setRelationshipStatus('');
    };
  
    return (
      <div>
        <input
          type="text"
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
          data-testid="input1"
        />
        <input
          type="text"
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
          data-testid="input2"
        />
        <button onClick={calculateRelationship} data-testid="calculate_relationship">
          Calculate Relationship Future
        </button>
        <button onClick={clearInputs} data-testid="clear">
          Clear
        </button>
        <h3 data-testid="answer">{relationshipStatus}</h3>
      </div>
    );
  };


export default App;
