/** @jsxImportSource @emotion/react */
import PropTypes from 'prop-types';
import { exploreIndustry } from '../../FHTSubcategoryLandingPageStyle';

const ExploreIndustryCard = ({ imgSource, industryName }) => (
  <div css={() => exploreIndustry()}>
    <div className="explore-industry-card max-w-[266.389px] h-auto m-3">
      <img
        className="max-w-full h-auto"
        src={imgSource}
        alt="nothing"
        loading="lazy"
      />
      <div className="flex justify-center">{industryName}</div>
    </div>
  </div>
);

ExploreIndustryCard.propTypes = {
  imgSource: PropTypes.any.isRequired,
  industryName: PropTypes.string.isRequired,
};

export default ExploreIndustryCard;
