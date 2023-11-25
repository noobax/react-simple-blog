
export function Button({disabled, caption, onToggle}) {

  return (
    <button
      onClick={() => onToggle(!disabled)}
    >{caption}
    </button>
  )
}
