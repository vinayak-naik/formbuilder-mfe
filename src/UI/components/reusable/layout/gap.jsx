import React from 'react';

const Gap = (props) => {
  const { height, five, ten, twenty } = props;

  const size = five ? 5 : ten ? 10 : twenty ? 20 : height;

  const paddingTop = `${size}px`;

  return <div style={{ paddingTop }} />;
};

export { Gap };
