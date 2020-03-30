import React from "react";

const List = ({list, handleListItemDelete}) => {
  return(
      <div className="listContainer">
          {
              list && list.map(item => {
                  return <div key={item.id} className="listItemContainer">
                      <div>
                          {item.desc}
                      </div>
                      <button className="deleteButton"
                              onClick={() => {
                                  handleListItemDelete(item.id)
                              }}>
                          X
                      </button>
                  </div>
              })
          }
      </div>
  );
};

export default List;