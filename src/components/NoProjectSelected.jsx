import React from "react";
import Logo from "../assets/no-projects.png";
import Button from "./Button.jsx";

export const NoProjectSelected = ({ onStartAddProject }) => {
  return (
    <div className="mt-24 text-center w-2/3">
      <img src={Logo} alt="clipboard" className="w-16 object-contain mx-auto" />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No Project Selected
      </h2>
      <p className="text-stone-400 mb-4">
        Please select or create a new project to continue
      </p>
      <p className="mt-8">
        <Button onClick={onStartAddProject}>Create new project</Button>
      </p>
    </div>
  );
};
