/**
 * main.js
 * @description Module assignment
 */

// JS
import '@babel/polyfill';
import './app/PageTransition';
import Menu from './app/Menu';
import Controller from './app/Controller';
new Controller();
window.headerMenu = new Menu();