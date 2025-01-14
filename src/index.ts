declare const window: any;

import { NamiWalletApi } from 'nami-wallet-api'
import * as WASM_lib from '@emurgo/cardano-serialization-lib-browser'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'popper.js';
import 'jquery';
import './css/cover.css'
window.$ = window.jQuery = import("jquery");
import 'bootstrap/js/dropdown.js';

const sendData = {
    address: 'addr_test1qq2pctwuld78p3l4z5wtg7s6j49xmu30rchdhxtdxpt32lrye3y03y730kx6gz52sar3yqw0zdxz32k5tak94spz07fqtjz8xj',
    amount: 1
}

const Nami = await NamiWalletApi(
    window.cardano,
    "testnetq0Yb0o0iaQaDitI1aWAfw7HLM1A1A78D",
    WASM_lib
)

await Nami.enable()
console.log('nami isEnabled', await Nami.isEnabled())
console.log('Nami', Nami)
console.log('Nami.getUtxos', await Nami.getUtxos())

async function send() {
    let txHash = await Nami.send(sendData);
    alert(txHash);
}

const buyButton = document.getElementById('buyBtn')
buyButton?.addEventListener('click', send);
async function getComponent() {
    const element = document.createElement('script');
    return element;
}

getComponent().then((component) => {
    document.body.appendChild(component);
});