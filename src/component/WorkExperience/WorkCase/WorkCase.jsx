function WorkCase({ title, description, img }) {

    return (
        <div>
            <h1> {title} </h1>
            <p> {description} </p>
            <img src={img} />
        </div>
    )
}

export default WorkCase