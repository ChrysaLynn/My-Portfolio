// Data here
const data = {
    firstName: 'Chrysalis',
    lastName: 'Parker',
    jobTitle: 'junior developer',
    location: 'Eugene, OR',
    links: {
        github: 'https://github.com/chrysalynn',
        email: 'mailto:chrysalis.parker@gmail.com'
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


// Functions/functionality
// const firstNameElement = document.getElementsByClassName('first-name');

const githubIcon = document.getElementsByClassName('fa-github');

githubIcon[0].href = data.links.github;

const emailIcon = document.getElementsByClassName('fa-envelope');

emailIcon[0].href = data.links.email;


