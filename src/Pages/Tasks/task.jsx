import React, { useEffect, useState } from "react";
import "./task.css";
import Button from "../../components/Button/button";
import Actionmodal from "../../components/ActionModal/actionmodal";
import axios from "axios";

function Task() {
  const [activeModal, setActiveModal] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTasks] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5050/tasks").then((res) => {
      console.log(res.data);
      setTasks(res.data);
    });
  }, []);

  const createNewTask = (task) => {
    let data = JSON.stringify({
      title: task.title,
      description: task.description,
      status: "init",
      userId: "1",
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:5050/tasks/create",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        window.location.reload();
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteNewTask = (task) => {
    let config = {
      method: "delete",
      maxBodyLength: Infinity,
      url: `http://localhost:5050/tasks/${task.id}`,
    };

    axios
      .request(config)
      .then((response) => {
        window.location.reload();
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
          {tasks.map((task) => {
            return (
              <tr>
                <td>{task.id}</td>
                <td>{task.title}</td>
                <td class="description">{task.description}</td>
                <td>
                  <span
                    class="action"
                    onClick={() => {
                      setActiveModal("edit");
                      setSelectedTasks(task);
                    }}
                  >
                    Edit
                  </span>
                  <span
                    class="action"
                    onClick={() => {
                      setActiveModal("delete");
                      setSelectedTasks(task);
                    }}
                  >
                    Delete
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Button
        title={"Add New Task"}
        action={() => {
          setActiveModal("create");
        }}
      />

      {activeModal === "create" && (
        <Actionmodal
          title="Create New Task"
          closeAction={() => setActiveModal(null)}
          task={null}
          buttonLabel="Create"
          modalAction={createNewTask}
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
          task={selectedTask}
          buttonLabel="Delete"
          modalAction={deleteNewTask}
        />
      )}
    </div>
  );
}

export default Task;
