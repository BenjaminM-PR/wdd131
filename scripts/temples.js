const mainnav = document.querySelector('.selection');
const hambutton = document.querySelector('#menu');
const maintitle = document.querySelector('.title')

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
    maintitle.classList.toggle('hide');
}) 


const currentyear = document.querySelector("#currentyear");
const today = new Date();
currentyear.innerHTML = `©<span class="highlight">${today.getFullYear()}</span>`;

const LastModified = document.getElementById("LastModified").textContent = document.lastModified;
