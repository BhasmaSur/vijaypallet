import React from 'react'

import PropTypes from 'prop-types'

const BlogPostCard = (props) => {
  return (
    <>
      <div className={`blog-post-card-blog-post-card ${props.rootClassName} `}>
        <img
          alt={props.imageAlt}
          src={props.imageSrc}
          className="blog-post-card-image"
        />
        <div className="blog-post-card-container">
          <span className="blog-post-card-text">{props.newProp}</span>
          <span className="blog-post-card-text1">{props.description}</span>
          <a
            href={props.linkTo}
            target="_blank"
            rel="noreferrer noopener"
            className="button"
          >
            Read more
          </a>
        </div>
      </div>
      <style jsx>
        {`
          .blog-post-card-blog-post-card {
            width: 100%;
            display: flex;
            position: relative;
            max-width: 400px;
            align-self: stretch;
            transition: 0.3s;
            flex-direction: column;
            justify-content: space-between;
          }
          .blog-post-card-blog-post-card:hover {
            transform: scale(1.02);
          }
          .blog-post-card-image {
            flex: 1;
            width: 100%;
            object-fit: cover;
          }
          .blog-post-card-container {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-halfunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
            background-color: var(--dl-color-gray-white);
          }
          .blog-post-card-text {
            color: var(--dl-color-gray-black80);
            font-size: 22px;
            font-style: normal;
            margin-top: var(--dl-space-space-unit);
            font-weight: 500;
            line-height: 28px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .blog-post-card-text1 {
            color: var(--dl-color-gray-black50);
            font-size: 16px;
            font-style: normal;
            margin-bottom: var(--dl-space-space-twounits);
          }

          @media (max-width: 991px) {
            .blog-post-card-blog-post-card {
              max-width: 48%;
            }
          }
          @media (max-width: 767px) {
            .blog-post-card-blog-post-card {
              max-width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

BlogPostCard.defaultProps = {
  imageAlt: 'image',
  rootClassName: '',
  newProp: 'Chic sofa designs for 2022',
  imageSrc:
    'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHZlbmljZXxlbnwwfHx8fDE2MjYyNzIyOTA&ixlib=rb-1.2.1&w=1500',
  description: 'Consectetur adipiscing elit duis tristique sollicitudin nibh',
  linkTo: '',
}

BlogPostCard.propTypes = {
  imageAlt: PropTypes.string,
  rootClassName: PropTypes.string,
  newProp: PropTypes.string,
  imageSrc: PropTypes.string,
  description: PropTypes.string,
  linkTo: PropTypes.string,
}

export default BlogPostCard
