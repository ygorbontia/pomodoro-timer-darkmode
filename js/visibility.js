export default function Visibility() {
  const body = document.querySelector('body')
  const lightMode = document.querySelector('.light')
  const darkMode = document.querySelector('.dark')

  lightMode.addEventListener('click', function() {
    lightMode.classList.add('hide')
    darkMode.classList.remove('hide')
  
    body.classList.add('darkmode')
  })
  
  darkMode.addEventListener('click', function() {
    lightMode.classList.remove('hide')
    darkMode.classList.add('hide')
  
    body.classList.remove('darkmode')
  })
}