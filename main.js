const container = document.querySelector('.container');
const wolf = document.querySelector('.wolf');

container.addEventListener('click', jump);

function jump() {
wolf.classList.add('jumping');
console.log('jajaj');
setTimeout(() => {
    wolf.classList.remove('jumping');
  }, "1000");
}


