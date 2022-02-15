import React from "react";
import { MdOutlineDelete} from "react-icons/md";

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

const ListItem = (props) => {
  const { title, description, handleDelete, priority } = props;
  return (
    <li>
    <div>
      <h6 className= "title completed">
        {title}
        <span className={`ms-2 badge bg-${priorityController[priority].color}`}>
          {priorityController[priority].label}
        </span>
      </h6>
      <p className="description">{description}</p>
    </div>
    <div>
      <button className="btn btn-danger" onClick={handleDelete}>
        <MdOutlineDelete />
      </button>
    </div>
  </li> 
  );
};

export default ListItem;