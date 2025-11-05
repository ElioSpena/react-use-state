import { use, useState } from "react"
import DescriptionCard from "./DescriptionCard";
import Button from "./Button";

export default function TogglePanel({languages}) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("Nessun Linguaggio Selezionato");
    const [active, setActive] = useState(null);

    return(
        <>

           <div className="d-flex justify-content-center gap-5">
                   {languages.map(curLang=> 
                    <Button 
                     key={curLang.id}
                     className={`btn ${active === curLang.id ? "btn-warning" : "btn-primary"}`}
                     onClick={()=>{
                        setTitle(()=>curLang.title)
                        setDescription(()=>curLang.description)
                        setActive(()=> curLang.id)
                    }}
                    title={curLang.title} />
                   )}
                </div>
                
                <DescriptionCard title={title} description={description} />
                  
         </>
    )
}