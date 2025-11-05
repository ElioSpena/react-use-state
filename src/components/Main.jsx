
import TogglePanel from "./TogglePanel";

export default function Main({languages}) {
  
   
    return (
        <main>
            <div className="container my-5">

             <TogglePanel languages={languages} />
                
            </div>
        </main>
    )
}