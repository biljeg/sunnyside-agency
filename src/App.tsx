import GlobalStyle from "./components/shared/global";
import CSSReset from "./components/shared/reset";

const App = () => {
  const x = 2;

  return (
    <div>
      <GlobalStyle />
      <CSSReset />
      <div>{x}</div>
    </div>
  );
};

export default App;
