import React from 'react'
import { MdOutlineDelete, MdModeEditOutline, MdOutlineCheck } from "react-icons/md";

const priorityController = [
  {
    color: "info",
    label: "Low",
  },
  {
    color: "warning",
    label: "Medium",
  },
  {
    color: "danger",
    label: "High",
  },
];

const Uncomplete = (props) => {
  const { title, description, handleDelete, handleEdit, priority, handleCompleted } = props;

  return (
    <li>
  <div>
    <h6 className= "title">
      {title}
      <span className={`ms-2 badge bg-${priorityController[priority].color}`}>
        {priorityController[priority].label}
      </span>
    </h6>
    <p className="description">{description}</p>
  </div>
  <div>
    <button className="btn btn-success m-1" onClick={handleCompleted}>
      <MdOutlineCheck />
    </button>
    <button className="btn btn-warning m-1" onClick={handleEdit}>
      <MdModeEditOutline />
    </button>
    <button className="btn btn-danger" onClick={handleDelete}>
      <MdOutlineDelete />
    </button>
  </div>
</li>
  )
}

export default Uncomplete