import React from "react";
import Student from "./Student";

function App() {

  return (

    <div className="student-container">

      <Student
        name="Aaradhya"
        course="B.Tech CSE"
        marks="95"
      />

      <Student
        name="Riya"
        course="B.Tech IT"
        marks="89"
      />

      <Student
        name="Rahul"
        course="B.Tech AIML"
        marks="92"
      />

    </div>

  );

}

export default App;