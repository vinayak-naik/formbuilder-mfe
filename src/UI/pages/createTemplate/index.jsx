import React from 'react';
import { CreateTemplateContainer } from '../../components/createTemplate';
import { PageHeader } from '../../components/createTemplate/pageHeader';
import { TemplateNameInput } from '../../components/createTemplate/templateNameInput';
import { AddFieldButton } from '../../components/createTemplate/addFieldButton';
import { Tab } from '../../components/createTemplate/tab';

const CreateTemplate = () => {
  return (
    <CreateTemplateContainer>
      <PageHeader />
      <TemplateNameInput />
      <Tab>
        <AddFieldButton />
        <div>tab 2</div>
      </Tab>
    </CreateTemplateContainer>
  );
};

export default CreateTemplate;
