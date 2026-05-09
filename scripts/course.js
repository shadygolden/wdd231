const courses = [
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        completed: false
    },
    {
        subject: 'CSE',
        number: 110,
        title: 'Programming Building Blocks',
        credits: 2,
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        completed: false
    }
];

const container = document.querySelector('#course-container');
const credits = document.querySelector('#credits');

function displayCourses(courseList) {

    container.innerHTML = '';

    courseList.forEach(course => {

        const div = document.createElement('div');

        div.classList.add('course-card');

        if (course.completed) {
            div.classList.add('completed');
        }

        div.innerHTML = `${course.subject} ${course.number}`;

        container.appendChild(div);
    });

    const totalCredits = courseList.reduce((sum, course) => {
        return sum + course.credits;
    }, 0);

    credits.textContent =
    `The total credits for course listed above is ${totalCredits}`;
}


displayCourses(courses);


document.querySelector('#all').addEventListener('click', () => {
    displayCourses(courses);
});


document.querySelector('#wdd').addEventListener('click', () => {

    const wddCourses = courses.filter(course => course.subject === 'WDD');

    displayCourses(wddCourses);
});


document.querySelector('#cse').addEventListener('click', () => {

    const cseCourses = courses.filter(course => course.subject === 'CSE');

    displayCourses(cseCourses);
});