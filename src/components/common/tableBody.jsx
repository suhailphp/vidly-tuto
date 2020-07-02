import React, { Component } from "react";

class TableBody extends Component {
  render() {
    let { columns, data } = this.props;
    return (
      <tbody>
        {data.map((d) => (
          <tr key={d._id}>
            {columns.map((column) => (
              <td key={d._id + (column.label || column.key)}>
                {d[column.path]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
