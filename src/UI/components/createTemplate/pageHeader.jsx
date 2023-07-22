import { FlexBox } from '../reusable/layout/flexBox';
import { Text } from '../reusable/single/text';

const PageHeader = () => {
  return (
    <FlexBox left p={10}>
      <Text capitalize>New Template</Text>
    </FlexBox>
  );
};
export { PageHeader };
