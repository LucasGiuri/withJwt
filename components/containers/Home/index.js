import Router from 'next/router';
import Cookies from 'universal-cookie';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Fragment } from 'react';
import * as operations from '../../../store/operations';
import List from '../../UI/List/List';
import Title from '../../UI/Title/Title';
import InputSearch from '../../UI/InputSearch/InputSearch';

const Home = ({products, token, isLoading, sortByName, searchByName, loadData}) => {
  const loading = "Loading...";
  const section = "Sensors";
  const nameKey = "description";

  const [name, setName] = useState(`-${nameKey}`);

  useEffect(() => {
    if (!products && !token) {
      const cookies = new Cookies();
      loadData(cookies.get('vintraAT'));
    }
  }, []);

  function sort(key) {
    const isReverted = key[0] !== '-';
    if (key.includes(nameKey)) {
      setName((isReverted ? '-':'') + nameKey);
      sortByName(name);
    }
  };

  function onSearch(name){
    searchByName(name);
  };

  function sortByTitle() {
    sort(name);
  };

  function editItem(id) {
    Router.push(`/product/${id}`, `/product/${id}`);
  };
  
  function deleteItem(id) {
    console.log(id);
  };

  function onReset() {
    loadData();
  };

  return (
    <Fragment>
      <Title text={section} isBold={true} centered={true} />
      <InputSearch placeholder="Search a product !" onSearch={onSearch} onReset={onReset} />
      {isLoading ? 
        <Title text={loading} isBold={true} centered={true} /> : 
        <Fragment>
          <List 
            list={products} 
            sortByName={sortByTitle} 
            editItem={editItem} 
            deleteItem={deleteItem} />
        </Fragment>
      }
    </Fragment>
  )
};

Home.propTypes = {
  products: PropTypes.array.isRequired,
  loadData: PropTypes.func,
  isLoading: PropTypes.bool,
  sortByName: PropTypes.func.isRequired,
  searchByName: PropTypes.func.isRequired,
};

Home.defaultProps = {
  isLoading: false,
  loadData: () => {}
};

Home.getInitialProps = async ({store, req}) => {
  if (req) {
    const cookies = new Cookies(req.headers.cookie);
    const cookie = cookies.get('vintraAT') ? cookies.get('vintraAT') : null;
    await store.dispatch(operations.getData(cookie));
  }
  return {};
};

export default Home;