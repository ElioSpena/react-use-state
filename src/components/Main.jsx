import { use, useState } from "react"


export default function Main({languages}) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("Nessun Linguaggio Selezionato");
    const [active, setActive] = useState(null);
   
    return (
        <main>
            <div className="container my-5">
                <div className="d-flex justify-content-center gap-5">
                   {languages.map(curLang=> 
                    <button key={curLang.id}
                    onClick={()=>{
                        setTitle(()=>curLang.title)
                        setDescription(()=>curLang.description)
                        setActive(()=> curLang.id)
                    }}
                    className={`btn ${active === curLang.id ? "btn-warning" : "btn-primary"}`}>
                        {curLang.title}
                    </button>
                   )}
                </div>
                    <div className="card my-4 p-3">
                        <h4>{title}</h4>
                        <p>{description}</p>
                    </div>
                
            </div>
        </main>
    )
}