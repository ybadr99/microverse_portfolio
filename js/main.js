// -- projects section
const projects = [
  {
    id: 1,
    name: 'Multi-Post Stories Gain+Glory',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
    featuredImage: './images/projects/project03.png',
    technologies: ['Ruby on Rails', 'css', 'JavaScript', 'HTML'],
    liveLink: 'https://ybadr99.github.io/portfolio/',
    sourceLink: 'https://github.com/ybadr99/portfolio',
  },
  {
    id: 2,
    name: 'Multi-Post Stories Gain+Glory',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
    featuredImage: './images/projects/project02.png',
    technologies: ['Ruby on Rails', 'css', 'JavaScript', 'HTML'],
    liveLink: 'https://ybadr99.github.io/portfolio/',
    sourceLink: 'https://github.com/ybadr99/portfolio',
  },
  {
    id: 3,
    name: 'Multi-Post Stories Gain+Glory',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
    featuredImage: './images/projects/project03.png',
    technologies: ['Ruby on Rails', 'css', 'JavaScript', 'HTML'],
    liveLink: 'https://ybadr99.github.io/portfolio/',
    sourceLink: 'https://github.com/ybadr99/portfolio',
  },
  {
    id: 4,
    name: 'Multi-Post Stories Gain+Glory',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
    featuredImage: './images/projects/project02.png',
    technologies: ['Ruby on Rails', 'css', 'JavaScript', 'HTML'],
    liveLink: 'https://ybadr99.github.io/portfolio/',
    sourceLink: 'https://github.com/ybadr99/portfolio',
  },
  {
    id: 5,
    name: 'Multi-Post Stories Gain+Glory',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
    featuredImage: './images/projects/project03.png',
    technologies: ['Ruby on Rails', 'css', 'JavaScript', 'HTML'],
    liveLink: 'https://ybadr99.github.io/portfolio/',
    sourceLink: 'https://github.com/ybadr99/portfolio',
  },
  {
    id: 6,
    name: 'Multi-Post Stories Gain+Glory',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
    featuredImage: './images/projects/project02.png',
    technologies: ['Ruby on Rails', 'css', 'JavaScript', 'HTML'],
    liveLink: 'https://ybadr99.github.io/portfolio/',
    sourceLink: 'https://github.com/ybadr99/portfolio',
  },

];

const menuIcon = document.querySelector('.menu-icon');
const mobileMenu = document.querySelector('.mobile-nav-items');
const navItem = document.querySelectorAll('.nav-item');

const projectsContainer = document.getElementById('projects');
// popup window
const modal = document.querySelector('#popup-window');
const close = document.querySelector('.close');
const modalContent = document.querySelector('.modal-content');

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('active');
  mobileMenu.classList.toggle('active');
  document.body.classList.toggle('hidden-flow');
});

navItem.forEach((n) => {
  n.addEventListener('click', () => {
    menuIcon.classList.remove('active');
    mobileMenu.classList.remove('active');
    document.body.classList.remove('hidden-flow');
  });
});

const createProject = (project) => {
  const projectEl = createElement('div', 'project');

  const img = createElement('img', 'project-img');
  img.src = project.featuredImage;
  projectEl.appendChild(img);
  
  const name = createElement('h3', 'project-heading');
  name.innerText = project.name;
  projectEl.appendChild(name);
  
  const techs = createList(project.technologies, 'techs');
  projectEl.appendChild(techs);
  
  const btn = createButton('see-project', project.id, 'See project');
  projectEl.appendChild(btn);

  return projectEl;
};

const renderPopup = (project) => {

const techs = createList(project.technologies, 'techs');

return `
    <div class="img-box">
      <img
      src='${project.featuredImage}'
      alt=""
      />  
    </div>

    <div class="content-box">
      <h5>${project.name}</h5>
      
      ${techs.outerHTML}

      
      <p>
        ${project.description}
      </p>

      <ul class="btn-warper">
        <li>
          <a href="${project.liveLink}" class="btn">
            See live
            <img src="./images/Icon - Export.svg" alt="" />
          </a>
        </li>
        <li>
          <a href="${project.sourceLink}" class="btn">
            See source
            <img src="./images/Icon -GitHub.svg" alt="" />
          </a>
        </li>
      </ul>
    </div>
    
    `
  
  };






window.onload = () => {
  projects.forEach((project) => {
    projectsContainer.appendChild(createProject(project));
  });

  const projectBtns = document.querySelectorAll('.see-project');
  projectBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const project = projects.find((project) => project.id === +btn.id);
      modalContent.innerHTML = renderPopup(project);
      modal.style.display = 'block';
    });
  });
};


close.onclick = () => {
  modal.style.display = 'none';
};

window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
};