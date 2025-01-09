/** @jsxImportSource @emotion/react */
import PropTypes from "prop-types";

const HomeIcon = ({ color }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_7930_37575)">
      <path
        d="M5 12H3L12 3L21 12H19"
        stroke={color ? color : "#667085"}
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 12V19C5 19.5304 5.21071 20.0391 5.58579 20.4142C5.96086 20.7893 6.46957 21 7 21H17C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19V12"
        stroke={color ? color : "#667085"}
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 21V15C9 14.4696 9.21071 13.9609 9.58579 13.5858C9.96086 13.2107 10.4696 13 11 13H13C13.5304 13 14.0391 13.2107 14.4142 13.5858C14.7893 13.9609 15 14.4696 15 15V21"
        stroke={color ? color : "#667085"}
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_7930_37575">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const TaskIcon = ({ color }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_7930_37569)">
      <path
        d="M9 7H6C5.46957 7 4.96086 7.21071 4.58579 7.58579C4.21071 7.96086 4 8.46957 4 9V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H15C15.5304 20 16.0391 19.7893 16.4142 19.4142C16.7893 19.0391 17 18.5304 17 18V15"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 15.0002H12L20.5 6.50023C20.8978 6.1024 21.1213 5.56284 21.1213 5.00023C21.1213 4.43762 20.8978 3.89805 20.5 3.50023C20.1022 3.1024 19.5626 2.87891 19 2.87891C18.4374 2.87891 17.8978 3.1024 17.5 3.50023L9 12.0002V15.0002Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 5L19 8"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_7930_37569">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const ActiveTaskIcon = ({ color }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_7930_37581)">
      <path
        d="M9 7H6C5.46957 7 4.96086 7.21071 4.58579 7.58579C4.21071 7.96086 4 8.46957 4 9V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H15C15.5304 20 16.0391 19.7893 16.4142 19.4142C16.7893 19.0391 17 18.5304 17 18V15"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 15.0002H12L20.5 6.50023C20.8978 6.1024 21.1213 5.56284 21.1213 5.00023C21.1213 4.43762 20.8978 3.89805 20.5 3.50023C20.1022 3.1024 19.5626 2.87891 19 2.87891C18.4374 2.87891 17.8978 3.1024 17.5 3.50023L9 12.0002V15.0002Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 5L19 8"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_7930_37581">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const Breadcrumb = ({ items, color = "#667085", activeColor = "#038C8C" }) => (
  <nav
    aria-label="breadcrumb"
    className="w-full text-left justify-start items-start align-middle"
  >
    <ol className="flex xs:flex-col sm:flex-col ssm:flex-row md:flex-row lg:flex-row xl:flex-row items-center xs:items-start sm:items-start ssm:items-center md:items-center lg:items-center xl:items-center w-full px-4 py-2 bg-white">
      {items.map((item, index) => {
        let IconComponent;
        const isLastItem = index === items.length - 1;

        if (index === 0) {
          IconComponent = HomeIcon;
        } else if (isLastItem) {
          IconComponent = ActiveTaskIcon;
        } else {
          IconComponent = TaskIcon;
        }

        return (
          <li
            key={item.text}
            className="flex items-center font-sans text-sm antialiased font-normal leading-normal"
          >
            <IconComponent color={isLastItem ? activeColor : color} />

            <a
              href={item.url}
              style={{
                color: isLastItem ? activeColor : color,
              }}
              className={`no-underline ml-2 ${
                isLastItem ? "font-semibold" : ""
              }`}
            >
              {item.text}
            </a>
            {index < items.length - 1 && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 mx-2 text-gray-400"
                viewBox="0 0 20 20"
                fill={color}
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                  stroke={color}
                />
              </svg>
            )}
          </li>
        );
      })}
    </ol>
  </nav>
);

Breadcrumb.propTypes = {
  items: PropTypes.array.isRequired,
  color: PropTypes.string,
  activeColor: PropTypes.string,
};

Breadcrumb.propTypes = {
  items: PropTypes.array.isRequired,
  color: PropTypes.string,
};

export default Breadcrumb;
