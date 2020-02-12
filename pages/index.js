import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProTip from '../src/components/ProTip';
import Copyright from '../src/components/Copyright';
import Link from '../src/components/Link';


const Index = () => (
  <Container maxWidth='sm'>
    <Box my={4}>
      <Typography variant="h4" component="h1" gutterBottom>
        Next.js example
      </Typography>
      <Link href="/about" color="secondary">
        Go to the about page
      </Link>
      <ProTip/>
      <Copyright/>
    </Box>
  </Container>
);

export default Index;
