// Data here
const data = {
    firstName: 'Chrysalis',
    lastName: 'Parker',
    jobTitle: 'junior developer',
    location: 'Eugene, OR',
    aboutMe: 'My name is Chrysalis Parker and I am a junior web developer based in Eugene, Oregon. I\'m passionate about writing clean and scalable code with a strong accessibility UX/UI focus. I believe that as the world\'s technologies continue to evolve, so too does the spotlight on day-to-day convenience.',
    year: new Date().getFullYear(),
    sections: [
        'About Me',
        'Projects',
    ],
    projects: [
        {
            title: 'Random Quote Generator',
            desc: 'The user clicks a button and is presented with a random inspirational quote.',
            image: 'images/rndm-qut.png',
            url: 'https://chrysalynn.github.io/random_quote_generator/'
        },
        {
            title: 'Data Pagination',
            desc: 'The user is able to click through a list of 42 student\'s with the aid of the technique known as pagination.',
            image: 'images/student_list.png',
            url: 'https://chrysalynn.github.io/data_pagination_and_filtering/'
        },
        {
            title: 'Basic Quiz',
            desc: 'A simple mathematical addition quiz made with basic JavaScript.',
            image: 'images/js-test-icn.png',
            url: 'https://chrysalynn.github.io/quizJS-challenge/'
        }
     ],
    links: {
        github: 'https://github.com/chrysalynn',
        email: 'mailto:chrysalis.parker@gmail.com',
        linkedIn: 'https://linkedin.com'
    }
}

const addInfo = (className, data, type) => {
    const current = document.getElementsByClassName(className);
    if (type == 'text') {
        current[0].textContent = data[className];
    } else if (type == 'link') {
        current[0].href = data[className];
    }
}
addInfo('firstName', data, 'text');
addInfo('jobTitle', data, 'text');
addInfo('location', data, 'text');
addInfo('aboutMe', data, 'text');
addInfo('year', data, 'text');

for (let i = 0; i < data.sections.length; i++) {
    document.getElementById(`section-${i +1}`).textContent = data.sections[i];
   }


// Functions/functionality
// const firstNameElement = document.getElementsByClassName('first-name');

const githubIcon = document.getElementsByClassName('fa-github');

githubIcon[0].href = data.links.github;

const emailIcon = document.getElementsByClassName('fa-envelope');

emailIcon[0].href = data.links.email;

const linkedinIcon = document.getElementsByClassName('fa-linkedin');

linkedinIcon[0].href = data.links.linkedIn;





// #1: make a new branch off of your main (or maybe it’s called ‘master’? Can’t remember) branch. 
// #2: get one of the projects to show up - you can delete the others, and just make it so one is showing - this all in JS like we’ve done with the other elements on the page. 
// #3: Push the branch and open a PR. Then assign it to me for review (def google this process so you can begin to learn it) 

// const generateProjectCard = (title, desc, image) => {

// }

const projectContainer = document.getElementById('project-container');

// Project Cards

for (let i = 0; i < data.projects.length; i++) {
    let projectCard = document.createElement('article');
    projectCard.classList.add(
        'col-6', 
        'col-12-xsmall' ,
        'work-item'
    );
    
    let projectDesc = document.createElement('p');
    projectDesc.textContent = data.projects[i].desc;
    let projectTitle = document.createElement('h3');
    projectTitle.textContent = data.projects[i].title;
    
    const projectLinkBtn = document.createElement('a');
    projectLinkBtn.href = data.projects[i].url;
    projectLinkBtn.textContent = 'Live demo';
    projectLinkBtn.target = '_blank';
    projectLinkBtn.classList.add(
        'button'
    );


    let projectLink = document.createElement('a');
    projectLink.href = data.projects[i].image;
    let projectImage = document.createElement('img');
    projectImage.src = data.projects[i].image;
    projectLink.classList.add(
        'image',
        'fit',
        'thumb'
    );

    projectLink.append(projectImage)
    projectCard.append(projectLink)

    projectCard.append(projectTitle)
    projectCard.append(projectDesc)
    projectCard.append(projectLinkBtn)

    projectContainer.append(projectCard)

}