import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Button = styled.button`
  background-color: black;
  color: white;

  font-size: 1em;
  font-weight: 600;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  text-transform: capitalize;

  cursor: pointer;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: white;
    color: black;
  }
`;

const Feedback = ({ options, onLeaveFeedback }) => {
  return options.map((item) => (
    <Button key={item} name={item} onClick={onLeaveFeedback}>
      {item}
    </Button>
  ));
};

export default Feedback;

Feedback.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  addFeedback: PropTypes.func,
};
