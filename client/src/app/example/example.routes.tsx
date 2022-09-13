import React, { lazy } from 'react';
import { Route } from 'react-router-dom';

export default <Route path="/example" element={lazy(() => import('./Example'))} />;
