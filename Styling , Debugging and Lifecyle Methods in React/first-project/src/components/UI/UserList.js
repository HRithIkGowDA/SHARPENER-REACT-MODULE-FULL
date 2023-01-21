import React from "react";
import UserItem from "./UserItem";

const UserList = (props) => {
  return (
    <div className="d-grid gap-3">
      {props.items.map((item) => (
        <UserItem id={item.id} name={item.name} age={item.age} college={item.college} />
      ))}
    </div>
  );
};

export default UserList;

{
  /* <div class="p-2 bg-light border">name ;</div>
    <div class="p-2 bg-light border">Grid item 2</div>
    <div class="p-2 bg-light border">Grid item 3</div> */
}
