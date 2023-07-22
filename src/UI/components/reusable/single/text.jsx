const Text = (props) => {
  const { children, size, bold, capitalize, pointer } = props;
  const rem = 1;
  const fontSize = size * rem || 16;
  const fontWeight = bold ? 'bold' : 'normal';
  const textTransform = capitalize ? 'capitalize' : 'none';
  const cursor = pointer ? 'pointer' : 'auto';

  return (
    <p style={{ fontSize, fontWeight, textTransform, cursor }}>{children}</p>
  );
};
export { Text };
