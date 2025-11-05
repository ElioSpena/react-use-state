export default function DescriptionCard({title, description}){
    
    return(
          <div className="card my-4 p-3">
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    )
}