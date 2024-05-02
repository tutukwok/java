function addParagraph() {
    let sect = document.querySelector('section');
    let para = document.createElement('p');
    para.textContent = "JavaScript is fun!";
    sect.appendChild(para);

    para.style.color = 'red';
    para.style.backgroundColor = 'yellow';
    para.style.padding = '10px';
    para.style.width = '250px';
    para.style.textAlign = 'center';
}

function toggleDarkMode() {
    console.log('Clicked!');
    document.body.style.backgroundColor = 'gray';

}