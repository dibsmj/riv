// /** @jsxImportSource @emotion/react */
// import Image from "next/image";
// import PropTypes from "prop-types";
// import { css } from "@emotion/react";
// import linkedinIcon from "@/assets/ContactUs/connect.png";
// import ContactUsStyles from "./ContactUsStyles";

// const ContactCard = ({
//   name,
//   email,
//   linkedinUrl,
//   cardImage,
//   country,
//   nameStyles = {},
//   connectStyles = {},
// }) => (
//   <div css={ContactUsStyles} key={name}>
//     <div className="relative m-8">
//       <img
//         alt={name}
//         className={`rounded-t-lg w-full h-auto`}
//         src={cardImage.src}
//       />

//       <div className="absolute top-0 w-full h-full flex flex-col justify-center items-start p-4 bg-white bg-opacity-75 rounded-t-lg mt-28">
//         <h3 className="font font-semibold" css={nameStyles}>
//           {name}
//         </h3>

//         <div className="flex items-center mb-28">
//           <a
//             className="no-underline text-primaryBlack -mt-4"
//             href={`mailto:${email}`}
//           >
//             {email}
//           </a>
//         </div>

//         <div
//           className="flex justify-center mt-2 ml-36 absolute -top-[95px] right-[15px]"
//           css={connectStyles}
//         >
//           <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
//             <Image
//               alt={"LinkedIn Icon"}
//               className={"w-8 h-8 mr-6 -mt-6"}
//               src={linkedinIcon}
//               width={"2rem"}
//               height={"2rem"}
//             />
//           </a>
//         </div>
//       </div>
//     </div>
//   </div>
// );

// ContactCard.propTypes = {
//   name: PropTypes.string.isRequired,
//   email: PropTypes.string.isRequired,
//   linkedinUrl: PropTypes.string.isRequired,
//   cardImage: PropTypes.string.isRequired,
//   country: PropTypes.string.isRequired,
//   nameStyles: PropTypes.object,
//   connectStyles: PropTypes.object,
// };

// export default ContactCard;
