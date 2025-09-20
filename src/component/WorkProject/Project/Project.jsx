import "./Project.css"

function Project({ className,type, title, description, img }) {

    return (
        <div className={"Project " + className}>
            <div className={"content"}>
                <div className="type"> {type} </div>
                <div className="title"> {title} </div>
                <div className="description"> {description} </div>
            </div>
            <div className={"image"} >
                <img src={img} />
            </div>
        </div>
    )
}
export default Project