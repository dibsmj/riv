/** @jsxImportSource @emotion/react */
import PropTypes from 'prop-types';
import { Checkbox as MuiCheckbox, FormControlLabel } from '@mui/material';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { colors } from '../../constants/stylesConstants';

const CheckBox = ({
  children,
  checked,
  onChange,
  isDisabled,
  className,
  registerField,
}) => (
  <div className={className}>
    <FormControlLabel
      control={
        <MuiCheckbox
          data-testid="checkbox"
          sx={{
            color: colors.primaryBlueDark,
          }}
          // checked={checked}
          onChange={onChange}
          disabled={isDisabled}
          checkedIcon={<CheckBoxIcon sx={{ color: colors.primaryBlueDark }} />}
          {...registerField}
        />
      }
      label={
        <span
          className={`${checked ? 'text-primaryBlueDark' : 'text-neutral400'}`}
        >
          {children}
        </span>
      }
    />
  </div>
);

CheckBox.defaultProps = {
  isDisabled: false,
  className: '',
  registerField: null,
  onChange: () => {},
};

CheckBox.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func,
  isDisabled: PropTypes.bool,
  className: PropTypes.string,
  registerField: PropTypes.any,
};

export default CheckBox;
