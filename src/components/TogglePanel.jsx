import { use, useState } from "react"
import DescriptionCard from "./DescriptionCard";

export default function TogglePanel({languages}) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("Nessun Linguaggio Selezionato");
    const [active, setActive] = useState(null);

    return(
        <>
        
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
                
                <DescriptionCard title={title} description={description} />
                  
         </>
    )
}