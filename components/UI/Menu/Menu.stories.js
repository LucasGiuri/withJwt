import React from 'react';
import { storiesOf } from '@storybook/react';
import Menu from './Menu';

const links = [
  {id: 1, page: "/", text: "Home"},
  {id: 2, page: "/dashboard", text: "Dashboard"},
];

storiesOf('Menu')
  .add('Menu default', () => (
    <Menu links={links} />
  ))