import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ pageNumber, info, updatePageNumber }) => {
  // let next = () => {
  //   if (pageNumber === info.pages) return;
  //   updatePageNumber((x) => x + 1);
  // };

  // let prev = () => {
  //   if (pageNumber === 1) return;
  //   updatePageNumber((x) => x - 1);
  // };

  let pageChange = (data) => {
    console.log(data.selected);
    updatePageNumber(data.selected + 1);
  };

  return (
    <>
      {/* <div className="d-flex justify-content-center my-4 gap-4"> */}
      {/* <div onClick={prev} className="btn btn-primary fs-5">
        Prev
      </div>
      <div onClick={next} className="btn btn-primary fs-5">
        Next
      </div> */}
      <ReactPaginate
        className="pagination justify-content-center my-4 gap-4"
        nextLabel="Next"
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        previousLabel="Prev"
        previousClassName="btn btn-primary fs-5"
        nextClassName="btn btn-primary fs-5"
        activeClassName="active"
        pageCount={info?.pages}
        onPageChange={pageChange}
        pageClassName="page-item"
        pageLinkClassName="page-link"
      />
      {/* </div> */}
    </>
  );
};

export default Pagination;
