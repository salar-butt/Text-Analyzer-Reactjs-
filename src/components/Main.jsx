import React, { useState } from "react";

function Main() {
  // ------------------------textarea state
  const [Text, setText] = useState("");

  // ------------------------stylesheet background cokoiur change

  const [styleSheet, setStyleSheet] = useState({
    color: "black",
    backgroundColor: "white",
  });

  //------------------------button color text change
  const [btnText, setbtnText] = useState("Enable Dark Mode");
  const [heading, setHeading] = useState({
    color: "black",
  });

  const [navbar, setNavbar] = useState({
    backgroundColor: "#438888",
  });

  const handleDarkClick = () => {
    if (styleSheet.color === "black") {
      setStyleSheet({
        color: "white",
        backgroundColor: "gray",
        border: "1px solid white",
      });

      setbtnText("Enable Light Mode");
      setHeading({
        color: "white",
      });

      setNavbar({
        backgroundColor: "black",
      });
    } 
    
    
    else {
      setStyleSheet({
        color: "black",
        backgroundColor: "white",
      });

      setHeading({
        color: "black",
      });

      setNavbar({
        backgroundColor: "#438888",
      });

      setbtnText("Enable Dark Mode");
    }
  };



  const Uppercase=()=>{
    let newText = Text.toUpperCase();
    setText(newText); 
  }

  const Lowercase=()=>{
    let newletter = Text.toLocaleLowerCase();
    setText(newletter); 
  }
  const Clear=()=>{
    let clearText = '';
    setText(clearText)
  }

  const CopyText = () => {
    let info = document.getElementById("textarea");
    info.select();
    document.execCommand("copy");
    // setTimeout(() => {
    //   alert("Text Copied: " + info.value);
    // }, 1000);
  };

  const RemovingSpace=()=>{
    let removing=Text.split(/[ ]+/);
    setText(removing.join(' '))
  }
  
  return (
    <>
      <div style={styleSheet}>
        <nav className="nav" style={navbar}>
          <div className="main1">
            <h1>Navbar</h1>
          </div>
          <div className="main2">
            <button className="toggle" onClick={handleDarkClick}>
            
              {btnText}
            </button>
          </div>
        </nav>

        <div className="head">
          <h1 className="heading" style={heading}>
            Enter The Text analize Bellow
          </h1>

          {/* ----------------------------------------text area */}
          <textarea
            name=""
            id="textarea"
            cols="160"
            rows="22"
            value={Text}
            onChange={(e) => {
            setText(e.target.value);
          //  console.log(Text,"moving")
            }}
          ></textarea>


          {/*----------------------------------------- buttondiv */}
          <div className="buttondiv">
            <button onClick={Uppercase}>Convert to Upper-Case</button>
            <button onClick={Lowercase} >Convert to Lower-Case</button>
            <button onClick={Clear}>Clear Text</button>
            <button onClick={CopyText}>Copy Text</button>
            <button onClick={RemovingSpace}>Extra Space Removing</button>
          </div>


{/* -----------------------------------------------------Info Part */}
          <h1>Your Text Summary</h1>
          <p> {Text.length>0 ? Text.trim().split(" ").length : 0} Words {Text.length} Characters</p>
          <p>{0.08 * Text.split(" ").length}minutes to Read All Words/Texts</p>

          <h1>Preview Summary</h1>
          <p>{Text.length>0?Text:"Enter something in the box above to preview it here"}</p>
        </div>
      </div>
    </>
  );
}

export default Main;
