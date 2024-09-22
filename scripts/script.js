document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });

    const currentYear = new Date().getFullYear();
    document.getElementById('currentyear').textContent = currentYear;

    document.getElementById('lastModified').textContent = 'Last Updated: ' + document.lastModified;

    const courses = [
        { code: 'CSE 110', completed: true },
        { code: 'WDD 130', completed: false },
        { code: 'CSE 111', completed: true },
        { code: 'CSE 210', completed: false },
        { code: 'WDD 131', completed: false },
        { code: 'WDD 231', completed: true }
    ];

    function displayCourses(filter = '') {
        const courseList = document.getElementById('course-list');
        courseList.innerHTML = '';

        const filteredCourses = filter ? courses.filter(course => course.code.startsWith(filter)) : courses;

        filteredCourses.forEach(course => {
            const courseDiv = document.createElement('div');
            courseDiv.classList.add('course-card');
            if (course.completed) courseDiv.classList.add('completed');
            courseDiv.textContent = course.code;
            courseList.appendChild(courseDiv);
        });
    }

    document.getElementById('showAll').addEventListener('click', () => displayCourses());
    document.getElementById('showCSE').addEventListener('click', () => displayCourses('CSE'));
    document.getElementById('showWDD').addEventListener('click', () => displayCourses('WDD'));

    displayCourses(); // Show all courses on page load
});
