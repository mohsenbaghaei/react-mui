import { Suspense, lazy } from "react";
import "./App.css";
const MuiTypography = lazy(() => import("./components/MuiTypography"));
const MuiButton = lazy(() => import("./components/MuiButton"));
const MuiTextField = lazy(() => import("./components/MuiTextField"));
const MuiSelect = lazy(() => import("./components/MuiSelect"));
const MuiRadioGroup = lazy(() => import('./components/MuiRadioButton'))
function App() {
  return (
    <div className="App">
      <Suspense fallback={""}>
        <MuiTypography />
        <MuiButton />
        <MuiTextField />
        <MuiSelect />
        <MuiRadioGroup />
      </Suspense>
    </div>
  );
}

export default App;
