import './index.scss';

import { render } from 'lit';
import { autorun } from 'mobx';
import App from './App';
import AppStore from './stores/AppStore';

const store = new AppStore();
const root = document.body;

autorun(() => render(App(store), root));
