import React, { Component } from "react";
import _ from "lodash";

class TableBody extends Component {
  render() {
    let { columns, data } = this.props;
    return (
      <tbody>
        {data.map((item) => (
          <tr key={item._id}>
            {columns.map((column) => (
              <td key={item._id + (column.label || column.key)}>
                {_.get(item, column.path)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
