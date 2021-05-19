// Get Buttons Array
let button = document.querySelectorAll("button.projectTabLink");
let projectContent = document.querySelectorAll(".projectContent");

// Sort through buttons array to assign button numbers
button.forEach((e, i) => {
    this["button" + (i+1)] = e;
})

projectContent.forEach((e,i) => {
    this["project" + (i+1)] = e;
})

// Onclick function to display designated project
button1.onclick = () =>{
    project1.style.display = 'flex';
    project1.style.width = '100%';
    project1.style.transition = 'width 2s'
    project2.style.display = 'none';
    project3.style.display = 'none';

}
button2.onclick = () =>{
    project1.style.display = 'none';
    project2.style.display = 'flex';
    project3.style.display = 'none';
}
button3.onclick = () =>{
    project1.style.display = 'none';
    project2.style.display = 'none';
    project3.style.display = 'flex';
}

