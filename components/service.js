import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Service = (props) => {
  return (
    <>
      <div className={`service-service ${props.rootClassName} `}>
        <h3 className="service-title">{props.title}</h3>
        <span className="service-description">
          {props.description1 ?? (
            <Fragment>
              <span className="service-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </span>
            </Fragment>
          )}
        </span>
      </div>
      <style jsx>
        {`
          .service-service {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            position: relative;
            max-width: 350px;
            align-items: flex-start;
            border-color: #151515;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-fourunits);
            border-bottom-width: 1px;
          }
          .service-title {
            font-size: 30px;
            font-style: normal;
            font-weight: 500;
            line-height: 36px;
            white-space: nowrap;
          }
          .service-description {
            font-size: 22px;
            line-height: 36px;
          }
          .service-text {
            display: inline-block;
          }

          .serviceroot-class-name2 {
            padding-right: 0px;
          }

          .serviceroot-class-name4 {
            margin-right: var(--dl-layout-space-threeunits);
            padding-right: 0px;
          }

          @media (max-width: 991px) {
            .service-service {
              gap: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-unit);
            }
            .service-title {
              font-size: 18px;
              line-height: 16px;
            }
            .service-description {
              font-size: 14px;
              line-height: 21px;
            }
            .serviceroot-class-name {
              max-width: 100%;
            }
            .serviceroot-class-name1 {
              max-width: 100%;
            }
            .serviceroot-class-name2 {
              max-width: 100%;
            }
            .serviceroot-class-name3 {
              max-width: 100%;
            }
            .serviceroot-class-name4 {
              max-width: 100%;
            }
            .serviceroot-class-name5 {
              max-width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Service.defaultProps = {
  description1: undefined,
  title: 'Branding',
  rootClassName: '',
}

Service.propTypes = {
  description1: PropTypes.element,
  title: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Service
