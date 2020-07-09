//inputs--> no of elements, page size, active page

import React from 'react';
import _ from 'lodash'

const Pagination = (props) => {
  const { pageSize, countOfElements, activePage, changePage } = props

  const pagesNo = Math.ceil(countOfElements / pageSize)

  const pages = _.range(1, pagesNo + 1)

  console.log(pages)
  return (<nav>
    {/* to disappear pagination if pageno =< one */}
  {pagesNo>1 && <ul className="pagination">

    {
    pages.map(page =>
      <li key={page} className={page === activePage ? "page-item active" : "page-item"} >
        <span style={{cursor:'pointer'}} onClick={() => changePage(page)} className="page-link" aria-disabled="true">
          {page}
        </span>
      </li>
    )}
  </ul>}
  </nav>
  );
}

export default Pagination;