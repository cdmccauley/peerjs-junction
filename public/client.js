// let peer = new Peer({
//     config: {'iceServers': [
//         { urls: 'stun:stun2.1.google.com:19302' },
//     ]}
// });

let peer = new Peer();

// let peer = new Peer();
let conn;
let selfId;

let idDisplay = document.querySelector('#idDisplay');
let peerInput = document.querySelector('#peerInput');
let callBtn = document.querySelector('#callBtn');

peer.on('open', (id) => {
    console.log('self id: ', id);
    selfId = id;
    idDisplay.innerHTML = selfId;
});

peer.on('connection', (conn) => {
    console.log('conn: ', conn);
    conn.on('data', (data) => {
        console.log('recieved: ', data);
    })
    conn.send('send from: ', selfId);
});

callBtn.addEventListener('click', (event) => {
    console.log('peer: ', peer.options.config.iceServers);
    let receiver = peerInput.value;
    conn = peer.connect(receiver);
    conn.on('data', (data) => {
        console.log('recieved: ', data);
    })
});