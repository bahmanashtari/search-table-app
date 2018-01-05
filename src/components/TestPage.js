import React from "react";
import SearchTable from "./SearchTable";

const UsersList = () => (
  <div className="usersList">
    <SearchTable
      key="users-list"
      url="https://jsonplaceholder.typicode.com/users"
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
        },
        checkbox: {
          type: "checkbox",
          id: "showDisabledPatients",
          label: "Show Disabled Patients",
          style: { margin: "1%" }
        }
      }}
      tableColumns={[
        {
          title: "Name",
          dataIndex: "name",
          key: "name",
          width: 70
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
          title: "Avatar",
          dataIndex: "avatar",
          key: "avatar",
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
  </div>
);

export default UsersList;
