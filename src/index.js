'use strict'
import './styles.css';
import debounce from 'lodash.debounce';
import errorNotice from './js/errorNotice.js';
import infoNotice from './js/infoNotice.js'
import { country } from './js/fechCountry.js';
import menuTemplate from './templates/menu.hbs';
import menuItem from './templates/item.hbs';

const refs = {
    input: document.querySelector('.input__field'),
    countryName: document.querySelector('.country__list'),
}

refs.input.addEventListener('input', debounce(() => {
    inputValue();
}, 500))

const inputValue = () => {
    const inpuValue = refs.input.value;
    if (!inpuValue) return infoNotice();

    country(inpuValue).then(data => {
        refs.countryName.innerHTML = '';
        if(!data)return;

        if (data.length === 1) {
            const markup = menuTemplate(data);
            refs.countryName.insertAdjacentHTML('beforeend', markup);
            return
        };

        if (data.length >= 2 && data.length <= 10) {
            const list = menuItem(data);
            refs.countryName.insertAdjacentHTML('beforeend', list);
            return;
        };

        if (data.length > 10) {
            errorNotice();
            return;
        };
    });
}













