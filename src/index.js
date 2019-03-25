'use strict';
import './config';
import {Data} from './dataForm';

$(() => {
    new Data({
        el: $('#dataForm')[0],
    });
});


