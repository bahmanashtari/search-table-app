import React from "react";
import SearchTable from "./SearchTable";

const UsersList = () => (
  <div className="usersList">
    <SearchTable
      key="usersList"
      classNamePostFix="usersList"
      searchInputs={{
        text: {
          type: "text",
          id: "name",
          placeholder: "First Name",
          size: "small"
        },
        dropdown: {
          type: "dropdown",
          id: "email",
          label: "Email",
          options: {
            1: "gmail",
            2: "yahoo",
            3: "hotmail"
          }
        }
      }}
      url="https://jsonplaceholder.typicode.com/users"
      tableColumns={[
        {
          title: "Name",
          dataIndex: "name",
          key: "name",
          width: 70,
        },
        {
          title: "Email",
          dataIndex: "email",
          key: "email",
          width: 70
        },
        {
          title: "Address",
          dataIndex: "address",
          key: "address",
          width: 70
        },
        {
          title: "Phone",
          dataIndex: "phone",
          key: "phone",
          width: 40
        },
        {
          title: "Company",
          dataIndex: "company",
          key: "company",
          width: 40
        },
        {
          title: "ID",
          dataIndex: "id",
          key: "id",
          width: 40
        }
      ]}
    />

<SearchTable
      key="todoList"
      classNamePostFix="todoList"
      searchInputs={{
        text: {
          type: "text",
          id: "title",
          placeholder: "Todo Title",
          size: "small"
        },
        dropdown: {
          type: "dropdown",
          id: "status",
          label: "Status",
          options: {
            1: "Not Completed",
            2: "Completed",
            3: "All"
          }
        },
        checkbox: {
          type: "checkbox",
          id: "showCompleted",
          label: "Show Completed Todos",
          style: { margin: "1%" }
        }
      }}
      url="https://jsonplaceholder.typicode.com/todos"
      tableColumns={[
        {
          title: "Title",
          dataIndex: "title",
          key: "title",
          width: 70,
        },
        {
          title: "Completed",
          dataIndex: "completed",
          key: "completed",
          width: 70
        },
        {
          title: "ID",
          dataIndex: "id",
          key: "id",
          width: 70
        }
      ]}
    />
  </div>
);

export default UsersList;
