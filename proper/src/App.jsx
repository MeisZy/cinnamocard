import React, { Suspense } from 'react';

const Panels = React.lazy(() => import('./components/Panels.jsx'));

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading Panels...</div>}>
        <Panels />
      </Suspense>
    </>
  );
}

export default App;
