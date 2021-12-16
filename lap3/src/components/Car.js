import React, {useState} from "react";

const dom =  (
    <>
      <h1>Hi React !!</h1>
      <p>My name is Tae</p>
      </>
  );

  function Car(){
    const [color,setColor] = useState("red");

      const id = "440302183-4";
    return(
        <>
            {dom}
            <p>ID: {id}</p>
            <p>My color is {color}</p>
            <button onClick={()=> {
                setColor("blue");
                }}
                >CHANGE</button>
        </>
        );
  }

  export default Car
