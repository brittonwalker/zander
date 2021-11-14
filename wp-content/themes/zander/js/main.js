/**
 * main.js
 * @description Module assignment
 */

// JS
import '@babel/polyfill';
import './app/Marquee';
import './app/HomePage';
import './app/Essay';
import Controller from './app/Controller';

document.addEventListener("DOMContentLoaded", function() {
	new Controller();
});