import React from "react";
import _ from "lodash";

const Pagination = ({ pageSize, totalRecords, onPageChange }) => {
  let totalPage = Math.ceil(totalRecords / pageSize);
  console.log(totalPage);
  const pages = _.range(1, totalPage + 1);

  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li key={page} className="page-item">
            <a className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
