// CountryCodePicker.tsx
import type { ChangeEvent, SelectHTMLAttributes } from 'react';
import { getCountries, getCountryCallingCode } from 'react-phone-number-input';
import en from 'react-phone-number-input/locale/en.json'; // Or your desired locale

interface CountryCodePickerProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'onChange' | 'value'> {
  value?: string;
  onChange: (value?: string) => void;
}

const CountryCodePicker = ({ value, onChange, ...rest }: CountryCodePickerProps) => (
  <select
    {...rest}
    value={value}
    onChange={(event: ChangeEvent<HTMLSelectElement>) => onChange(event.target.value || undefined)}
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