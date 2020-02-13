import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Link from '../Link';
import ProTip from '../ProTip';
import Copyright from './Copyright';
import React from 'react';

const Footer = () => (
  <Container maxWidth='md'>
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

export default Footer;
