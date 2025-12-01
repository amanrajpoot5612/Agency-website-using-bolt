// CountryCodePicker.js
import React from 'react';
import { getCountries, getCountryCallingCode } from 'react-phone-number-input';
import en from 'react-phone-number-input/locale/en.json'; // Or your desired locale

const CountryCodePicker = ({ value, onChange, ...rest }) => (
  <select
    {...rest}
    value={value}
    onChange={(event) => onChange(event.target.value || undefined)}
  >
    <option value="">{en['ZZ']}</option> {/* 'ZZ' for "Select country" label */}
    {getCountries().map((country) => (
      <option key={country} value={country}>
        {en[country]} +{getCountryCallingCode(country)}
      </option>
    ))}
  </select>
);

export default CountryCodePicker;