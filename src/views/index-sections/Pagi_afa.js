import React from "react";
import Paginatio from './Paginatio.js';

// reactstrap components
import {

  Container,

  Pagination,
  PaginationItem,
  PaginationLink,

} from "reactstrap";

// core components

function Paginatt() {
  const [iconPills, setIconPills] = React.useState("1");
  const [pills, setPills] = React.useState("1");
  return (
    <>
      <div className="section section-tabs"
      id="pagi-section">
        <Container>
            <Pagination>
            <Paginatio totalRecords={80} pageLimit={2} pageNeighbours={1} />
              </Pagination>
        </Container>
      </div>
      
    </>
  );
}

export default Paginatt;
