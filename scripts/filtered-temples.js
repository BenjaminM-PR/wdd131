const mainnav = document.querySelector('.selection');
const hambutton = document.querySelector('#display-menu');
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

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Santiago Chile",
        location: "Santiago, Chile",
        dedicated: "1983, September, 15",
        area: 20831,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/santiago-chile/400x250/santiago-chile-lds-temple-1085562-wallpaper.jpg"
    },
    {
        templeName: "Concepción Chile",
        location: "Concepción, Chile",
        dedicated: "2018, October, 28",
        area: 23095,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/concepcion-chile/2018/400x250/02-Concepcion-Chile-Temple-2113675.jpg"
    },
    {
        templeName: "Antofagasta Chile",
        location: "Antofagasta, Chile",
        dedicated: "2025, June, 15",
        area: 26163,
        imageUrl:
            "https://www.churchofjesuschrist.org/imgs/e02ad85a9f8a3c4fc4192a1d5a7969a2e3cbfcc7/full/800%2C/0/default"
    }
];



const homeLink = document.querySelector("#home");
homeLink.addEventListener("click", () => {
    rendertemple(temples);
});

const oldLink = document.querySelector("#old");
oldLink.addEventListener("click", () => {
    rendertemple(temples.filter(temple => {
        const year = Number(temple.dedicated.split(",")[0].trim());
        return year < 1900;
    }));
});

const newLink = document.querySelector("#new");
newLink.addEventListener("click", () => {
    rendertemple(temples.filter(temple => {
        const year = Number(temple.dedicated.split(",")[0].trim());
        return year > 2000;
    }));
});

const smallLink = document.querySelector("#small");
smallLink.addEventListener("click", () => {
    rendertemple(temples.filter(temple => temple.area < 10000));
});

const largeLink = document.querySelector("#large");
largeLink.addEventListener("click", () => {
    rendertemple(temples.filter(temple => temple.area > 90000));
});



function rendertemple(listtemple) {

    const listbody = document.querySelector("#temple-list");

    let elements = "";
    for (let item of listtemple) {
        elements += `<div class="temple-item">
        <h3>${item.templeName}</h3>
        <p><span class="label">Location:</span> ${item.location}</p>
        <p><span class="label">Dedicated:</span> ${item.dedicated}</p>
        <p><span class="label">Size:</span> ${item.area} sq ft</p>
        <img src="${item.imageUrl}" alt="${item.templeName} Temple" loading="lazy">
        </div>`;
    }
    listbody.innerHTML = elements;
}
rendertemple(temples)

