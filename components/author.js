import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Author = (props) => {
  return (
    <>
      <div className={`author-author ${props.rootClassName} `}>
        <div className="author-details"></div>
      </div>
      <style jsx>
        {`
          .author-author {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
          }
          .author-details {
            gap: var(--dl-layout-space-unit);
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          @media (max-width: 991px) {
            .author-author {
              gap: var(--dl-layout-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

Author.defaultProps = {
  rootClassName: '',
}

Author.propTypes = {
  rootClassName: PropTypes.string,
}

export default Author
