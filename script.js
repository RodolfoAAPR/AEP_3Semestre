// Mobile Menu Toggle
document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuBtn = document.getElementById("mobileMenuBtn")
  const mobileNav = document.getElementById("mobileNav")

  if (mobileMenuBtn && mobileNav) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileNav.classList.toggle("active")

      // Change icon
      const icon = mobileMenuBtn.querySelector("i")
      if (mobileNav.classList.contains("active")) {
        icon.className = "fas fa-times"
      } else {
        icon.className = "fas fa-bars"
      }
    })

    // Close mobile menu when clicking on a link
    const mobileLinks = mobileNav.querySelectorAll("a")
    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileNav.classList.remove("active")
        const icon = mobileMenuBtn.querySelector("i")
        icon.className = "fas fa-bars"
      })
    })

    // Close mobile menu when clicking outside
    document.addEventListener("click", (event) => {
      if (!mobileMenuBtn.contains(event.target) && !mobileNav.contains(event.target)) {
        mobileNav.classList.remove("active")
        const icon = mobileMenuBtn.querySelector("i")
        icon.className = "fas fa-bars"
      }
    })
  }
})

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Search functionality
function buscarServicos() {
  const searchInput = document.querySelector(".search-input")
  if (searchInput) {
    const searchTerm = searchInput.value.trim()
    if (searchTerm) {
      // Simulate search
      alert(`Buscando serviços próximos a: ${searchTerm}`)
      // Here you would implement actual search functionality
    } else {
      alert("Por favor, digite um endereço ou bairro para buscar.")
    }
  }
}

// Add event listener to search button
document.addEventListener("DOMContentLoaded", () => {
  const searchBtn = document.querySelector(".search-btn")
  if (searchBtn) {
    searchBtn.addEventListener("click", buscarServicos)
  }

  // Add enter key support for search
  const searchInput = document.querySelector(".search-input")
  if (searchInput) {
    searchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        buscarServicos()
      }
    })
  }
})

// Transport page functions
function buscarRota() {
  const origem = document.getElementById("origem")
  const destino = document.getElementById("destino")

  if (origem && destino) {
    const origemValue = origem.value.trim()
    const destinoValue = destino.value.trim()

    if (origemValue && destinoValue) {
      // Simulate route search
      alert(`Buscando rota de "${origemValue}" para "${destinoValue}"`)
      // Here you would implement actual route planning
    } else {
      alert("Por favor, preencha tanto a origem quanto o destino.")
    }
  }
}

function usarLocalizacao() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude
        const lng = position.coords.longitude
        alert(`Localização obtida: ${lat.toFixed(6)}, ${lng.toFixed(6)}\nBuscando pontos próximos...`)
        // Here you would implement actual nearby stops search
      },
      (error) => {
        switch (error.code) {
          case error.PERMISSION_DENIED:
            alert("Permissão de localização negada pelo usuário.")
            break
          case error.POSITION_UNAVAILABLE:
            alert("Informação de localização não disponível.")
            break
          case error.TIMEOUT:
            alert("Tempo limite para obter localização excedido.")
            break
          default:
            alert("Erro desconhecido ao obter localização.")
            break
        }
      },
    )
  } else {
    alert("Geolocalização não é suportada por este navegador.")
  }
}

// Emergency contact functions
document.addEventListener("DOMContentLoaded", () => {
  const emergencyButtons = document.querySelectorAll(".btn-emergency")
  emergencyButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const number = this.textContent
      if (confirm(`Deseja ligar para ${number}?`)) {
        window.location.href = `tel:${number}`
      }
    })
  })
})

// Service card interactions
document.addEventListener("DOMContentLoaded", () => {
  const serviceButtons = document.querySelectorAll(".btn-service")
  serviceButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const serviceCard = this.closest(".service-card")
      const serviceName = serviceCard.querySelector("h3").textContent

      // For now, just show an alert. In a real implementation,
      // this would navigate to the specific service page
      if (serviceName.includes("Transporte")) {
        window.location.href = "transporte.html"
      } else {
        alert(`Acessando ${serviceName}...\nEsta funcionalidade será implementada em breve.`)
      }
    })
  })
})

// Form validation and enhancement
document.addEventListener("DOMContentLoaded", () => {
  // Add input validation
  const inputs = document.querySelectorAll('input[type="text"]')
  inputs.forEach((input) => {
    input.addEventListener("blur", function () {
      if (this.value.trim() === "") {
        this.style.borderColor = "#ef4444"
      } else {
        this.style.borderColor = "#16a34a"
      }
    })

    input.addEventListener("focus", function () {
      this.style.borderColor = "#3b82f6"
    })
  })
})

// Accessibility improvements
document.addEventListener("DOMContentLoaded", () => {
  // Add keyboard navigation for buttons
  const buttons = document.querySelectorAll("button, .btn")
  buttons.forEach((button) => {
    button.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault()
        this.click()
      }
    })
  })

  // Add focus indicators
  const focusableElements = document.querySelectorAll("a, button, input, [tabindex]")
  focusableElements.forEach((element) => {
    element.addEventListener("focus", function () {
      this.style.outline = "2px solid #3b82f6"
      this.style.outlineOffset = "2px"
    })

    element.addEventListener("blur", function () {
      this.style.outline = "none"
    })
  })
})

// Loading states for buttons
function addLoadingState(button, text = "Carregando...") {
  const originalText = button.innerHTML
  button.innerHTML = `<i class="fas fa-spinner fa-spin"></i> ${text}`
  button.disabled = true

  // Simulate loading time
  setTimeout(() => {
    button.innerHTML = originalText
    button.disabled = false
  }, 2000)
}

// Add loading states to relevant buttons
document.addEventListener("DOMContentLoaded", () => {
  const searchButtons = document.querySelectorAll(".search-btn, .location-btn")
  searchButtons.forEach((button) => {
    button.addEventListener("click", function () {
      if (!this.disabled) {
        addLoadingState(this)
      }
    })
  })
})

// Utility functions
function formatPhoneNumber(phone) {
  // Format phone number for Brazilian standard
  const cleaned = phone.replace(/\D/g, "")
  if (cleaned.length === 11) {
    return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 7)}-${cleaned.slice(7)}`
  }
  return phone
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

// Console welcome message
console.log(`
🌟 Portal Maringá - Cidade Conectada
📍 Desenvolvido para inclusão digital e sustentabilidade urbana
🚀 Versão: 1.0.0
💚 Alinhado aos ODS da Agenda 2030
`)
