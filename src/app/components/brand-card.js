import React from "react";

import PropTypes from "prop-types";

const BrandCard = (props) => {
  return (
    <>
      <div
        className="category-card-category-card"
      >
        <img
          alt={props.imageAlt}
          src={'/assets/productBranding.png'}
          className="category-card-image"
        />
      </div>
      <style jsx>
        {`
          .category-card-category-card {
            flex: auto;
            cursor: pointer;
            display: flex;
            position: relative;
            transition: 0.3s;
            align-items: center;
            flex-direction: column;
          }
          .category-card-category-card:hover {
            color: var(--dl-color-pallet-yellow);
            transform: scale(1.2);
          }
          .category-card-image {
            width: 100%;
            height: 100%;
            margin-bottom: var(--dl-space-space-unit);
            object-position: bottom;
          }
          .category-card-text {
            line-height: 14px;
          }
          @media (max-width: 767px) {
            .category-card-category-card {
              width: 48%;
            }
            .category-card-image {
              width: 100%;
              height: 250px;
            }
          }
          @media (max-width: 479px) {
            .category-card-category-card {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  );
};

BrandCard.defaultProps = {
  categoryImg:
    "https://images.unsplash.com/photo-1519947486511-46149fa0a254?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEyfHxjaGFpcnxlbnwwfHx8fDE2NTI4MTgxODk&ixlib=rb-1.2.1&w=1500",
  imageAlt: "image",
  name: "Desks",
};

BrandCard.propTypes = {
  categoryImg: PropTypes.string,
  imageAlt: PropTypes.string,
  name: PropTypes.string,
};

export default BrandCard