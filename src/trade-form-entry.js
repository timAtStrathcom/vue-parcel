import Vue from 'vue'
import TradeForm from './trade-form'

(function smi_initTradeForm(hostElementId = '#smi-trade-in') {
    console.log('Initializing trade-in component')
    new Vue({
        el: hostElementId,
        render: h => h(TradeForm)
    })
})()
