import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Results } from './Results';

export const Routess = () => (
  <div className="p-4">
    <Routes>

    <Route exact path="/" element={<Navigate to="/search" />} />

      {/* <Route exact path="/">
      <Redirect to="/search" />
      </Route> */}

    <Route exact path="/search" element={<Results />} />

      {/* <Route exact path="/search">
        <Results />
      </Route> */}

    <Route exact path="/images" element={<Results />} />

      {/* <Route path="/images">
        <Results />
      </Route> */}

    <Route exact path="/news" element={<Results />} />

      {/* <Route path="/news">
        <Results />
      </Route> */}

    <Route exact path="/videos" element={<Results />} />

      {/* <Route path="/videos">
        <Results />
      </Route> */}

    </Routes>
  </div>
);

