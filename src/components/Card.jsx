
export function Card({title, body, href, image}) {
  return (
    <div className="card" style={{width: '18rem'}}>
      <img src={image} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{body}</p>
        <a href={href} className="btn btn-primary">Read</a>
      </div>
    </div>
  )
}
