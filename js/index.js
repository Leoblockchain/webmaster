import { getProducts, getMobiles } from './firebase.js';
import {renderCards} from './cards.js';

renderCards(getProducts());

const mobiles = document.querySelector('.mobiles');

const all = document.querySelector('.all');

mobiles.addEventListener('click', () => renderCards(getMobiles()));

all.addEventListener('click', () => renderCards(getProducts()));