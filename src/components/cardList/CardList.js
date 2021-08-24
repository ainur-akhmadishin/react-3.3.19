import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Card from '../card';
import { bufferTickets } from '../../redux/actions';

const CardList = ({ buffer, bufferData, bufferFlag }) => {
  CardList.defaultProps = {
    buffer: [],
    bufferFlag: false,
    bufferData: () => {},
  };

  useEffect(() => {
    bufferData();
  }, [bufferData, bufferFlag]);

  const content = buffer.map((el) => <Card data={el} key={el.price} />);

  return <ul>{content}</ul>;
};

CardList.propTypes = {
  bufferData: PropTypes.func,
  bufferFlag: PropTypes.bool,

  buffer: PropTypes.instanceOf(Object),
};

function mapStateToProps(state) {
  const { buffer, bufferFlag } = state.tickets;
  return { buffer, bufferFlag };
}

function mapDispatchToProps(dispatch) {
  return {
    bufferData: () => dispatch(bufferTickets()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CardList);
