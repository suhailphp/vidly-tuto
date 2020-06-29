import React from "react";
import _ from "lodash";

const Pagination = ({ pageSize, totalRecords, onPageChange, currentPage }) => {
  let totalPage = Math.ceil(totalRecords / pageSize);
  if (totalPage === 1) return null;
  const pages = _.range(1, totalPage + 1);

  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
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
