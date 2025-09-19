import Project from "./Project/Project"
import placeholder from "../../assets/Case1.png"


function WorkProject({ }) {

    return (

        <div>

            Work Project

            <Project
                type={"Projet Perso"}
                title={"titre1"}
                description={"description"}
                img={placeholder}
             />


            <Project 
            type={"Projet Perso"}
            title={"titre1"} 
            description={"description"} 
            img={placeholder} 
            />

        </div>
    )

}

export default WorkProject