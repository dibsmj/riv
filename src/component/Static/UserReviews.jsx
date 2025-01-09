/* eslint-disable no-undef */
/** @jsxImportSource @emotion/react */
import UserReviewStyles from './UserReviewStyles';
import UserImage from '../../../assets/FirstPage/Pic.png';

const UserReviews = () => (
  <div
    css={UserReviewStyles}
    className=" flex flex-row xs:flex-wrap sm:flex-wrap"
  >
    <div className=" flex-shrink-0 xs:flex-0 sm:flex-0 ssm:flex-shrink-0 md:flex-shrink-0 lg:flex-shrink-0 m-0 xs:m-auto sm:m-auto ssm:m-0 md:m-0 lg:m-0">
      <img src={UserImage} alt="UserImage" />
    </div>
    <div className=" flex-0 xs:flex-0 sm:flex-0 ssm:flex-1 md:flex-1 lg:flex-1 ml-3">
      <div className="usersayauthor">David J. Karem</div>
      <div>Businessmen</div>
      <div className="usersaydesc">
        Forget about spam, advertising mailings, hacking and attacking robots.
        Keep your real mailbox clean and secure. Temp Mail provides temporary,
        secure, anonymous, free, disposable email address. Stalkers and
        disgruntled acquaintances use the Internet to find addresses, phone
        numbers and other personal details about their targets. Identity thieves
        use personal information numbers and other personal details.
      </div>
    </div>
  </div>
);

export default UserReviews;
