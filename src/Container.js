import React from 'react';

//destructuring
const Container = ({ children }) => (
  <div 
    // jsx expression
    style={styles.container}
  >
    { children }
  </div>
);

const styles = {
    container: {
        margin: '0 auto'
        ,padding: '50px 100px'
    }
};

export default Container;