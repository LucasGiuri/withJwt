import React from 'react';
import renderer from 'react-test-renderer';
import Item from './Item';

describe('Item', () => {
  const name = "Shalion";
  const date = "01/01/2001";
  const avgPriceCarethy = 5.2;
  const avgPriceAmazon = 4.2;

  it('Item basic render snapshoot', () => {
    const component = renderer.create(<Item name={name} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })

  it('Item render snapshoot with name and date', () => {
    const component = renderer.create(<Item name={name} date={date} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })

  it('Item render snapshoot with name and avgPriceCarethy', () => {
    const component = renderer.create(<Item name={name} avgPriceCarethy={avgPriceCarethy} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })

  it('Item render snapshoot with name and avgPriceAmazon', () => {
    const component = renderer.create(<Item name={name} avgPriceAmazon={avgPriceAmazon} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })

  it('Item render snapshoot with name, date and avgPriceCarethy', () => {
    const component = renderer.create(
      <Item name={name} date={date} avgPriceCarethy={avgPriceCarethy} />
      );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })

  it('Item render snapshoot with name, date and avgPriceAmazon', () => {
    const component = renderer.create(
      <Item name={name} date={date} avgPriceAmazon={avgPriceAmazon} />
      );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })

  it('Item render snapshoot with name, avgPriceCarethy and avgPriceAmazon', () => {
    const component = renderer.create(
      <Item 
        name={name} 
        avgPriceCarethy={avgPriceCarethy} 
        avgPriceAmazon={avgPriceAmazon} />
      );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })

  it('Item render snapshoot with name, date, avgPriceCarethy and avgPriceAmazon', () => {
    const component = renderer.create(
      <Item 
        name={name} 
        date={date}
        avgPriceCarethy={avgPriceCarethy} 
        avgPriceAmazon={avgPriceAmazon} />
      );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })
})
