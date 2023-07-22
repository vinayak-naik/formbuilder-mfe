import {
  BorderColor,
  DateRange,
  Link,
  List,
  MailOutline,
  Tag,
  Title,
  ToggleOff,
} from '@mui/icons-material';
import { useState } from 'react';
import { Grid } from '@mui/material';
import { FlexBox } from '../reusable/layout/flexBox';
import { Text } from '../reusable/single/text';
import styles from './createTemplate.module.css';

const GridItem = (props) => {
  const { data } = props;
  const Icon = () => data.icon;
  return (
    <Grid item sm={3} xs={4}>
      <FlexBox p={15} br={5} g={3} id={styles.gridItem} pointer>
        <Icon />
        <Text size={14} capitalize pointer>
          {data.text}
        </Text>
      </FlexBox>
    </Grid>
  );
};

const AddFieldButton = () => {
  const [visible, setVisible] = useState(false);
  const iconStyle = { fontSize: '16px', color: 'grey', marginBottom: '2px' };
  const options = [
    { text: 'Plain Text', icon: <Title sx={iconStyle} /> },
    { text: 'Rich Text', icon: <BorderColor sx={iconStyle} /> },
    { text: 'Number', icon: <Tag sx={iconStyle} /> },
    { text: 'Boolean', icon: <ToggleOff sx={iconStyle} /> },
    { text: 'Email', icon: <MailOutline sx={iconStyle} /> },
    { text: 'Url', icon: <Link sx={iconStyle} /> },
    { text: 'DateTime', icon: <DateRange sx={iconStyle} /> },
    { text: 'Select', icon: <List sx={iconStyle} /> },
  ];
  return (
    <FlexBox p={10} pt={30} column>
      <FlexBox column>
        <FlexBox
          p={10}
          brt={5}
          b="1-black"
          onClick={() => setVisible(!visible)}
          bg="#e7e6ef"
        >
          add field
        </FlexBox>
        {visible && (
          <FlexBox brb={5} p={10} bt="0-white" b="1-black">
            <Grid container>
              {options.map((item, i) => (
                <GridItem key={i} data={item} />
              ))}
            </Grid>
          </FlexBox>
        )}
      </FlexBox>
    </FlexBox>
  );
};

export { AddFieldButton };
