import React from 'react';
import renderer from 'react-test-renderer';
import List from './List';
import 'jest-styled-components';

const list = [{
    id: 5, name: 'American Crew Champú Anticaspa 250 ml',
    fetch_date: '26/11/2019', avg_price_amazon: 9,
    avg_price_druni: null, avg_price_douglas: null,
    avg_price_carethy: 8.71, avg_price_notino: 9,
    avg_price_perfumesclub: 8.85, avg_price_nutritienda: null,
    avg_price_sephora: null, avg_price_elcorteingles: null,
    avg_price_fundgrube: null, avg_price_primor: null,
    avg_price_carrefour: null, avg_price_maquillalia: null,
    avg_price_ulabox: null
  },
  { 
    id: 5, name: 'American Crew Champú Anticaspa 250 ml',
    fetch_date: '27/11/2019', avg_price_amazon: 9,
    avg_price_druni: null, avg_price_douglas: null,
    avg_price_carethy: 8.71, avg_price_notino: 9,
    avg_price_perfumesclub: 8.58, avg_price_nutritienda: null,
    avg_price_sephora: null, avg_price_elcorteingles: null,
    avg_price_fundgrube: null, avg_price_primor: null,
    avg_price_carrefour: null,avg_price_maquillalia: null,
    avg_price_ulabox: null
  },
  { 
    id: 5, name: 'American Crew Champú Anticaspa 250 ml',
    fetch_date: '28/11/2019', avg_price_amazon: 9,
    avg_price_druni: null, avg_price_douglas: null,
    avg_price_carethy: 8.71, avg_price_notino: 9,
    avg_price_perfumesclub: 7.51, avg_price_nutritienda: null,
    avg_price_sephora: null, avg_price_elcorteingles: null,
    avg_price_fundgrube: null, avg_price_primor: null,
    avg_price_carrefour: null, avg_price_maquillalia: null,
    avg_price_ulabox: null
  }
];

describe('List', () => {
  it('List basic render snapshoot with basic list', () => {
    const component = renderer.create(<List list={list} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })

  it('List click on sortByName', () => {
    const sortByName = jest.fn();
    const component = (<List list={list} sortByName={sortByName} />);
    const tree = renderer.create(component);
    const title = tree.root.findByProps({id: "sortByName"})
    title.props.onClick();
    expect(sortByName).toHaveBeenCalledTimes(1);
  })
})
