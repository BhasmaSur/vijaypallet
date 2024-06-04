import React from 'react'

import PropTypes from 'prop-types'

const SectionHeading = (props) => {
  return (
    <>
      <div
        className={`section-heading-section-heading ${props.rootClassName} `}
      >
        <h1 className="section-heading-text Heading-2">{props.heading}</h1>
        <span className="section-heading-text1">{props.subtitle}</span>
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
  )
}

SectionHeading.defaultProps = {
  heading: 'TRENDING ITEMS',
  subtitle:
    'Explore our monthly most trending products, new items and the best Mobilio offers you can buy',
  rootClassName: '',
}

SectionHeading.propTypes = {
  heading: PropTypes.string,
  subtitle: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default SectionHeading
