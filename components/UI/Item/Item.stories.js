import React from 'react';
import { storiesOf } from '@storybook/react';
import Item from './Item';


const name = "Shalion";
const date = "01/01/2001";
const avgPriceCarethy = 5.2;
const avgPriceAmazon = 4.2;

storiesOf('Item')
  .add('Item default', () => (
    <Item name={name} />
  ))
  .add('Item with name and date', () => (
    <Item name={name} date={date} />
  ))
  .add('Item with name and avgPriceCarethy', () => (
    <Item name={name} avgPriceCarethy={avgPriceCarethy} />
  ))
  .add('Item with name and avgPriceAmazon', () => (
    <Item name={name} avgPriceAmazon={avgPriceAmazon} />
  ))
  .add('Item with name, date and avgPriceCarethy', () => (
    <Item name={name} date={date} avgPriceCarethy={avgPriceCarethy} />
  ))
  .add('Item with name, date and avgPriceAmazon', () => (
    <Item name={name} date={date} avgPriceAmazon={avgPriceAmazon} />
  ))
  .add('Item with name, avgPriceCarethy and avgPriceAmazon', () => (
    <Item 
      name={name} 
      avgPriceAmazon={avgPriceAmazon} 
      avgPriceCarethy={avgPriceCarethy} />
  ))
  .add('Item with name, date, avgPriceCarethy and avgPriceAmazon', () => (
    <Item 
      name={name} 
      date={date} 
      avgPriceAmazon={avgPriceAmazon} 
      avgPriceCarethy={avgPriceCarethy} />
  ))
