import React from "react";
import { Table } from "antd";

const ListingTable = ({ loading, columns, data }) => (
  <div>
    <div>
      <Table
        loading={loading}
        key={columns.key}
        dataSource={[...data]}
        columns={columns}
        rowKey="uid"
      />
    </div>
  </div>
);
export default ListingTable;
