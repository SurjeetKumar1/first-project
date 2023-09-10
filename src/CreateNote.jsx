
import React from "react";

const CreateNote=()=>{

    return (
      <>
     <div className="main_note">
        <form>
            <input type="text" placeholder="tittle"/>
                <textarea rows="" column="" placeholder="write a note..."/>
           <button> +</button>
        </form>
     </div>
      </>
      )
    }
    export default CreateNote;