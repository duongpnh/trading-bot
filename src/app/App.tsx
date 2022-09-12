import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import '../styles/app.scss';
import { containerBuilder } from './app.container';
import './app.i18n';
import AppRouter from './AppRouter';
import { Header, MainMenu } from './layout';

containerBuilder();

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <MainMenu />
      <AppRouter />
    </BrowserRouter>
  );
}
