import React from "react";

import PropTypes from "prop-types";

const SectionInfo = (props) => {
  return (
    <>
      <div
        className={`section-heading-section-heading ${props.rootClassName} `}
      >
        <div className="home-banner">
          <div className="home-container05">
            <span className="home-text19 Heading-custom">
              <h3>{props.heading1}</h3>
            </span>
            <span className="home-text19 Heading-custom">
              <h3>{props.heading2}</h3>
            </span>
          </div>
        </div>
        <span className="section-heading-text1 m-10">{props.subtitle}</span>
      </div>
      <style jsx>
        {`
          .section-heading-section-heading {
            display: flex;
            position: relative;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            flex-direction: column;
          }
          .section-heading-text {
            text-align: center;
            margin-bottom: var(--dl-space-space-unit);
          }
          .section-heading-text1 {
            color: var(--dl-color-gray-black60);
            text-align: center;
            line-height: 24px;
          }
        `}
      </style>
    </>
  );
};

SectionInfo.defaultProps = {
  heading: "TRENDING ITEMS",
  subtitle:
    "Explore our most trending products, new items and the best VPB offers you can buy",
  rootClassName: "",
};

SectionInfo.propTypes = {
  heading: PropTypes.string,
  subtitle: PropTypes.string,
  rootClassName: PropTypes.string,
};

export default SectionInfo;
