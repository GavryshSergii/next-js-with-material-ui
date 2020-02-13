import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import ExampleGrid from './grids';
import ExampleButton from './buttons';

const App = () => (
  <Container maxWidth='md'>
    <Box my={4}>
      <ExampleGrid/>
      <ExampleButton/>
    </Box>
  </Container>
);

export default App;
