const socket = io()

socket.on('welcomeMessage' , (message) => {
    console.log(message + 'user to the chat app.')
})

document.querySelector('#message-form').addEventListener('submit' , (e) => {
    e.preventDefault()

    const messages = e.target.elements.message.value

    socket.emit('sendPing' , messages)
})