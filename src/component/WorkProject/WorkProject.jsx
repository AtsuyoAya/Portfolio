import Project from "./Project/Project"
import placeholder from "../../assets/Case1.png"
import "./WorkProject.css"

function WorkProject({ }) {

    return (

        <div className={"WorkProject"}>

            <h2>projets</h2>

            <Project
                className="left"
                type={"Projet Perso"}
                title={"Portfolio"}
                description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras posuere consequat ultrices. Maecenas efficitur ligula id dui tristique finibus. Aenean non lorem ex. Nunc sodales nibh et bibendum hendrerit. Suspendisse et fermentum mauris. Praesent rutrum id leo eu molestie. Nulla porttitor sapien vel nisi hendrerit imperdiet quis vitae leo. Nulla vehicula eget nunc a vestibulum."}
                img={placeholder}
             />


            <Project 
            className="right"
            type={"Projet Perso"}
            title={"titre2"} 
            description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras posuere consequat ultrices. Maecenas efficitur ligula id dui tristique finibus. Aenean non lorem ex. Nunc sodales nibh et bibendum hendrerit. Suspendisse et fermentum mauris. Praesent rutrum id leo eu molestie. Nulla porttitor sapien vel nisi hendrerit imperdiet quis vitae leo. Nulla vehicula eget nunc a vestibulum."} 
            img={placeholder} 
            />

        </div>
    )

}

export default WorkProject