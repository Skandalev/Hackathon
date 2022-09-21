import { useState } from "react";
import SelectInReport from "./selectInReport";
import Adress from "./Adress";
import Picture from "./Picture";
import Details from "./Details";
import { useDispatch } from "react-redux";
import { updateReport , updateRequest} from "../reportSlicer";
import { Link } from "react-router-dom";
export default function Form() {
  let [page, setPage] = useState(0);
  const FormPage = ["select", "picture", "adress", "details"];
  const pageContainer = () => {
    if (page === 0) {
      return <selectInReport />;
    } else if (page === 1) {
      return <Picture />;
    } else if (page === 2) {
      return <Adress />;
    } else if (page === 3) {
      return <Details />;
    }
  };

  const handleSubmition = (values) => {
    const value = {
      selectReport: values.selectReport,
      picture: values.picture,
      adress: values.adress,
      email: values.email,
      phone: values.phone,
      fullName: values.fullName,
    };
    dispatch(updateReport(value), updateRequest(value));
  };
  const dispatch = useDispatch();

  return (
    <div>
      <div>{FormPage[page]}</div>
      <div>{pageContainer()}</div>
      <button
        disabled={page === 0}
        onClick={() => setPage((currPage) => currPage - 1)}
      >
        previus
      </button>
      {page === 3 ? (
         <Link to="/">
        <button
          onSubmit={(values) => handleSubmition(values)}
          onClick={() => {
            if (page === FormPage.lenght - 1) {
              alert("FORM SUBMITTED");
              console.log(FormPage);
            } else {
              setPage((currPage) => currPage + 1);
            }
          }}
        >
          Submit
        </button></Link>
      ) : (
        <button
          onClick={() => {
            if (page === FormPage.lenght - 1) {
              alert("FORM SUBMITTED");
              console.log(FormPage);
            } else {
              setPage((currPage) => currPage + 1);
            }
          }}
        >
          Next
        </button>
      )}
    </div>
  );
}
