import React, { useState } from 'react';

function List({initialData} : {initialData: string[]}) {

  const [newItem, setNewItem] = useState('')
  const [list, setList ] = useState(initialData)

  function addToList() {
    setTimeout(() => {
      setList(state => [...state, newItem])
    }, 500)
  }

  function removeFromList(i : string) {
    setTimeout(() => {
      setList(state => state.filter(_i => _i !== i))
    }, 500)
  }

  return (
    <>
    <input placeholder="Novo Item" value={newItem} onChange={({target}) => setNewItem(target.value)}></input>
    <button onClick={addToList} disabled={newItem.length <= 0}>Adicionar</button>
    <ul>
      {list.map(i => <li key={i}>{i} <button onClick={() => removeFromList(i)}>Remove</button></li>)}
    </ul>
    </>
  )
}

export default List
