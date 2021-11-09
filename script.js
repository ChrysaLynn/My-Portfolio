// Data here
const data = {
    firstName: 'Chrysalis',
    lastName: 'Parker',
    jobTitle: 'junior developer',
    location: 'Eugene, OR',
    aboutMe: 'My name is Chrysalis and I am a junior developer based in Eugene, Oregon. Lorem ipsum blah blah blah.',
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

// function consoleDisplay(string) {
//     return console.log(string);
// }
// consoleDisplay('Feet');



