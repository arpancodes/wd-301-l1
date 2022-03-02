import React from "react";

import "./App.css";
import AppContainer from "./AppContainer";
import Header from "./Header";

const formFields = [
  { id: 1, label: "First Name", type: "text" },
  { id: 2, label: "Last Name", type: "text" },
  { id: 3, label: "Email", type: "email" },
  { id: 4, label: "Date of Birth", type: "date" },
  { id: 5, label: "Phone Number", type: "tel" },
];

function App() {
  return (
    <AppContainer>
      <div className="p-4 mx-auto bg-white shadow-lg rounded-xl">
        <Header
          title={`Welcome to Lesson 5 of $react-typescript with #tailwindcss`}
        />
        {formFields.map((field) => (
          <div key={field.id}>
            <label>{field.label}</label>
            <input
              type={field.type}
              className="border-2 border-gray-200 rounded-lg p-2 m-2 w-full"
            />
          </div>
        ))}
      </div>
    </AppContainer>
  );
}

export default App;
