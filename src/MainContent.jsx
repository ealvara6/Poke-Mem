import React from 'react';

function MainContent(props) {
  const { children } = { ...props };
  return (
    <section className="main-content">
      {children}
    </section>
  );
}

export default MainContent;
