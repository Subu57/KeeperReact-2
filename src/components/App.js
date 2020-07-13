import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes"

function customNote(cust){
return (
<Note 
key={cust.key}
title={cust.title}
content={cust.content}
/>
);
}

function App() {
  return (
    <div>
      <Header />
      {notes.map(customNote)}
      <Footer />
    </div>
  );
}

export default App;
