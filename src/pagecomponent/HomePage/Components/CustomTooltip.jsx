import { useState, useCallback } from "react";
import { debounce } from "lodash";

const CustomTooltip = ({ children, title, placement = "top" }) => {
  const [isOpen, setOpen] = useState(false);

  const handleClick = useCallback(
    debounce(() => {
      setOpen((prevOpen) => !prevOpen);
    }, 300),
    []
  );

  return (
    <div className="relative inline-block">
      <button
        type="button"
        onClick={handleClick}
        className="startyourjourney bg-transparent hover:shadow-2xl font-normal hover:font-semibold cursor-pointer text-xl sm:text-sm xs:text-sm ssm:text-base md:text-xl p-3"
      >
        {children}
      </button>
      {isOpen && (
        <div className={`custom-tooltip ${placement}`}>
          {title}
          <div className={`tooltip-arrow ${placement}`}></div>
        </div>
      )}
    </div>
  );
};

export default CustomTooltip;
