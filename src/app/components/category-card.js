import React from "react";

import PropTypes from "prop-types";

const CategoryCard = (props) => {
  const { onClickCategory, categoryCode } = props;
  return (
    <>
      <div
        onClick={() => onClickCategory(categoryCode)}
        className="category-card-category-card"
      >
        <img
          alt={props.imageAlt}
          src={props.categoryImg}
          className="category-card-image"
        />
        <span className="category-card-text">{props.name}</span>
      </div>
      <style jsx>
        {`
          .category-card-category-card {
            flex: 0 0 auto;
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
            width: 120px;
            height: 120px;
            object-fit: cover;
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

CategoryCard.defaultProps = {
  categoryImg:
    "https://images.unsplash.com/photo-1519947486511-46149fa0a254?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEyfHxjaGFpcnxlbnwwfHx8fDE2NTI4MTgxODk&ixlib=rb-1.2.1&w=1500",
  imageAlt: "image",
  name: "Desks",
};

CategoryCard.propTypes = {
  categoryImg: PropTypes.string,
  imageAlt: PropTypes.string,
  name: PropTypes.string,
};

export default CategoryCard;
