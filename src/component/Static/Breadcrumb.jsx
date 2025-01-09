/* eslint-disable no-undef */
/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react';
import { Breadcrumb } from 'react-bootstrap';
import PropTypes from 'prop-types';

const DynamicBreadcrumb = ({ routeHierarchy }) => {
  const [breadcrumbs, setBreadcrumbs] = useState([]);
  useEffect(() => {
    setBreadcrumbs(routeHierarchy);
  }, []);
  return (
    <Breadcrumb>
      {breadcrumbs.map((item, index) => (
        <Breadcrumb.Item
          key={item.name}
          active={index === breadcrumbs.length - 1}
          href={item.path}
          style={{ fontSize: '1.25rem' }}
          className="urbanist-font"
        >
          {item.name}
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
};

DynamicBreadcrumb.propTypes = {
  routeHierarchy: PropTypes.array.isRequired,
};

export default DynamicBreadcrumb;
