import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classes from './App.module.scss';
import logo from './logo.svg';
import Filters from '../filters';
import CardList from '../cardList';
import Tabs from '../tabs';
import { getTickets } from '../../redux/actions';

const App = ({ fetchData }) => {
  App.defaultProps = {
    fetchData: () => {},
  };

  const obj = {
    price: '13 400 P',
  };

  useEffect(() => fetchData());

  return (
    <section className={classes.App}>
      <img src={logo} alt="Логотип" className={classes['App-logo']} />

      <div className={classes['App--content']}>
        <div>
          <Filters />
        </div>

        <div>
          <Tabs />
          <CardList price={obj.price} />
          <button type="button" className={classes['App--button']}>
            Показать еще 5 билетов
          </button>
        </div>
      </div>
    </section>
  );
};

App.propTypes = {
  fetchData: PropTypes.func,
};

function mapStateToProps(state) {
  const { tickets } = state;
  return { tickets };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: () => dispatch(getTickets()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
