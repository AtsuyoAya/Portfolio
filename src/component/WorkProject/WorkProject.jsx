import Project from "./Project/Project"
import placeholder from "../../assets/Portfolio.png"
import ImageProjet2 from "../../assets/Case1.png"
import "./WorkProject.css"

function WorkProject({ }) {

    return (

        <div className={"WorkProject"}>

            <h2>projets</h2>

            <Project
                className="left"
                type={"Projet Perso"}
                title={"Portfolio"}
                description={
                    <>
                        Le Portfolio que vous regardez en ce moment est l'un de mes projets personnels, grâce à ce projet j'ai pu apprendre les bases du HTML, CSS et ReactJS.
                        Je vous laisse le lien du GitHub pour que vous puissiez voir le code de mon portfolio.
                        Si vous avez n'importe quelle question à propos de celui-ci, n'hésitez pas à me contacter .
                        <br />
                        {" "}
                        <a
                            href="https://github.com/AtsuyoAya/Portfolio"
                            target="_blank"
                            rel="noopener noreffer"
                        >
                            Voir sur GitHub
                        </a>
                    </>
                }
                img={placeholder}
            />


            <Project
                className="right"
                type={"Projet Perso"}
                title={"titre2"}
                description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras posuere consequat ultrices. Maecenas efficitur ligula id dui tristique finibus. Aenean non lorem ex. Nunc sodales nibh et bibendum hendrerit. Suspendisse et fermentum mauris. Praesent rutrum id leo eu molestie. Nulla porttitor sapien vel nisi hendrerit imperdiet quis vitae leo. Nulla vehicula eget nunc a vestibulum."}
                img={ImageProjet2}
            />

        </div>
    )

}

export default WorkProject