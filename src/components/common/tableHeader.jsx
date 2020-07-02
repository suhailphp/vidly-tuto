import React, { Component } from "react";

class TableHeader extends Component {
  raisSort = (column) => {
    if (column) {
      let order =
        this.props.sortColumn.column === column &&
        this.props.sortColumn.order === "asc"
          ? "desc"
          : "asc";
      this.props.onSort({ column, order }); //passing sortColumn object to Handle sort
    }
  };
  renderSortIcon = (column) => {
    if (this.props.sortColumn.column !== column.path) return null;
    if (this.props.sortColumn.order === "desc")
      return <i className="fa fa-sort-asc"></i>;
    return <i className="fa fa-sort-desc"></i>;
  };

  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map((column) => (
            <th
              key={column.label || column.key}
              onClick={() => this.raisSort(column.path)}
              style={{ cursor: "pointer" }}
            >
              {column.label} {this.renderSortIcon(column)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
