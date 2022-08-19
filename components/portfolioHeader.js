import React from "react";
import "./portfolioHeader.css";

class PortfolioHeader extends React.Component {
  render() {
    return (
      <div className="d-flex flex-row flex-wrap portfolio-header-text">
        <div>{this.props.projectTitle}</div>
        <div className="ml-auto" style={{ maxWidth: "350px" }}>
          {this.props.projectOverview}
        </div>
      </div>
    );
  }
}
export default PortfolioHeader;
