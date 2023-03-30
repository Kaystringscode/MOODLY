import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

//creates the query form to search input//
function QueryForm() {
    
    return (
        <div>
        <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">Small</InputGroup.Text>
        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
        />
        <button>Get Into Your Mood</button>
      </InputGroup>
        </div>
    )  }
export default QueryForm





// function QueryForm() {
//   const [query, setQuery] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Call your function that performs some action with the query here
//     console.log(`Query submitted: ${query}`);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Query:
//         <input type="text" value={query} onChange={(event) => setQuery(event.target.value)} />
//       </label>
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default QueryForm;



