import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Content } from './layout';
import { ChartComponent } from './pages/chart';
import { Home } from './pages/home';
import { WalletComponent } from './pages/wallet';

export default function AppRouter() {
  const LoadingMessage = () => <div>Loading..,</div>;

  return (
    <Content>
      <Suspense fallback={<LoadingMessage />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chart" element={<ChartComponent />} />
          <Route path="/wallet" element={<WalletComponent />} />
        </Routes>
      </Suspense>
    </Content>
  );
}
