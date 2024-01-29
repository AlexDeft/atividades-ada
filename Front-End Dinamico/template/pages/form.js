export function form(Navegar) {
        let root = document.getElementById('root')

        // Criação do elemento container
        let container = document.createElement('div')
        container.classList.add('container')
        root.appendChild(container)

        // Criação do elemento header
        let header = document.createElement('h1')
        header.textContent = 'Churrascômetro'
        container.appendChild(header)

        // Criação do elemento calculator
        let calculator = document.createElement('div')
        calculator.classList.add('calculator')
        container.appendChild(calculator)

        // Criação do elemento inputFormGroup
        let inputFormGroup = document.createElement('div')
        inputFormGroup.classList.add('row', 'input-form-group')
        calculator.appendChild(inputFormGroup)

        // Criação do texto do headerForm
        let headerForm = document.createElement('h1')
        headerForm.id = 'header-form'
        headerForm.textContent = 'Fique por dentro de todas as novidades. Cadastre seu e-mail e receba promoções especiais!'
        inputFormGroup.appendChild(headerForm)

        // Criação do elemento form
        let form = document.createElement('form')
        inputFormGroup.appendChild(form)

        // Criação do elemento nameInput
        let nameInput = document.createElement('input')
        nameInput.type = 'text'
        nameInput.id = 'name'
        nameInput.name = 'name'
        nameInput.placeholder = 'Digite seu nome'
        nameInput.classList.add('input-form')
        form.appendChild(nameInput)

        // Criação do elemento emailInput
        let emailInput = document.createElement('input')
        emailInput.type = 'email'
        emailInput.id = 'email'
        emailInput.name = 'email'
        emailInput.placeholder = 'Digite seu email'
        emailInput.classList.add('input-form')
        form.appendChild(emailInput)

        // Criação do elemento cepInput
        let cepInput = document.createElement('input')
        cepInput.type = 'number'
        cepInput.id = 'postal-code'
        cepInput.name = 'postalCode'
        cepInput.placeholder = 'Digite seu CEP'
        cepInput.classList.add('input-form')
        form.appendChild(cepInput)

        // Criação do elemento consentInput
        let consentInput = document.createElement('div')
        consentInput.id = 'consent-input'
        form.appendChild(consentInput)

        // Criação do elemento de checkbox de consentimento
        let consentCheckbox = document.createElement('input')
        consentCheckbox.type = 'checkbox'
        consentCheckbox.id = 'consent-checkbox'
        consentCheckbox.name = 'optIn'
        consentCheckbox.checked = true
        consentInput.appendChild(consentCheckbox)

        // Criação do elemento consentLabel
        let consentLabel = document.createElement('label')
        consentLabel.htmlFor = 'consent-checkbox'
        consentLabel.id = 'consent-label'
        consentLabel.textContent = 'aceito receber e-mails com promoções'
        consentInput.appendChild(consentLabel)

        // Criação do elemento row
        let row = document.createElement('div')
        row.classList.add('row')
        inputFormGroup.appendChild(row)

        // Criação do elemento defaultButton
        let defaultButton = document.createElement('a')
        defaultButton.classList.add('default-button')
        defaultButton.textContent = 'Cadastrar'
        defaultButton.addEventListener('click', function (event) {
            event.preventDefault()

            if (nameInput.value == '') {
                alert('Por favor, preencha o campo nome')
                nameInput.focus()
                return // Sair da função se o campo estiver vazio
            }

            if (emailInput.value == '') {
                alert('Por favor, preencha o campo email')
                emailInput.focus()
                return // Sair da função se o campo estiver vazio
            }

            if (!validarEmail(emailInput.value)) {
                alert('Formato de email inválido')
                emailInput.focus()
                return // Sair da função se o email for inválido
            }

            if (cepInput.value == '') {
                alert('Por favor, preencha o campo CEP')
                cepInput.focus()
                return // Sair da função se o campo estiver vazio
            }

            // Salvar os valores preenchidos nos campos no armazenamento local
            localStorage.setItem('name', nameInput.value)
            localStorage.setItem('email', emailInput.value)
            localStorage.setItem('postalCode', cepInput.value)

            Navegar('home')
        })
        row.appendChild(defaultButton)

        // Criação do elemento navContainer
        let navContainer = document.createElement('div')
        navContainer.id = 'nav-container'
        inputFormGroup.appendChild(navContainer)

        // Criação do elemento backNav
        let backNav = document.createElement('button')
        backNav.id = 'back-nav'
        backNav.textContent = 'Voltar'
        navContainer.appendChild(backNav)

        // Criação do elemento skipRegister
        let skipRegister = document.createElement('button')
        skipRegister.id = 'skip-register'
        skipRegister.textContent = 'Pular'
        navContainer.appendChild(skipRegister)


        // Recuperar os valores preenchidos nos campos do armazenamento local, nem precisava disso, porque ja tinha feito isso no index.js
        nameInput.value = localStorage.getItem('name')
        emailInput.value = localStorage.getItem('email')
        cepInput.value = localStorage.getItem('postalCode')

        function validarEmail(email) {
            var re = /\S+@\S+\.\S+/ // Tirado de https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript, o \S+ corresponde a qualquer caractere que não seja um espaço em branco (ou seja, letras, números, etc.) uma ou mais vezes, @: Corresponde ao caractere '@', \. Corresponde ao caractere '.'
            return re.test(email)
        }


    }
