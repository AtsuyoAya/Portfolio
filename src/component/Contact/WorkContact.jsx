import "./WorkContact.css"
function WorkContact({ }) {
    const ImageContact = [
        {
            img: "/images/Email.png",
            name: "WilliamKientz34@Gmail.com"
        },
        {
            img: "/images/Tel.png",
            name: "06 99 36 37 65"
        }
    ]

    return (
        <div className={"WorkContact"}>
            <h2>Contact</h2>
            {ImageContact.map((icone, index) => (
                <div className="Icones" key={index}>
                    {icone.img && (
                        <img src={icone.img} />

                    )}
                    {icone.name}
                </div>



            ))}



        </div>



    )



}
export default WorkContact