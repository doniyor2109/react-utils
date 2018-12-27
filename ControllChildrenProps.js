import React from 'react';

function ControllChildrenProps({ children, ...props }) {
  return React.Children.map(children, (child) => {
    return React.cloneElement(child, props);
  });
}
