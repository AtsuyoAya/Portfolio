import "./WorkSkills.css"

function WorkSkills({ }) {
    const skills =[
        {
         img: "/images/Html.png",   
         name:"HTML"
        },
        {
            img: "/images/Js.png",
            name:"ReactJS"
        },
        {
            img: "/images/css.png",
            name:"CSS"
        },
        {
            img: "/images/C++.png",
            name:"C++"
        }
    ]


    return (
        <div className={"WorkSkills"}>
        <h2>
            compétences
        </h2>
        {skills.map((skill, index) => (
            <div className="Skill" key={index}>
            {skill.img && (
                <img src={skill.img}/>
            )}
            {skill.name}
            </div>

        ))} 

        </div>
    );
}

export default WorkSkills