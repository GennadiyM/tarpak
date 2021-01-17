import 'element-closest-polyfill';
import 'core-js/features/dom-collections/for-each';
import 'core-js/features/promise';
import firstBlock from './components/first-block.js';
import scroll from './components/scroll.js';
import menu from './components/menu.js'
import headerScroll from './components/header.js'
import products from './components/products.js'

window.onload = function () {
  firstBlock();
  scroll();
  menu();
  headerScroll();
  products();
};
