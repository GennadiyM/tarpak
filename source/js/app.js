import 'element-closest-polyfill';
import 'core-js/features/dom-collections/for-each';
import 'core-js/features/promise';
import firstBlock from './components/first-block.js';
import menu from './components/menu.js';
import headerScroll from './components/header.js';
import products from './components/products.js';
import phone from './components/tel.js';
import form from './components/form.js';

window.onload = function () {
  firstBlock();
  menu();
  headerScroll();
  products();
  phone();
  form();
};
