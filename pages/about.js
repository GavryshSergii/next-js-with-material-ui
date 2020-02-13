import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import Link from '../src/components/Link';
import ProTip from '../src/components/ProTip';
import Copyright from '../src/components/footer/Copyright';

const About = () => (
  <Container maxWidth='sm'>
    <Box my={4}>
      <Typography variant="h4" component="h1" gutterBottom>
        Next.js example
      </Typography>
      <Button variant="contained" color="primary" component={Link} naked href="/">
        Go to the main page
      </Button>
      <ProTip/>
      <Copyright/>
    </Box>
  </Container>
);

export default About;
