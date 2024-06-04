import React from 'react'

import PropTypes from 'prop-types'

const ItemCard = (props) => {
  return (
    <>
      <div className={`item-card-gallery-card ${props.rootClassName} `}>
        <img
          alt={props.imageAlt}
          src={props.imageSrc}
          className="item-card-image"
        />
        <div className="item-card-container">
          <h3 className="item-card-text">{props.name}</h3>
          <div className="item-card-container1">
            <svg viewBox="0 0 1024 1024" className="item-card-icon">
              <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
            </svg>
            <svg viewBox="0 0 1024 1024" className="item-card-icon02">
              <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
            </svg>
            <svg viewBox="0 0 1024 1024" className="item-card-icon04">
              <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
            </svg>
            <svg viewBox="0 0 1024 1024" className="item-card-icon06">
              <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
            </svg>
            <svg viewBox="0 0 1024 1024" className="item-card-icon08">
              <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
            </svg>
          </div>
          <div className="item-card-container2">
            <span className="item-card-currency">{props.currency}</span>
            <span className="item-card-value">{props.value}</span>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .item-card-gallery-card {
            flex: 1;
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .item-card-image {
            top: 0px;
            flex: 1;
            left: auto;
            right: 0px;
            width: 100%;
            bottom: auto;
            object-fit: cover;
          }
          .item-card-container {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .item-card-text {
            color: var(--dl-color-gray-black80);
            font-size: 18px;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            line-height: 14px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .item-card-container1 {
            display: grid;
            grid-gap: var(--dl-space-space-halfunit);
            margin-bottom: var(--dl-space-space-oneandhalfunits);
            grid-template-columns: repeat(5, 1fr);
          }
          .item-card-icon {
            fill: var(--dl-color-pallet-yellow);
            width: 24px;
            height: 24px;
          }
          .item-card-icon02 {
            fill: var(--dl-color-pallet-yellow);
            width: 24px;
            height: 24px;
          }
          .item-card-icon04 {
            fill: var(--dl-color-pallet-yellow);
            width: 24px;
            height: 24px;
          }
          .item-card-icon06 {
            fill: var(--dl-color-pallet-yellow);
            width: 24px;
            height: 24px;
          }
          .item-card-icon08 {
            fill: var(--dl-color-pallet-yellow);
            width: 24px;
            height: 24px;
          }
          .item-card-container2 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .item-card-currency {
            color: var(--dl-color-gray-black50);
            font-style: normal;
            font-weight: 500;
            text-transform: uppercase;
          }
          .item-card-value {
            color: var(--dl-color-gray-black50);
            font-style: normal;
            font-weight: 500;
            text-transform: uppercase;
          }
          .item-card-root-class-name {
            flex: 1;
          }

          .item-card-root-class-name4 {
            flex: 1;
            height: 100%;
          }

          @media (max-width: 767px) {
            .item-card-gallery-card {
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .item-card-image {
              top: 0px;
              left: 0px;
              right: auto;
              bottom: auto;
            }
          }
        `}
      </style>
    </>
  )
}

ItemCard.defaultProps = {
  name: 'Project Title',
  imageSrc:
    'https://images.unsplash.com/photo-1484980972926-edee96e0960d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxmb29kfGVufDB8fHx8MTYyNjQ0OTIzNQ&ixlib=rb-1.2.1&w=1500',
  imageAlt: 'image',
  currency: '$',
  value: '429',
  rootClassName: '',
}

ItemCard.propTypes = {
  name: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  currency: PropTypes.string,
  value: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default ItemCard
