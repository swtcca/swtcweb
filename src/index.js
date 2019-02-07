import TESTWP from './testwp'

var brorand = require('brorand')
var jingtumlib = require('jingtum-lib')
const Wallet = jingtumlib.Wallet
const remote = new jingtumlib.Remote({server: 'wss://c04.jingtum.com:5020', local_sign: true})
var connected = false

remote.connect( (error, result) => {
	if (error) {
		console.log(error)
	} else {
		console.log(result)
		connected = true
	}
})

//var jingtum = require('jingtum')
//var Buffer = require('buffer/').Buffer
let iters = 0

var app = document.getElementById('app')

app.innerHTML = "Wallet.generate().address"
setTimeout( () => console.log(`connection status: ${connected}`), 500 )
setTimeout( () => console.log(new jingtumlib.Wallet.generate()), 500 )
setTimeout( () => console.log(new brorand.Rand().generate(16)), 500 )
setTimeout( () => app.innerHTML = JSON.stringify(Buffer.alloc(8).toJSON()), 3000 )
setTimeout( () => console.log(`connection status: ${connected}`), 5000 )

//setInterval( () => { console.log(iters++); console.log(Buffer.alloc(8)) }, 1000 )
//console.log(JSON.stringify(TESTWP))

