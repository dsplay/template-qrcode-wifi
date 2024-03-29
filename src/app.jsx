import React, { useMemo } from 'react';
import { I18nextProvider } from 'react-i18next';
import { Loader, useScreenInfo, useTemplateVal } from '@dsplay/react-template-utils';
import Intro from './components/intro';
import Main from './components/main';
import i18n from './i18n';
import './app.sass';
import background from './images/default-bg-01.jpg';

const MIN_LOADING_DURATION = 2000;

// fonts to preload
// @font-face's must be defined in fonts.sass or another in-use style file
const fonts = [
  'Roboto Thin',
  'Roboto Light',
  'Roboto Regular',
  'Roboto Medium',
  'Roboto Bold',
  'Roboto Condensed',
  'Oswald',
];

// other tasks (Promises) to run during template intro
const tasks = [];

function App() {
  const { screenFormat } = useScreenInfo();
  const logo = useTemplateVal('logo');

  // images to preload
  const images = useMemo(() => [logo], [logo]);

  return (
    <I18nextProvider i18n={i18n}>
      <Loader
        placeholder={<Intro />}
        fonts={fonts}
        images={images}
        minDuration={MIN_LOADING_DURATION}
        tasks={tasks}
      >
        <div className={`app fade-in ${screenFormat}`} style={{ backgroundImage: `url("${background}")` }}>
          <Main />
        </div>
      </Loader>
    </I18nextProvider>
  );
}

export default App;
