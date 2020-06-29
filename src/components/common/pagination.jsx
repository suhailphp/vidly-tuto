import React from "react";

const Pagination = ({ pageNo, pageCount, totalRecords }) => {
  let totalPage = Math.ceil(totalRecords / pageCount);
  const item = [];
  for (let i = 1; i < totalRecords; i++) {
    item.push(
      <li class="page-item">
        <a class="page-link" href="#">
          {i}
        </a>
      </li>
    );
  }
  return (
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item">
          <a class="page-link" href="#">
            Previous
          </a>
        </li>

        <li class="page-item">
          <a class="page-link" href="#">
            1
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">
            2
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">
            3
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
