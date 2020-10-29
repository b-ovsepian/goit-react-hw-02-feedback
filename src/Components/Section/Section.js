import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const H2 = styled.h2`
  margin-top: 0;
  margin-bottom: 15px;
`;

const Section = ({ title, children }) => {
  return (
    <>
      <H2>{title}</H2>
      {children}
    </>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

Section.defaultProps = {
  title: "Title template",
};
