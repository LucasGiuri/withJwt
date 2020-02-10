import React, { useState } from 'react';
import { SearchContainer, Input, ButtonContainer } from './InputSearch.styles';
import Button from '../Button/Button';

function inputSearch({placeholder, onSearch, onReset}) {
  const [ isDisabled, setDisabledStatus ] = useState(true);
  const [ inputValue, setInputValue ] = useState('');

  function onChange(e) {
    const { value } = e.target;
    setInputValue(value);
    setDisabledStatus(value.length > 1 ? false : true);
  };

  function onClickSearch() {
    onSearch(inputValue);
  };

  function onClickReset() {
    setInputValue('');
    setDisabledStatus(true);
    onReset();
  };

  return (
    <SearchContainer>
      <Input type="text" placeholder={placeholder} value={inputValue} onChange={onChange} />
      <ButtonContainer>
        <Button text={"Search"} onClick={onClickSearch} isDisabled={isDisabled} />
        <Button text={"Reset"} onClick={onClickReset} isDisabled={isDisabled} />
      </ButtonContainer>
    </SearchContainer>
  )
};

export default inputSearch;
