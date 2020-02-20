import React, { Component } from 'react';
import Link from './Link';
import { connect } from 'react-redux';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import ExampleGrid from './grids';
import ExampleButton from './buttons';
import Counter from './Counter';
import Clock from './Clock';

const App = ({
               error,
               lastUpdate,
               light,
               linkTo,
               NavigateTo,
               placeholderData,
               title,
             }) => (
               <div>
                 <div>
                   <h1>{title}</h1>
                   <Clock lastUpdate={lastUpdate} light={light}/>
                   <Counter/>
                   <nav>
                     <Link href={linkTo}>
                       <a>Navigate: {NavigateTo}</a>
                     </Link>
                   </nav>
                   {placeholderData && (
                     <pre>
                       <code>{JSON.stringify(placeholderData, null, 2)}</code>
                     </pre>
                   )}
                   {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}
                 </div>
                 <Container maxWidth='md'>
                   <Box my={4}>
                     <ExampleGrid/>
                     <ExampleButton/>
                   </Box>
                 </Container>
               </div>

);

export default connect(state => state)(App);
