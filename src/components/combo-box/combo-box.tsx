import React, { useState } from 'react';
import './combo-box.css';

interface ComboBoxProps {
  itemList: { label: string; year: number }[];
  value: string;
  onChange: (val: string) => void;
}

export function ComboBox(props: ComboBoxProps) {
  const { itemList, value, onChange } = props;
  const [focused, setFocused] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setFocused(false);
    }, 250);
  };

  const handleClick = (value: string) => {
    onChange(value);
    setFocused(false);
  };

  const filteredItems = value
    ? itemList.filter((item) =>
        item.label.toLocaleLowerCase().includes(value.toLocaleLowerCase())
      )
    : itemList;

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) {
      onChange('');
    }
  };

  return (
    <div>
      <ul className="dropdown">
        <h3>Combo box</h3>
        <input
          id="search"
          onFocus={() => setFocused(true)}
          onBlur={handleBlur}
          type="text"
          placeholder="Search"
          onChange={handleChange}
          value={value}
          onKeyDown={handleKeyPress}
        />
        {focused &&
          filteredItems.map((item) => {
            return (
              <li
                onClick={() => handleClick(item.label)}
                className="dropdown-item"
                key={item.label}
              >
                {item.label}
              </li>
            );
          })}
      </ul>
    </div>
  );
}
