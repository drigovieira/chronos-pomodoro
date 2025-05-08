import { Heading } from './components/Heading.tsx';

import './styles/theme.css'
import './styles/global.css'
import {TimerIcon} from "lucide-react";

export function App() {
  return (
    <>
      <Heading>
          Hello World!
          <button>
              <TimerIcon />
          </button>
      </Heading>
      <p>
        To get started, edit <code>src/App.tsx</code> and save to reload.
      </p>
    </>
  );
}
