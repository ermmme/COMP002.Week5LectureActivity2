const button = document.getElementById('clickOnceButton');

button.addEventListener('click', function handleClick() {
    
    alert('the button was clicked!!! holy smokes!!');

    button.removeEventListener('click', handleClick);
});
