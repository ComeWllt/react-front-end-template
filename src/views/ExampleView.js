import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const mapStateToProps = state => ({
  message1: state.example1,
  message2: state.example2,
});

function ExampleView({ message1, message2 }) {
  return <div>{`${message1} ${message2}`}</div>;
}

ExampleView.propTypes = {
  message1: PropTypes.string.isRequired,
  message2: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(ExampleView);
