import React from 'react'

const arr = [1, 2, 3, 4, 5]

function List() {
  return (
    // javascript mode (tip: we cann't write if-else in the component function. We have to erite ternary operator)
    // cannot use for loop in component function
    <>
    {arr.map((a) => (
      // <p>a</p>
      <p>{a}</p>
    ))}
    <ul>
      {10 > 5 ? <li>Rohit Sharma</li> : <li>Virat Kohli</li>}
      {10 < 5 && <li>10 is grater</li>}         {/* called shortcircuiting */}
    </ul>
    </>
  )
}

export default List
