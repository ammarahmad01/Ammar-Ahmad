// Enhanced menu functionality
document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.querySelector("#menu-icon")
  const navbar = document.querySelector(".navbar")
  const sections = document.querySelectorAll("section")
  const navLinks = document.querySelectorAll(".navbar a")

  // Toggle menu
  menuIcon?.addEventListener("click", () => {
    navbar.classList.toggle("active")
  })

  // Close menu when clicking nav links
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navbar.classList.remove("active")
    })
  })

  // Active link highlighting
  window.onscroll = () => {
    sections.forEach((sec) => {
      const top = window.scrollY
      const offset = sec.offsetTop - 150
      const height = sec.offsetHeight
      const id = sec.getAttribute("id")

      if (top >= offset && top < offset + height) {
        navLinks.forEach((link) => {
          link.classList.remove("active")
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active")
          }
        })
      }
    })
  }

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!menuIcon?.contains(e.target) && !navbar?.contains(e.target)) {
      navbar?.classList.remove("active")
    }
  })

  // Form handling
  const form = document.querySelector("form")
  form?.addEventListener("submit", (e) => {
    e.preventDefault()
    alert("Message sent successfully!")
    form.reset()
  })
})
