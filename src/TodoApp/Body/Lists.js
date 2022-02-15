import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import ListItem from "../../components/ListItem";
import Loader from "../../components/Loader";
import Uncomplete from "../../components/Uncomplete";

const Lists = (props) => {
  const { todo, fetchTodoList, setEditData, loader } = props;

  const handleDelete = async (id) => {
    const response = await axios.delete(`https://infodev-server.herokuapp.com/api/todos/${id}`);

    if (response?.data?.id) {
      fetchTodoList();
      toast("Deleted successfully");
    }
  };

  const handleCompleted = async (id) => {
    const response = await axios.put(`https://infodev-server.herokuapp.com/api/todos/${id}`, {
      completed: true
    });

    if (!response?.data?.id) {
      fetchTodoList();
      toast("Task Completed");
    } else {
      alert("Something went wrong");
    }
  }

  return (
    <>
    <div id="lecture-list">
      {loader ? (
        <div className="text-center p-5">
          <Loader />
        </div>
      ) : (
        <ul>
          {todo.map((item) => (
            item.completed === true ? 
            <ListItem
              key={item._id}
              id={item._id}
              priority={item.priority}
              title={item.name}
              description={item.description}
              handleDelete={() => handleDelete(item._id)}
            /> : null
          ))}
        </ul>
      )}
    </div>
    <div id="uncomplete-task">
    {loader ? (
        <div className="text-center p-5">
          <Loader />
        </div>
      ) : (<ul>
        {todo.map((item) => (
              item.completed === true ? 
              null : <Uncomplete
              key={item._id}
              id={item._id}
              priority={item.priority}
              title={item.name}
              description={item.description}
              handleDelete={() => handleDelete(item._id)}
              handleEdit={() => setEditData(item)}
              handleCompleted={() => handleCompleted(item._id)}
            />
            ))}
        </ul>)} 
    </div>
    </>
    
  );
};

export default Lists;
