// Data here
const data = {
    firstName: 'Chrysalis',
    lastName: 'Parker',
    jobTitle: 'junior developer',
    location: 'Eugene, OR',
    aboutMe: 'My name is Chrysalis and I am a junior developer based in Eugene, Oregon. I\'m passionate about writing clean and scalable code with a strong accessibility UX/UI focus. I believe that as the world\'s technologies continue to evolve, so to does the spotlight on day-to-day convenience.',
    year: new Date().getFullYear(),
    sections: [
        'About Me',
        'Projects',
    ],
    projects: [ // Don't use yet lol you don't know how
        {
            title: 'Magna sed consequat 1',
            desc: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
            image: 'images/thumbs/01.jpg'
        },
        {
            title: 'Magna sed consequat 2',
            desc: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
            image: 'images/thumbs/02.jpg'
        },
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