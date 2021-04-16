'use strict'
import './styles.css';
import debounce from 'lodash.debounce';
import errorNotice from './js/errorNotice.js';
import { country } from './js/fechCountry.js';
import menuTemplate from './templates/menu.hbs';
import menuItem from './templates/item.hbs';

const input = document.querySelector('.input');
const countryName = document.querySelector('.country')

const inputValue = () => {
    const inpuValue = input.value;
    if (inpuValue === '') {
        return
    }
    country(inpuValue).then(data => {
        countryName.innerHTML = '';
        if (data === 'd') {
            return
        }
        if (data.length === 1) {
            const markup = menuTemplate(data);
            countryName.insertAdjacentHTML('beforeend', markup)
            return
        }
        if (data.length >= 2 && data.length <= 10) {
            const list = menuItem(data);
            countryName.insertAdjacentHTML('beforeend', list)
            return
        }
        if (data.length > 10) {
            errorNotice();
            return
        }
    });
}
input.addEventListener('input', debounce(() => {
    inputValue();
}, 500))












