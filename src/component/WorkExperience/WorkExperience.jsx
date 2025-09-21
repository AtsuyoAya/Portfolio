import WorkCase from "./WorkCase/WorkCase"

import placeholder from "../../assets/Case1.png"

function WorkExperience({ }) {

    return (
        <div>

            <h2>Work Experience</h2>

            <WorkCase title={"Titre 1"} description={"description 1"} img={placeholder} />
            <WorkCase title={"Titre 2"} description={"description 2"} img={placeholder} />
            <WorkCase title={"Titre 3"} description={"description 3"} img={placeholder} />
            <WorkCase title={"Titre 4"} description={"description 4"} img={placeholder} />

        </div>
    )

}

export default WorkExperience