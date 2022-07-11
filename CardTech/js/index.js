import { getProducts, getMobiles, getTablets, getNotebooks, getFindValue } from './firebase.js';
import {renderCards} from './cards.js';

renderCards(getProducts());

const mobiles = document.querySelector('.mobiles');

const tablets = document.querySelector('.tablets');

const notebooks = document.querySelector('.notebooks');

const all = document.querySelector('.all');

const findValue = document.querySelector('#searchInput');

findValue.addEventListener('change', () => renderCards(getFindValue()));

mobiles.addEventListener('click', () => renderCards(getMobiles()));

all.addEventListener('click', () => renderCards(getProducts()));

tablets.addEventListener('click', () => renderCards(getTablets()));

notebooks.addEventListener('click', () => renderCards(getNotebooks()));