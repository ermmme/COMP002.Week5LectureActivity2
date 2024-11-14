const button = document.getElementById('clickOnceButton');
const link = document.getElementById('favoriteLink');

button.addEventListener('click', function handleClick() {

    alert('the button was clicked!!! holy smokes!!');

    button.removeEventListener('click', handleClick);
});

link.addEventListener('click', function(event) {
    event.preventDefault();
    alert("No distractions! I’m coding!");
});
