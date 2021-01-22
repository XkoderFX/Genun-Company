import { Menu, Toolbar } from '@material-ui/core';
import React from 'react';
import About from '../components/layout/About';
import MainMenu from '../components/layout/MainMenu';

const IndexPage = () => (
  <>
    <MainMenu items={['בית', 'תוצאות', 'הזמנה']} brand="גינון"></MainMenu>
    <About />
  </>
);

export default IndexPage;
