import { useState } from "react";
import Select from './Select';
import Adress from './Adress';
import Picture from './Picture';
import Details from './Details';

export default function Form() {
  let [page, setPage] = useState(0);
  const FormPage = ["select", "picture", "adress", "details"];
  const pageContainer = ()=>{
if (page === 0 ) {
    return<Select/>
}
else if(page === 1 ) {
    return<Picture/>
}
else if(page === 2 ) {
    return<Adress/>
}
else if(page === 3 ) {
    return<Details/>
}
  }
  return (
    <div>
      <div>{FormPage[page]}</div>
      <div>{pageContainer()}</div>
      <button
        disabled={(page = FormPage.length - 1)}
        onClick={() => setPage((currPage) => currPage - 1)}
      >
        previus
      </button>
      <button
        onClick={()=>{
            if (page === FormPage.lenght - 1) {
                alert ("submitted")
            }
            else{
                setPage((currPage)=> currPage + 1)
            }}}
            >
            {page === 3 ? "submit" : "next"}
      </button>
    </div>
  );
}
