import * as React from "react";

interface Props {
  title: string;
}

const Experience: React.FunctionComponent<Props> = props => {
  const { title, children } = props;
  return (
    <div>
      <h3>{title}</h3>
      {children}
    </div>
  );
};

export default Experience;
