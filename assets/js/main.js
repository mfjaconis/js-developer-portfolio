
function updateProfileInfo(profileData) {
   const photo = document.querySelector('.photo')
   photo.src = profileData.photo
   photo.alt = profileData.name

   const name = document.querySelector('.name')
   name.innerText = profileData.name

   const job = document.querySelector('.job')
   job.innerText = profileData.job 

   const location = document.querySelector('.location')
   location.innerText = profileData.location
   
   const phone = document.querySelector('.phone')
   phone.innerText = profileData.phone

   const email = document.querySelector('.email')
   email.innerText = profileData.email
}

function updateSoftSkills(profileData){
  const softSkills = document.querySelector('.softSkills')  
  softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')

}

function updateHardSkills(profileData){
   const hardSkills = document.querySelector('.hardSkills')
   hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<li> <img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></li>`).join('')
}



(async () => {

   const profileData = await fetchProfileData()
   updateProfileInfo(profileData)
   updateSoftSkills(profileData)
   updateHardSkills(profileData)
})() 