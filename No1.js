 alert("Here's A Message For You");
const yesButton = document.querySelector('.btnyes');
const noButton = document.querySelector('.btnno');


yesButton.addEventListener('click', () => {
    alert('I Love You Too!');
});
noButton.addEventListener('mouseover', ()=>{
    const randomX = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const randomY = Math.random() * (window.innerHeight - noButton.offsetHeight);

noButton.style.left = `${randomX}px`;
noButton.style.top = `${randomY}px`;
});

