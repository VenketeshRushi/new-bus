import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeData, saveData1 } from "../../Redux/ticket/ticket.action";

export default function EachDeckSeat({ id, color, disable }) {
  const [select, setSelect] = useState(false);
  const dispatch = useDispatch();

  function handleClick(id) {
    if (select === true) {
      dispatch(removeData(id));
      console.log("removing", id);
      setSelect(!select);
    } else {
      dispatch(saveData1(id));
      console.log("saving", id);
      setSelect(!select);
    }
  }

  return (
    <div>
      <button
        name={id}
        style={
          select
            ? {
                backgroundColor: "green",
                width: "80px",
                height: "40px",
                color: "white",
                borderRadius: "5px",
              }
            : {
                backgroundColor: color,
                width: "80px",
                height: "40px",
                color: "white",
                borderRadius: "5px",
              }
        }
        disabled={disable}
        onClick={() => handleClick(id)}
      >
        {id}
      </button>
    </div>
  );
}
