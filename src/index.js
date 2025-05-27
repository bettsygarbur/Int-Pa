import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from 'react-intl';

import JobsList from "./components/jobslist";

import localeEsMessages from "./locales/es.json";
import localeEnMessages from "./locales/en.json";

const locale = navigator.language.startsWith('es') ? 'es-ES' : 'en-US';
const messages = locale.startsWith('es') ? localeEsMessages : localeEnMessages;

ReactDOM.render(
  <IntlProvider locale={locale} messages={messages}>
    <JobsList locale={locale} />
  </IntlProvider>,
  document.getElementById("root")
);
