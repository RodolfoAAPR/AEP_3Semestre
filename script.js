document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuBtn = document.getElementById("mobileMenuBtn")
  const mobileNav = document.getElementById("mobileNav")

  if (mobileMenuBtn && mobileNav) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileNav.classList.toggle("active")

      const icon = mobileMenuBtn.querySelector("i")
      if (mobileNav.classList.contains("active")) {
        icon.className = "fas fa-times"
      } else {
        icon.className = "fas fa-bars"
      }
    })

    const mobileLinks = mobileNav.querySelectorAll("a")
    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileNav.classList.remove("active")
        const icon = mobileMenuBtn.querySelector("i")
        icon.className = "fas fa-bars"
      })
    })

    document.addEventListener("click", (event) => {
      if (!mobileMenuBtn.contains(event.target) && !mobileNav.contains(event.target)) {
        mobileNav.classList.remove("active")
        const icon = mobileMenuBtn.querySelector("i")
        icon.className = "fas fa-bars"
      }
    })
  }
})

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

function buscarServicos() {
  const searchInput = document.querySelector(".search-input")
  if (searchInput) {
    const searchTerm = searchInput.value.trim()
    if (searchTerm) {
      alert(`Buscando serviços próximos a: ${searchTerm}`)
    } else {
      alert("Por favor, digite um endereço ou bairro para buscar.")
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const searchBtn = document.querySelector(".search-btn")
  if (searchBtn) {
    searchBtn.addEventListener("click", buscarServicos)
  }

  const searchInput = document.querySelector(".search-input")
  if (searchInput) {
    searchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        buscarServicos()
      }
    })
  }
})

function buscarRota() {
  const origem = document.getElementById("origem")
  const destino = document.getElementById("destino")

  if (origem && destino) {
    const origemValue = origem.value.trim()
    const destinoValue = destino.value.trim()

    if (origemValue && destinoValue) {
      alert(`Buscando rota de "${origemValue}" para "${destinoValue}"`)
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

document.addEventListener("DOMContentLoaded", () => {
  const serviceButtons = document.querySelectorAll(".btn-service")
  serviceButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const serviceCard = this.closest(".service-card")
      const serviceName = serviceCard.querySelector("h3").textContent

      if (serviceName.includes("Transporte")) {
        window.location.href = "transporte.html"
      } else {
        alert(`Acessando ${serviceName}...\nEsta funcionalidade será implementada em breve.`)
      }
    })
  })
})

document.addEventListener("DOMContentLoaded", () => {
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

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("button, .btn")
  buttons.forEach((button) => {
    button.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault()
        this.click()
      }
    })
  })

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

function addLoadingState(button, text = "Carregando...") {
  const originalText = button.innerHTML
  button.innerHTML = `<i class="fas fa-spinner fa-spin"></i> ${text}`
  button.disabled = true

  setTimeout(() => {
    button.innerHTML = originalText
    button.disabled = false
  }, 2000)
}

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

function formatPhoneNumber(phone) {
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

console.log(`
🌟 Portal Maringá - Cidade Conectada
📍 Desenvolvido para inclusão digital e sustentabilidade urbana
🚀 Versão: 1.0.0
💚 Alinhado aos ODS da Agenda 2030
`)

function buscarUBS() {
  const searchInput = document.getElementById("searchUBS")
  if (searchInput) {
    const searchTerm = searchInput.value.trim().toLowerCase()
    const ubsCards = document.querySelectorAll(".ubs-card")
    let foundResults = false

    const existingNoResults = document.querySelector(".no-results")
    if (existingNoResults) {
      existingNoResults.remove()
    }

    ubsCards.forEach((card) => {
      const bairroData = card.getAttribute("data-bairro").toLowerCase()
      const ubsTitle = card.querySelector("h3").textContent.toLowerCase()
      const ubsAddress = card.querySelector(".info-item p").textContent.toLowerCase()

      if (
        searchTerm === "" ||
        bairroData.includes(searchTerm) ||
        ubsTitle.includes(searchTerm) ||
        ubsAddress.includes(searchTerm)
      ) {
        card.classList.remove("hidden")
        foundResults = true
      } else {
        card.classList.add("hidden")
      }
    })

    if (!foundResults && searchTerm !== "") {
      const ubsGrid = document.querySelector(".ubs-grid")
      const noResults = document.createElement("div")
      noResults.className = "no-results"
      noResults.innerHTML = `
        <i class="fas fa-search"></i>
        <p>Nenhuma UBS encontrada para "${searchTerm}"</p>
        <p>Tente buscar por outro bairro ou nome.</p>
      `
      ubsGrid.appendChild(noResults)
    }

    const searchBtn = document.querySelector(".search-ubs .btn-primary")
    if (searchBtn && searchTerm) {
      addLoadingState(searchBtn, "Buscando...")
    }
  }
}

function usarLocalizacaoUBS() {
  if (navigator.geolocation) {
    const locationBtn = document.querySelector(".location-btn")
    addLoadingState(locationBtn, "Obtendo localização...")

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude
        const lng = position.coords.longitude

        setTimeout(() => {
          alert(`Localização obtida!\nBuscando UBS próximas a sua localização...`)
          // Here you would implement actual nearby UBS search
          // For now, just show all UBS
          const ubsCards = document.querySelectorAll(".ubs-card")
          ubsCards.forEach((card) => card.classList.remove("hidden"))
        }, 1500)
      },
      (error) => {
        setTimeout(() => {
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
        }, 1500)
      },
    )
  } else {
    alert("Geolocalização não é suportada por este navegador.")
  }
}

function ligarUBS(numero) {
  if (confirm(`Deseja ligar para a UBS?\nNúmero: ${formatPhoneNumber(numero)}`)) {
    window.location.href = `tel:${numero}`
  }
}

function consultarContato(ubsName) {
  alert(
    `Para obter o telefone da ${ubsName}, consulte:\n\n• Site oficial da Prefeitura de Maringá\n• Redes sociais da Secretaria de Saúde\n• Ligue para 156 (Atendimento da Prefeitura)`,
  )
}

function verNoMapa(endereco) {
  const encodedAddress = encodeURIComponent(endereco)
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`
  window.open(googleMapsUrl, "_blank")
}

function ligarEmergencia(numero) {
  if (confirm(`Ligar para emergência ${numero}?`)) {
    window.location.href = `tel:${numero}`
  }
}

function consultarHospital() {
  alert("Hospital Municipal de Maringá\n\nPara emergências, ligue 192 (SAMU)\nPara informações gerais, ligue 156")
}

function consultarVigilancia() {
  alert(
    "Vigilância Sanitária de Maringá\n\nPara denúncias e orientações:\n• Ligue 156\n• Site da Prefeitura\n• Atendimento presencial",
  )
}

document.addEventListener("DOMContentLoaded", () => {
  const searchUBSInput = document.getElementById("searchUBS")
  if (searchUBSInput) {
    searchUBSInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        buscarUBS()
      }
    })

    searchUBSInput.addEventListener("input", () => {
      clearTimeout(searchUBSInput.searchTimeout)
      searchUBSInput.searchTimeout = setTimeout(() => {
        buscarUBS()
      }, 300)
    })
  }
})

// ===== FUNÇÕES DE CONTATO =====

// Envio do formulário de contato
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm")
  if (contactForm) {
    contactForm.addEventListener("submit", handleContactSubmit)
  }
})

function handleContactSubmit(e) {
  e.preventDefault()

  const formData = new FormData(e.target)
  const data = {
    nome: formData.get("nome"),
    email: formData.get("email"),
    telefone: formData.get("telefone"),
    assunto: formData.get("assunto"),
    mensagem: formData.get("mensagem"),
  }

  // Validação básica
  if (!validateContactForm(data)) {
    return
  }

  // Simular envio
  const submitBtn = e.target.querySelector('button[type="submit"]')
  const originalText = submitBtn.innerHTML
  submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...'
  submitBtn.disabled = true

  setTimeout(() => {
    submitBtn.innerHTML = originalText
    submitBtn.disabled = false
    showSuccessMessage()
    e.target.reset()
  }, 2000)
}

function validateContactForm(data) {
  let isValid = true

  // Limpar mensagens de erro anteriores
  document.querySelectorAll(".error-message").forEach((msg) => msg.remove())
  document.querySelectorAll(".error").forEach((field) => field.classList.remove("error"))

  // Validar nome
  if (!data.nome || data.nome.trim().length < 2) {
    showFieldError("nome", "Nome deve ter pelo menos 2 caracteres")
    isValid = false
  }

  // Validar email
  if (!data.email || !validateEmail(data.email)) {
    showFieldError("email", "E-mail inválido")
    isValid = false
  }

  // Validar assunto
  if (!data.assunto) {
    showFieldError("assunto", "Selecione um assunto")
    isValid = false
  }

  // Validar mensagem
  if (!data.mensagem || data.mensagem.trim().length < 10) {
    showFieldError("mensagem", "Mensagem deve ter pelo menos 10 caracteres")
    isValid = false
  }

  return isValid
}

function showFieldError(fieldName, message) {
  const field = document.getElementById(fieldName)
  if (field) {
    field.classList.add("error")

    const errorDiv = document.createElement("div")
    errorDiv.className = "error-message"
    errorDiv.textContent = message

    field.parentNode.appendChild(errorDiv)
  }
}

function showSuccessMessage() {
  const form = document.getElementById("contactForm")
  const successDiv = document.createElement("div")
  successDiv.className = "success-message"
  successDiv.innerHTML = `
    <i class="fas fa-check-circle"></i>
    <span>Mensagem enviada com sucesso! Entraremos em contato em breve.</span>
  `

  form.parentNode.insertBefore(successDiv, form)

  // Remover mensagem após 5 segundos
  setTimeout(() => {
    successDiv.remove()
  }, 5000)
}

// Funções dos canais de atendimento
function ligarPrefeitura() {
  if (confirm("Deseja ligar para a Prefeitura?\nNúmero: (44) 3901-1156")) {
    window.location.href = "tel:4439011156"
  }
}

function ligar156() {
  if (confirm("Deseja ligar para a Central 156?")) {
    window.location.href = "tel:156"
  }
}

function abrirWhatsApp() {
  const message = encodeURIComponent("Olá! Gostaria de obter informações sobre os serviços públicos de Maringá.")
  window.open(`https://wa.me/5544999999999?text=${message}`, "_blank")
}

function abrirSiteOficial() {
  window.open("https://www.maringa.pr.gov.br", "_blank")
}

function verLocalizacao() {
  verNoMapa("Av. XV de Novembro, 701, Maringá, PR")
}

// Função para FAQ
function toggleFAQ(button) {
  const faqItem = button.parentNode
  const answer = faqItem.querySelector(".faq-answer")
  const isActive = button.classList.contains("active")

  // Fechar todas as outras FAQs
  document.querySelectorAll(".faq-question.active").forEach((activeBtn) => {
    if (activeBtn !== button) {
      activeBtn.classList.remove("active")
      activeBtn.parentNode.querySelector(".faq-answer").classList.remove("active")
    }
  })

  // Toggle da FAQ atual
  if (isActive) {
    button.classList.remove("active")
    answer.classList.remove("active")
  } else {
    button.classList.add("active")
    answer.classList.add("active")
  }
}

// Máscara para telefone
document.addEventListener("DOMContentLoaded", () => {
  const telefoneInput = document.getElementById("telefone")
  if (telefoneInput) {
    telefoneInput.addEventListener("input", (e) => {
      let value = e.target.value.replace(/\D/g, "")

      if (value.length <= 11) {
        if (value.length <= 10) {
          value = value.replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3")
        } else {
          value = value.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3")
        }
        e.target.value = value
      }
    })
  }
})

// Validação em tempo real
document.addEventListener("DOMContentLoaded", () => {
  const formInputs = document.querySelectorAll("#contactForm input, #contactForm select, #contactForm textarea")

  formInputs.forEach((input) => {
    input.addEventListener("blur", function () {
      validateField(this)
    })

    input.addEventListener("input", function () {
      // Remover classe de erro quando o usuário começar a digitar
      if (this.classList.contains("error")) {
        this.classList.remove("error")
        const errorMsg = this.parentNode.querySelector(".error-message")
        if (errorMsg) {
          errorMsg.remove()
        }
      }
    })
  })
})

function validateField(field) {
  const value = field.value.trim()
  let isValid = true
  let errorMessage = ""

  // Remover mensagens de erro anteriores
  const existingError = field.parentNode.querySelector(".error-message")
  if (existingError) {
    existingError.remove()
  }
  field.classList.remove("error", "success")

  switch (field.name) {
    case "nome":
      if (value.length < 2) {
        errorMessage = "Nome deve ter pelo menos 2 caracteres"
        isValid = false
      }
      break

    case "email":
      if (!validateEmail(value)) {
        errorMessage = "E-mail inválido"
        isValid = false
      }
      break

    case "assunto":
      if (!value) {
        errorMessage = "Selecione um assunto"
        isValid = false
      }
      break

    case "mensagem":
      if (value.length < 10) {
        errorMessage = "Mensagem deve ter pelo menos 10 caracteres"
        isValid = false
      }
      break
  }

  if (!isValid) {
    showFieldError(field.name, errorMessage)
  } else if (value) {
    field.classList.add("success")
  }

  return isValid
}

// ===== FUNÇÕES DE EDUCAÇÃO =====

function buscarEducacao() {
  const searchInput = document.getElementById("searchEducation")
  if (searchInput) {
    const searchTerm = searchInput.value.trim().toLowerCase()
    const educationCards = document.querySelectorAll(".education-card")
    let foundResults = false

    const existingNoResults = document.querySelector(".no-results")
    if (existingNoResults) {
      existingNoResults.remove()
    }

    educationCards.forEach((card) => {
      const bairroData = card.getAttribute("data-bairro").toLowerCase()
      const educationTitle = card.querySelector("h3").textContent.toLowerCase()
      const educationAddress = card.querySelector(".info-item p").textContent.toLowerCase()

      if (
        searchTerm === "" ||
        bairroData.includes(searchTerm) ||
        educationTitle.includes(searchTerm) ||
        educationAddress.includes(searchTerm)
      ) {
        card.classList.remove("hidden")
        foundResults = true
      } else {
        card.classList.add("hidden")
      }
    })

    if (!foundResults && searchTerm !== "") {
      const educationGrid = document.querySelector(".education-grid")
      const noResults = document.createElement("div")
      noResults.className = "no-results"
      noResults.innerHTML = `
        <i class="fas fa-search"></i>
        <p>Nenhuma escola ou creche encontrada para "${searchTerm}"</p>
        <p>Tente buscar por outro bairro ou nome.</p>
      `
      educationGrid.appendChild(noResults)
    }

    const searchBtn = document.querySelector(".search-education .btn-primary")
    if (searchBtn && searchTerm) {
      addLoadingState(searchBtn, "Buscando...")
    }
  }
}

function usarLocalizacaoEducacao() {
  if (navigator.geolocation) {
    const locationBtn = document.querySelector(".location-btn")
    addLoadingState(locationBtn, "Obtendo localização...")

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude
        const lng = position.coords.longitude

        setTimeout(() => {
          alert(`Localização obtida!\nBuscando escolas e creches próximas a sua localização...`)
          const educationCards = document.querySelectorAll(".education-card")
          educationCards.forEach((card) => card.classList.remove("hidden"))
        }, 1500)
      },
      (error) => {
        setTimeout(() => {
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
        }, 1500)
      },
    )
  } else {
    alert("Geolocalização não é suportada por este navegador.")
  }
}

function ligarEducacao(numero) {
  if (confirm(`Deseja ligar para a instituição?\nNúmero: ${formatPhoneNumber(numero)}`)) {
    window.location.href = `tel:${numero}`
  }
}

function consultarEscola(escolaNome) {
  alert(
    `Para obter informações sobre a ${escolaNome}, consulte:\n\n• Secretaria Municipal de Educação\n• Telefones: (44) 3221-2591 / 3221-2593 / 3221-2588\n• Endereço: Av. Itororó, 583, Zona 02\n• Ligue para 156 (Atendimento da Prefeitura)`,
  )
}

document.addEventListener("DOMContentLoaded", () => {
  const searchEducationInput = document.getElementById("searchEducation")
  if (searchEducationInput) {
    searchEducationInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        buscarEducacao()
      }
    })

    searchEducationInput.addEventListener("input", () => {
      clearTimeout(searchEducationInput.searchTimeout)
      searchEducationInput.searchTimeout = setTimeout(() => {
        buscarEducacao()
      }, 300)
    })
  }
})
