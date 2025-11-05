import { useState } from "react"


export default function Main({languages}) {
    const [visible, setVisible] = useState(true);

    return (
        <main>
            <div className="container my-5">
                <div className="d-flex justify-content-center gap-5">
                   {languages.map(curLang=> 
                    <button
                    onClick={()=>{
                        setVisible(curLang.description)
                    }}
                    className="btn btn-primary">
                        {curLang.title}
                    </button>
                   )}
                </div>
                    <div className="card my-4 p-3">
                        <p>{visible}</p>
                    </div>
                
            </div>
        </main>
    )
}