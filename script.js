const $ = props => document.querySelector(props)

$('.theme').addEventListener('click', () => {
    $('body').classList.toggle('dark')
})

