import React from "react";

const Pagination = ({ pageSize, totalRecords }) => {
  let totalPage = Math.ceil(totalRecords / pageSize);
  console.log(totalPage);
  const items = [];
  for (let i = 1; i <= totalPage; i++) {
    items.push(
      <li key={i} className="page-item">
        <a className="page-link" href="#">
          {i}
        </a>
      </li>
    );
  }
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item">
          <a className="page-link" href="#">
            Previous
          </a>
        </li>

        {items}

        <li className="page-item">
          <a className="page-link" href="#">
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
