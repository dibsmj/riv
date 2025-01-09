/** @jsxImportSource @emotion/react */
"use client";
import PropTypes from "prop-types";

const VideoComponent = ({
  url,
  videoRef,
  handleContextMenu,
  videoWebLoaded,
  getControls,
  className,
}) => (
  <video
    autoPlay={getControls}
    muted
    loop
    id="headerVideo"
    className={className}
    style={{ opacity: videoWebLoaded ? 1 : 0 }}
    playsInline
    ref={videoRef}
    onContextMenu={handleContextMenu}
    preload="metadata"
    loading="lazy"
  >
    <source src={url} type="video/mp4" />
    <track src={null} kind="captions" label="English" />
    Your browser does not support HTML5 video.
  </video>
);

VideoComponent.propTypes = {
  url: PropTypes.string.isRequired,
  videoRef: PropTypes.any.isRequired,
  handleContextMenu: PropTypes.func.isRequired,
  videoWebLoaded: PropTypes.bool.isRequired,
  getControls: PropTypes.bool.isRequired,
  className: PropTypes.string.isRequired,
};

export default VideoComponent;
