
import { ThemeProvider, createTheme, Arwes, Frame, Puffs } from 'arwes';
import CoolDataComponent from './coolDataComponent';
import LoginComponent from './loginComponent';

function App() {
  // display the result on the page
  // todo: css.
  return (
    <ThemeProvider theme={createTheme()}>
      <Arwes animate show >
        <Puffs>
          <Frame animate level={1} corners={3}>
            {a => <>
              <LoginComponent show={a.entered} />
              <CoolDataComponent show={a.entered} />
            </>}
          </Frame>
        </Puffs>
      </Arwes>
    </ThemeProvider>
  );
}

export default App;
