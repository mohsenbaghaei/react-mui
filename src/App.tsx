import { Suspense, lazy } from "react";
import "./App.css";
const MuiTypography = lazy(() => import("./components/MuiTypography"));
const MuiButton = lazy(() => import("./components/MuiButton"));
const MuiTextField = lazy(() => import("./components/MuiTextField"));
const MuiSelect = lazy(() => import("./components/MuiSelect"));
const MuiRadioGroup = lazy(() => import("./components/MuiRadioButton"));
const MuiCheckBox = lazy(() => import("./components/MuiCheckBox"));
const MuiSwitch = lazy(() => import("./components/MuiSwitch"));
const MuiRaiting = lazy(() => import("./components/MuiRating"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={""}>
        <MuiTypography />
        <MuiButton />
        <MuiTextField />
        <MuiSelect />
        <MuiRadioGroup />
        <MuiCheckBox />
        <MuiSwitch />
        <MuiRaiting />
      </Suspense>
    </div>
  );
}

export default App;
