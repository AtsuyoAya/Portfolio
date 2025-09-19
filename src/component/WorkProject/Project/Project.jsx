function Project({ type, title, description, img }) {

    return (
        <div>
            
            <h2> {type} </h2>
            <h1> {title} </h1>
            <p> {description} </p>
            <img src={img} />
        </div>
    )
}
export default Project