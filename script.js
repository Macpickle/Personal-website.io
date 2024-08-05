// Define the animate variable
const animate = `
    <div class="animate">
        <div class="animate-header"></div>
        <div class="animate-footer"></div>
    </div>
`;

const header = `
    <div class = "projects-header">
        <h1>Projects</h1>
    </div>
`;

const skills = `
    <div class = "skills-text-languages">
        <div class = "skills-text-languages-title">
            <h1>Languages</h1>
        </div>  
        <div class = "skills-text-list">
            <div class = "skills-text-list-item">
                <div class="progress">
                    <div class="progress-bar" style="max-width: 100%;">
                        <p><span>HTML/CSS</span> - 100%</p>
                    </div>
                </div>
            </div>
            <div class = "skills-text-list-item">
                <div class="progress">
                    <div class="progress-bar" style="max-width: 90%;">
                        <p><span>JavaScript</span> - 90%</p>
                    </div>
                </div>
            </div>
            <div class = "skills-text-list-item">
                <div class="progress">
                    <div class="progress-bar" style="max-width: 90%;">
                        <p><span>Python</span> - 90%</p>
                    </div>
                </div>
            </div>
            <div class = "skills-text-list-item">
                <div class="progress">
                    <div class="progress-bar" style="max-width: 75%;">
                        <p><span>Java</span> - 75%</p>
                    </div>
                </div>
            </div>
            <div class = "skills-text-list-item">
                <div class="progress">
                    <div class="progress-bar" style="max-width: 60%;">
                        <p><span>C++</span> - 60%</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
                    
    <div class = "skills-text-technologies">
        <div class = "skills-text-technologies-title">
            <h1>Technologies</h1>
        </div>
        <div class = "skills-text">
            <ul class = "cloud">
                <li>Node.js</li>
                <li>React</li>
                <li>Express.JS</li>
                <li>MongoDB</li>
                <li>Socket.io</li>
                <li>Passport.JS</li>
                <li>Github</li>
                <li>Arduino IDE</li>
                <li>Bing Maps API</li>
                <li>Imgur API</li>
                <li>Pandas</li>
                <li>Matplotlib</li>
                <li>Postman</li>
                <li>Bcrypt</li>
                <li>Axios</li>
                <li>Hashing</li>
                <li>Windows</li>
            </ul>
        </div>
    </div>
`

const education = `
<div class = "education-header">
        <h1>Education</h1>  
    </div>  
    <div class = "education-direction">
    <div class = "education-stack">
        <div class = "education-box-1-bar">
            <div class = "education-box-1">
                <div class = "education-box-header">
                    <h3>Ontario Tech University</h3>
                    <h4>2023 - 2027</h4>
                </div>
                <h4>Working towards a Bachelor's of Science in computer science</h4>
                <h3 class = "subheader">Relevant Courses</h3>
                <div class = "courses">
                    <div class = "course-item">
                        <p>Programming workshop I and II</p>
                        <p class = "course-language">C++</p>
                    </div>
                    <div class = "course-item">
                        <p>Computer Architechture I</p>
                        <p class = "course-language">Python, x86</p>
                    </div>
                    <div class = "course-item">
                        <p>Data Structures and Algorithms</p>
                        <p class = "course-language">Java</p>
                    </div>
                    <p>Discrete Mathematics</p>
                    <p>Linear Algebra</p>
                    <div class = "course-item">
                        <p>Software Design and Analysis</p>
                        <p class = "course-language">Python</p>
                    </div>
                    <div class = "course-item">
                        <p>Software Systems Dev. and Integration</p>
                        <p class = "course-language">Java, Node.js</p>
                    </div>
                </div>
            </div>
        </div>
        <div class = "education-box-2-bar">
            <div class = "education-box-2">
                <div class = "education-box-header">
                    <h3>Anderson CVI</h3>
                    <h4>2019 - 2023</h4>
                </div>
                <h4>High School Diploma</h4>
                <h3 class = "subheader">Relevant Courses</h3>
                <div class = "courses">
                    <div class = "course-item">
                        <p>Computer Science</p>
                        <p class = "course-language">Java</p>
                    </div>
                    <div class = "course-item">
                        <p>Calculus</p>
                    </div>
                    <div class = "course-item">
                        <p>Advanced Functions</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class = "education-stack">
        <div class = "education-box-3-bar">
            <div class = "education-box-3">
                <div class = "education-box-header">
                    <h3>Awards/Achievements</h3>
                </div>
                <div class = "education-inline">
                    <div class = "timeline">
                        <div class = "timeline-item">
                            <div class = "center-line"></div>
                            <img src="./assets/logos/Ontech.png" alt="SVG Image">
                        </div>
                    </div>
                    <div class = "education-awards">
                        <div class = "award-item">
                            <div class = "award-item-header">
                                <h3>President's Honours List</h3>
                                <p>2023-2024</p>
                            </div>
                            <p class = "description">Above a GPA of 3.8, while on an 80%+ course load</p>
                        </div>
                        <div class = "award-item">
                            <div class = "award-item-header">
                                <h3>Dean's Honours List</h3>
                                <p>2023-2024</p>
                            </div>
                            <p class = "description">Above a GPA of 3.5, while on an 80%+ course load</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

`

const projects = [
    {
        html: `<div class="project-item">
            <div class = "project-item-text">
                <div class = "project-item-text-header">
                    <div class = "tooltip">
                        <a href = "https://github.com/Macpickle/CarSpotters" >CarSpotters Fullstack Website</a>
                        <span class = "tooltiptext">Click to view</span>
                    </div>
                    <p>- 2024</p>
                </div>
                <div class = "project-item-text-body">
                    <p>CarSpotters is a social media platform for car enthusiasts. Users can upload pictures of cars they see on the street and share them with other users. Users can also follow other users and like their posts. The platform is built using <span>Node.js</span>, <span>MongoDB</span>, <span>Bing Maps API</span>, <span>Imgur API</span>, <span>Passport.JS</span> and more.</p>
                </div>
                <div class = "project-item-text-footer">
                    <img src="./assets/languages/JS.svg" alt="SVG Image">
                    <img src="./assets/languages/NODEJS.svg" alt="SVG Image">
                    <img src="./assets/languages/MONGODB.svg" alt="SVG Image">
                    <img src="./assets/languages/HTML.svg" alt="SVG Image">
                    <img src="./assets/languages/CSS.svg" alt="SVG Image">
                </div>
            </div>
        </div>`
    },

    {
        html: `<div class="project-item">
            <div class = "project-item-text">
                <div class = "project-item-text-header">]
                    <div class = "tooltip">
                        <a href = "https://github.com/Macpickle/Chatroom-REACT" >Chatroom + AI Chatbot (WIP)</a>
                        <span class = "tooltiptext">Click to view</span>
                    </div>
                    <p>- 2024</p>
                    <div class = "project-item-text-header-links">
                    </div>
                </div>
                <div class = "project-item-text-body">
                    <p>Chatroom is a web application that allows users to chat with each other in real-time. The application also features an AI chatbot that can answer questions and provide information to users. The application is built using <span>React</span>, <span>Socket.io</span>, <span>Express.JS</span>, <span>Passport.JS</span> and more.</p>
                </div>
                <div class = "project-item-text-footer">
                    <img src="./assets/languages/JS.svg" alt="SVG Image">
                    <img src="./assets/languages/REACT.svg" alt="SVG Image">

                </div>
            </div>
        </div>`
    },

    {
        html: `<div class="project-item">
            <div class = "project-item-text">
                <div class = "project-item-text-header">
                    <div class = "tooltip">
                        <a href = "https://github.com/Macpickle/Arduino-Weather-Sensor-Reader" >Weather Data Analyzer</a>
                        <span class = "tooltiptext">Click to view</span>
                    </div>
                    <p>- 2023</p>
                    <div class = "project-item-text-header-links">
                    </div>
                </div>
                <div class = "project-item-text-body">
                    <p>A Arduino project designed to collect weather data and analyze it. The project uses a variety of sensors to collect data such as temperature, humidity, and air pressure. The data is then analyzed and displayed on an LCD screen. The project is built using <span>Arduino</span>, <span>C++</span>, and <span>Hardware components</span>.</p>
                </div>
                <div class = "project-item-text-footer">
                    <img src="./assets/languages/CPP.svg" alt="SVG Image">
                    <img src="./assets/languages/ARDUINO.svg" alt="SVG Image">

                </div>
            </div>
        </div>`
    },
];

const experience = `
<div class = "experience-header">
    <h1>Experience</h1>
</div>
<div class = "experience-item">
    <div class = "experience-item-header">
        <h2>Website Developer</h2>
        <h3>June 2024 - August 2024</h3>
    </div>
    <div class = "experience-item-content">
        <p>Worked on my own website, learning and experiencing the multiple technologies required for a fullstack website to be ran. </p>
    </div>
</div>
<div class = "experience-hire">
    <div class = "experience-hire-text">
        <h1>Looking for hire!</h1>
        <h3>Please contact me through my <a href = mailto:"dylanmacleod2005@gmail.com">Email</a> or <a href = "https://www.linkedin.com/in/dylan-macleod-b167b02ba/">LinkedIn</a></h3>
    </div>  
</div>
`

// Make animation show when on screen
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains('projects-text')) {
                console.log('Element is visible on the screen');
                entry.target.innerHTML += header;
                entry.target.innerHTML += animate;
                projects.forEach(project => {
                    entry.target.innerHTML += project.html;
                });
            } else if (entry.target.classList.contains('skills-text')) {
                console.log('Element is visible on the screen');
                entry.target.innerHTML += skills;
            } else if (entry.target.classList.contains('education-content')) {
                console.log('Element is visible on the screen');
                entry.target.innerHTML += education;
            } else if (entry.target.classList.contains('experience-text')) {
                console.log('Element is visible on the screen');
                entry.target.innerHTML += experience;
            }

            observer.unobserve(entry.target);
        } else {
            entry.target.classList.remove('animate');
            entry.target.innerHTML = '';
        }
    });
}, { threshold: 0.75 });

observer.observe(document.querySelector('.projects-text'));
observer.observe(document.querySelector('.skills-text'));
observer.observe(document.querySelector('.education-content'));
observer.observe(document.querySelector('.experience-text'));
