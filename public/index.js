// query selector
const rootFile = document.querySelector(".root"); 

// variables declaration
const surName = "shobola";
const firstName = "faizol";
const role = "front-end developer";

// template string
const template = `
    <div class="">
        <p class="text-4xl md:text-5xl text-blue-400 font-medium capitalize">hi i'm</p>
        <h1 class="text-5xl md:text-6xl text-blue-600 font-medium capitalize font-body py-2">
            <span class="font-bold text-blue-700">
                ${surName}
            </span> 
                ${firstName}
        </h1>
        <p class="text-2xl text-gray-400">
            <span class="font-body md:text-3xl text-gray-500">a</span>
            <span class="uppercase">${role}</span>
        </p>
    </div>
    <div class="">
        <a href="resume/index.html" class="font-body text-3xl text-gray-500 hover:text-blue-700 capitalize underline">view resume</a>
    </div>`;

// DOM manipulation
rootFile.innerHTML = template;