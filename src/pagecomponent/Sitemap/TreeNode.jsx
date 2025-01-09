/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TreeNode = ({ node }) => {
  const [expanded, setExpanded] = useState(true);

  const hasChildren = node.children && node.children.length > 0;

  const handleLinkClick = () => {
    setExpanded(true);
  };

  return (
    <div className="tree-node ml-4 border-l md:pl-4 lg:pl-4 ">
      <button
        type="button"
        className="flex items-center cursor-pointer border-none bg-transparent mb-1"
        onClick={() => setExpanded(!expanded)}
      >
        {hasChildren && (
          <span
            className={`mr-2 transform transition-transform duration-200 ${
              expanded ? 'rotate-90' : ''
            }`}
          >
            ▶
          </span>
        )}
        <a
          href={node.link}
          className="no-underline text-[16px] font-medium font-['Arial'] text-primaryBlack hover:text-blue-500"
          onClick={handleLinkClick}
        >
          <span>{node.name}</span>
        </a>
      </button>
      {hasChildren && expanded && (
        <div className="ml-4">
          {node.children.map((child, index) => (
            <TreeNode key={child.name} node={child} />
          ))}
        </div>
      )}
    </div>
  );
};

TreeNode.propTypes = {
  node: PropTypes.shape({
    name: PropTypes.string.isRequired,
    link: PropTypes.string,
    children: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default TreeNode;
