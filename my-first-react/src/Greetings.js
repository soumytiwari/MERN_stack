import React from 'react'

// export default function Greetings(props) {
//   return (
//     <div>
//       <h2>Hello Students!!</h2>
//       <h2>Hello {props.name}!!</h2>
//       {props.children}
//       <br />
//     </div>
//   )
// }


// Destructuring
export default function Greetings({name, children}) {
    return (
      <div>
        <h2>Hello Students!!</h2>
        <h2>Hello {name}!!</h2>
        {children}
        <br />
      </div>
    )
  }
