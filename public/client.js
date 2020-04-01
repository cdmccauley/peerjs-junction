let peer = new Peer();

peer.on('open', (id) => {
    console.log('peer id: ', id);
});