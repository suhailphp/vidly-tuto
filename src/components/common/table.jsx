import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const Table = ({ onSort, columns, sortColumn, data }) => {
  return (
    <table className="table">
      <TableHeader onSort={onSort} columns={columns} sortColumn={sortColumn} />
      <TableBody data={data} columns={columns} />
    </table>
  );
};

export default Table;
