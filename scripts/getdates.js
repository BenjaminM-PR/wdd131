
//el que se usa
const currentyear = document.querySelector("#currentyear"); 
const today = new Date();


currentyear.innerHTML = `©<span class="highlight">${today.getFullYear()}</span>`;

const LastModified = document.getElementById("lastModified").textContent = document.lastModified;
