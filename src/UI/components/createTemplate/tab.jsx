import { useState } from 'react';
import { FlexBox } from '../reusable/layout/flexBox';

const Tab = (props) => {
  const { children } = props;
  const [tab, setTab] = useState(true);
  const style1 = {
    p: 10,
    brt: 10,
    bg: tab ? 'white' : 'transparent',
    c: tab ? 'black' : 'grey',
  };
  const style2 = {
    p: 10,
    brt: 10,
    bg: !tab ? 'white' : 'transparent',
    c: !tab ? 'black' : 'grey',
  };

  return (
    <FlexBox column pt={20}>
      <FlexBox g={10}>
        <FlexBox {...style1} onClick={() => setTab(true)} pointer>
          Template Fields
        </FlexBox>
        <FlexBox {...style2} onClick={() => setTab(false)} pointer>
          Template Settings
        </FlexBox>
      </FlexBox>
      <FlexBox h="100%" column bg="white">
        {tab ? children[0] : children[1]}
      </FlexBox>
    </FlexBox>
  );
};
export { Tab };
