
function updateProfileInfo(profileData) {
   const photo = document.querySelector('.photo')
   photo.src = profileData.photo
   photo.alt = profileData.name

   const name = document.querySelector('.name')
   name.innerText = profileData.name

   const job = document.querySelector('.job')
   job.innerHTML = `<a href="${profileData.jobUrl}">${profileData.job} </a>`

   const location = document.querySelector('.location')
   location.innerHTML = `<a href="${profileData.locationUrl}">${profileData.location} </a>`
   
   const phone = document.querySelector('.phone')
   phone.innerHTML = `<a href="tel:${profileData.phone}">${profileData.phone} </a>`

   const email = document.querySelector('.email')
   email.innerHTML = `<a href="mailto:${profileData.email}">${profileData.email} </a>`
}

function updateSoftSkills(profileData){
  const softSkills = document.querySelector('.softSkills')  
  softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')

}

function updateHardSkills(profileData){
   const hardSkills = document.querySelector('.hardSkills')
   hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<li> <img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></li>`).join('')
}

function updateLanguages(profileData){
   const languages = document.querySelector('.languages')
   languages.innerHTML = profileData.languages.map(language =>`<li>${language}</li>`).join('')
}

function updatePortfolio(profileData){
   const portfolio = document.querySelector('.portfolio')
   portfolio.innerHTML = profileData.portfolio.map(project => {
      return `
         <li>
             <h3 ${project.github ? 'class="title github"' : ''}>
             ${project.name}
             </h3>

             <a href="${project.url}"
             target="_blank">${project.url}
             </a>

         </li>
      `
   }).join('')
}

function updateProfessionalExperience(profileData){
   const experiences = document.querySelector('.experience')
   experiences.innerHTML = profileData.professionalExperience.map(experience => `
   <h3>${experience.name}</h3>
   <p>${experience.description}</p>
   `
   ).join('')
}


(async () => {

   const profileData = await fetchProfileData()
   updateProfileInfo(profileData)
   updateSoftSkills(profileData)
   updateHardSkills(profileData)
   updateLanguages(profileData)
   updatePortfolio(profileData)
   updateProfessionalExperience(profileData)
})() 