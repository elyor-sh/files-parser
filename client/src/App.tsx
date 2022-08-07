import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import {Layout} from "./layout";
import {UploadFP} from "./pages/upload";

function App() {
  return (
    <Routes>
        <Route element={<Layout />}>
            <Route path='' element={<Navigate to='/upload' />} />
            <Route path='upload' element={<UploadFP />} />
        </Route>
    </Routes>
  );
}

export default App;
