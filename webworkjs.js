/**
 * Created by huangpeng on 04/12/2018.
 */
var worker = new Worker('/jsteststatic/static/worker.js')
worker.postMessage('Hello World')
worker.postMessage({method: 'echo', args: ['Work']})
worker.onmessage = function (event) {
    console.log('Received message ' + event.data)
    // doSomething()
}

///////////jsteststatic/static/worker.js
console.log('run worker.js')
var self = this
// 写法二
self.addEventListener('message', function (e) {
    self.postMessage('You said: ' + e.data)
}, false)
