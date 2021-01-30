import 'element-closest-polyfill';
import 'core-js/features/dom-collections/for-each';
import 'core-js/features/promise';
import firstBlock from './components/first-block.js';
import menu from './components/menu.js';
import headerScroll from './components/header.js';
import products from './components/products.js';
import bb from './components/bb-slider.js';
import phone from './components/tel.js';
import form from './components/form.js';
import popup from './components/popup.js';

window.onload = function () {
  popup();
  firstBlock();
  menu();
  headerScroll();
  products();
  phone();
  form();
  bb();
};
