import { useState } from "react";
import { Button } from "./Button";
import { TextInput } from "./TextInput";

export function Modal({disabled, onToggle, data, onSave}) {

  //const [loading, setLoad] = useState(false)
  //const [error, setError] = useState(null)


  function onSubmit(e) {
    e.preventDefault()
    const form = new FormData(e.target)
    fetch(`https://jsonplaceholder.typicode.com/posts/${data.id}`, {
      method: 'PUT',
      body: form
      })
      .then(r => r.json())
      .then(r => onSave(Object.fromEntries(form.entries())))
  }


  return (
   <dialog open>
    <form id='edit' onSubmit={onSubmit}>
      <input type="text" name="title" defaultValue={data.title} />
      <input type="text" name="body"  defaultValue={data.body}/>
      <button type="submit">save</button>
    </form>
    <form method="dialog">
      <Button disabled={disabled} onToggle={onToggle} caption={'close'}/>
    </form>
   </dialog>

  )
}
