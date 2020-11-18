import React, { Component } from "react";
import PropTypes from 'prop-types';

class Input extends Component {
  static defaultProps = {
    wrapperDiv: false,
    className: 'form-group',
    labelClassName: '',
    inputClassName: '',
    placeholder: null,
    value: null,
    label: null,
    labelFor: null,
    labelStart: true,
    type: 'text',
    min: null,
    max: null,
  }

  renderInput() {
    const {
      inputClassName,
      labelClassName,
      label,
      labelFor,
      labelStart,
      type,
      placeholder,
      value,
      min,
      max,
      onChange,
    } = this.props;

    const input = <input
      id={labelFor && labelFor}
      className={inputClassName}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      min={min}
      max={max}
    />;

    const labelSeparatelyMode = !!(labelFor);

    if (!label) {
      return input;
    }

    if (labelSeparatelyMode) {
      return (
        <>
          <label htmlFor={labelFor} className={labelClassName}>{label}</label>
          {input}
        </>
      );
    }

    return (
      <label className={labelClassName}>
        {labelStart && label}{input}{!labelStart && label}
      </label>
    );
  }

  render() {
    const {className, wrapperDiv} = this.props;

    return wrapperDiv ?
      <div className={className}>{this.renderInput()}</div> :
      this.renderInput();
  }
}

Input.propTypes = {
  className: PropTypes.string,
  labelClassName: PropTypes.string,
  inputClassName: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  label: PropTypes.string,
  labelFor: PropTypes.string,
  labelStart: PropTypes.bool,
  type: PropTypes.string,
  min: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  max: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
};

export default Input;