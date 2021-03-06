import React from "react";
import { Table } from "antd";
import uuid from "uuid";

const ListingTable = ({ loading, columns, data }) => {
  // adding key to each row of data
  for (let i = 0; i < data.length; i++) {
    !data[i].key ? (data[i].key = uuid()) : null; // TODO: proof check the null value
  }
  return (
    <div>
      <div>
        <Table loading={loading} dataSource={[...data]} columns={columns} />
      </div>
    </div>
  );
};
export default ListingTable;
