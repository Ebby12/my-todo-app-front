import React, { useState } from "react";
import "./task.css";
import Button from "../../components/Button/button";
import Actionmodal from "../../components/ActionModal/actionmodal";

function Task() {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <div>
      <table>
        <thead>
          <th>ID</th>
          <th>Name</th>
          <th>Description</th>
          <th>Actions</th>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>complete assignment</td>
            <td class="description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
              laudantium modi magni dolore ea nostrum. Corporis, minima hic.
              Voluptatum vel, dolorem voluptate sit deleniti dolor ipsa eligendi
              harum nostrum sapiente!
            </td>
            <td>
              <span
                class="action"
                onClick={() => {
                  setActiveModal("create");
                }}
              >
                Create
              </span>
              <span
                class="action"
                onClick={() => {
                  setActiveModal("edit");
                }}
              >
                Edit
              </span>
              <span
                class="action"
                onClick={() => {
                  setActiveModal("delete");
                }}
              >
                Delete
              </span>
            </td>
          </tr>
        </tbody>
      </table>
      <Button title={"Add New Task"} />

      {activeModal === "create" && (
        <Actionmodal
          title="Create New Task"
          closeAction={() => setActiveModal(null)}
          task={null}
          buttonLabel="Create"
          modalAction={null}
        />
      )}

      {activeModal === "edit" && (
        <Actionmodal
          title="Edit Task"
          closeAction={() => setActiveModal(null)}
          task={null}
          buttonLabel="Update"
          modalAction={null}
        />
      )}

      {activeModal === "delete" && (
        <Actionmodal
          title="Delete Task"
          closeAction={() => setActiveModal(null)}
          task={null}
          buttonLabel="Delete"
          modalAction={null}
        />
      )}
    </div>
  );
}

export default Task;
