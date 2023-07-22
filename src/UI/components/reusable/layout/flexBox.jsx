const FlexBox = (props) => {
  const {
    children,
    customStyle,
    left,
    right,
    column,
    between,
    alignStart,
    alignEnd,
    g,
    p,
    pt,
    pb,
    pl,
    pr,
    m,
    mt,
    mb,
    c,
    bg,
    h,
    w,
    br,
    brtl,
    brtr,
    brt,
    brbl,
    brbr,
    brb,
    wrap,
    wrapReverse,
    b,
    bt,
    pointer,
  } = props;

  const justifyContent = left? 'flex-start': right? 'flex-end': between? 'space-between': 'center'; // prettier-ignore

  const alignItems = alignStart? 'flex-start': alignEnd? 'flex-end': 'center'; // prettier-ignore

  const flexDirection = column ? 'column' : 'row';

  const flexWrap = wrap ? 'wrap' : wrapReverse ? 'wrap-reverse' : 'no-wrap';

  const width = w || '100%';
  const height = h || 'auto';
  const cursor = pointer ? 'pointer' : 'auto';

  const radius = {
    borderTopLeftRadius: brtl || brt || br || 0,
    borderTopRightRadius: brtr || brt || br || 0,
    borderBottomLeftRadius: brbl || brb || br || 0,
    borderBottomRightRadius: brbr || brb || br || 0,
  };
  const border = b ? `${b.split('-')[0]}px solid ${b.split('-')[1]}` : 'none';
  const borderTop = bt
    ? `${bt.split('-')[0]}px solid ${bt.split('-')[1]}`
    : border;

  return (
    <div
      style={{
        display: 'flex',
        justifyContent,
        flexDirection,
        alignItems,
        height,
        width,
        gap: `${g}px`,
        padding: `${p}px`,
        paddingTop: `${pt}px`,
        paddingBottom: `${pb}px`,
        paddingLeft: `${pl}px`,
        paddingRight: `${pr}px`,
        margin: `${m}px`,
        marginTop: `${mt}px`,
        marginBottom: `${mb}px`,
        color: c,
        backgroundColor: bg,
        flexWrap,
        border,
        borderTop,
        cursor,
        ...radius,
        ...customStyle,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export { FlexBox };
