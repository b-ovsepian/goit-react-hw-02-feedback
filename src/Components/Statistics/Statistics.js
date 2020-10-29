import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const P = styled.p`
  margin-top: 0;

  &::not(::last-child) {
    margin-bottom: 8px;
  }
`;

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <P>Good: {good}</P>
      <P>Neutral: {neutral}</P>
      <P>Bad: {bad}</P>
      <P>Total: {total}</P>
      <P>
        Positive feedback:
        {isNaN(positivePercentage) ? 0 : positivePercentage.toFixed(2)}%
      </P>
    </>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
