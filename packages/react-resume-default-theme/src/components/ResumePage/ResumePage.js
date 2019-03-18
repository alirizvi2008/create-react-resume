import * as React from 'react';
import { ResumeContainer, Left, Right } from './ResumePage.styled';
const ResumePage = props => {
    const { children } = props;
    return (<ResumeContainer>
      <Left />
      <Right>
        {React.Children.map(children, child => (<section>{child}</section>))}
      </Right>
    </ResumeContainer>);
};
ResumePage.displayName = 'ResumePage';
export default ResumePage;
