/** @jsxImportSource @emotion/react */
import PropTypes from "prop-types";
import Image from "next/image";

const LogosList = ({ logos }) => (
  <div className="w-full inline-flex flex-nowrap overflow-hidden mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)">
    <ol
      className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
      css={{ listStyleType: "none" }}
    >
      {logos.map((logo, index) => (
        <li key={logo.alt}>
          <Image alt={logo.alt} src={logo.src} />
        </li>
      ))}
    </ol>
    <ol
      className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
      css={{ listStyleType: "none" }}
      aria-hidden="true"
    >
      {logos.map((logo, index) => (
        <li key={logo.alt}>
          <Image alt={logo.alt} src={logo.src} />
        </li>
      ))}
    </ol>
  </div>
);

LogosList.propTypes = {
  logos: PropTypes.any.isRequired,
};

export default LogosList;
