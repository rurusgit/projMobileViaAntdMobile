import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, Link } from 'dva/router';
import HomePage from './routes/homepage/homepage';

import zh from './locales/zh/zh.json';
import en from './locales/en/en.json';
import { addLocaleData , IntlProvider } from 'react-intl';

let langObj = {
    'en': en,
    'zh': zh
};

function chooseLocale(){
    let navLang = navigator.language.split('_')[0];
    switch(navLang.toLowerCase()){
        case 'en-us':
            return langObj.en;
        case 'zh-cn':
            return langObj.zh;
        default:
            return langObj.en;
    }
}

export default function({ history }) {
  return (
  	<IntlProvider locale={'en'} messages={chooseLocale()}>
	    <Router history={history}>
	      <Route path="/" component={HomePage} />
	    </Router>
    </IntlProvider>
  );
};
