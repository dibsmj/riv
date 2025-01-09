/* eslint-disable no-undef */
/** @jsxImportSource @emotion/react */
import PropTypes from 'prop-types';

const SinglePage = ({ data }) => (
  <div className="m-auto blogsingle">
    <div dangerouslySetInnerHTML={{ __html: data }} />
  </div>
);

SinglePage.propTypes = {
  data: PropTypes.any.isRequired,
};

export default SinglePage;
