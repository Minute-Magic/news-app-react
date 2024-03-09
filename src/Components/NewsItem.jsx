
function NewsItem({title, description, src, url}) {
  return (
    <div>
      <div className="card bg-dark text-light mb-3 d-inline-block mg-3 mx-3 px-2" style={{maxWidth:"345px"}}>
      <img src={src} style={{height:"200px",width:"360px"}} className="card-img-top" alt="..."/>
      <div className="card-body">
         <h5 className="card-title">{title}</h5>
         <p className="card-text">{description}</p>
         <a href={url} className="btn btn-primary">Read more</a>
      </div>
    </div>
    </div>
  )
}

export default NewsItem