import React, { useState } from "react";
import close from "../../Assets/closeicon.png";
import Button from "../Button/button";
import "./actionModal.css";
function Actionmodal({ closeAction, title, task, modalAction, buttonLabel }) {
  const [name, setName] = useState(task?.name || "");
  const [description, setDescription] = useState(task?.description || "");

  return (
    <form class="container">
      <div class="header">
        <span>{title}</span>
        <img onClick={closeAction} src={close} alt="" />
      </div>
      <div class="content">
        <label htmlFor="">Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor="">Description:</label>
        <textarea
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={description}
          rows="4"
          cols="50"
        />
      </div>
      <Button
        title={buttonLabel}
        action={() => modalAction({ title: name, description, id: task?.id })}
      />
    </form>
  );
}

export default Actionmodal;
