function updateProfileInfo(profileData) {
  const photo = document.getElementById('profile.photo')
  photo.src = profileData.photo
  photo.alt = profileData.name


  const name = document.getElementById('profile.name')
  name.innerText = profileData.name

  const job = document.getElementById('profile.job')
  job.innerText = profileData.job

  const location = document.getElementById('profile.location')
  location.innerText = profileData.location

  const phone = document.getElementById('profile.phone')
  phone.innerText = profileData.phone
  phone.href = `tel:${profileData.phone}`

  const email = document.getElementById('profile.email')
  email.innerText = profileData.email
  email.href = `email:${profileData.email}`
}

function updateHardSkills(profileData) {
  const hardSkills = document.getElementById('profile.skills.hardSkills')

  hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></li>`).join('')
}

function updateSoftSkills(profileData) {
  const softSkills = document.getElementById('profile.skills.softSkills')

  softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')
}

function updateLanguages(profileData) {
  const languages = document.getElementById('profile.languages')

  languages.innerHTML = profileData.languages.map(language => `<li class="languages-item">${language}</li>`).join('')
}

function updatePortfolio(profileData) {
  const portfolio = document.getElementById('profile.portfolio')

  portfolio.innerHTML = profileData.portfolio.map(project => {
    return `
      <li class="portfolio-item">
        <h3 ${project.github ? 'class="portfolio-item-title github"' : 'class= "portfolio-item-title"'}>${project.name}</h3>
        <a class="portfolio-item-link" href="${project.url}" target="_blank">
          ${project.url}
        </a>
      </li>
  `
  }).join('')
}

function updateProfessionalExperience(profileData) {
  const professionalExperience = document.getElementById('profile.professionalExperience')

  professionalExperience.innerHTML = profileData.professionalExperience.map(experience => {
    return `
        <li class="experience-item">
          <span class="experience-item-span">${experience.event}</span>
          <h3 class="experience-item-title">${experience.title}</h3>
          <p class="experience-period">${experience.period}</p>
          <p class="experience-item-content">${experience.challenge}</p>
          <p class="experience-item-content">${experience.developedProject}</p>
        </li>
    `
  }).join('')
}

(async () => {
  const profileData = await fetchProfileData()
  updateProfileInfo(profileData)
  updateHardSkills(profileData)
  updateSoftSkills(profileData)
  updateLanguages(profileData)
  updatePortfolio(profileData)
  updateProfessionalExperience(profileData)
})()