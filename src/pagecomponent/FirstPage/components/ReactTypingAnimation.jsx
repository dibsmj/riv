/** @jsxImportSource @emotion/react */
"use client";
import React, { useState, useEffect, memo } from "react";
import PropTypes from "prop-types";

const ReactTypingAnimation = memo(
  ({ placeholders = [], value = "", onChange, onKeyDown, className }) => {
    const [index, setIndex] = useState(0);
    const [placeholder, setPlaceholder] = useState("");

    useEffect(() => {
      let place = "";
      const typingInterval = setInterval(() => {
        if (place.length < placeholders[index].length) {
          place += placeholders[index][place.length];
          setPlaceholder(place);
        } else {
          clearInterval(typingInterval);
          const deletingInterval = setInterval(() => {
            if (place.length > 0) {
              place = place.slice(0, place.length - 1);
              setPlaceholder(place);
            } else {
              clearInterval(deletingInterval);
              setIndex((index + 1) % placeholders.length);
            }
          }, 100);
        }
      }, 100);
      return () => clearInterval(typingInterval);
    }, [index]);

    return (
      <input
        placeholder={placeholder}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        value={value}
        onKeyDown={onKeyDown}
        className={className}
      />
    );
  }
);

ReactTypingAnimation.propTypes = {
  placeholders: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};

export default ReactTypingAnimation;
