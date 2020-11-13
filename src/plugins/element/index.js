import Vue from 'vue';
import lang from 'element-ui/lib/locale/lang/en';
import locale from 'element-ui/lib/locale';
import 'element-ui/lib/theme-chalk/index.css';
import { Checkbox, Button, Card } from 'element-ui';

locale.use(lang);

Vue.use(Checkbox, { locale });
Vue.use(Button, { locale });
Vue.use(Card, { locale });