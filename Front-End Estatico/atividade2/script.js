document.getElementById('crudForm').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const nome = document.getElementById('nome').value;
    const sobrenome = document.getElementById('sobrenome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const idade = document.getElementById('idade').value;
  
  
    const apiUrl = 'https://reqres.in/api/users';
  
    const data = {
      nome,
      sobrenome,
      email,
      senha,
      idade
    };
  
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        return response.json().then((responseData) => ({
          status: response.status,
          data: responseData,
        }));
      })
      .then(({ status, data }) => {
        if (status !== 201) {
          Error(`Erro ao criar usuário: ${data.error || 'Erro desconhecido'}`);
        }
  
        const tableResult = document.getElementById('table').getElementsByTagName('tbody')[0];
        
        const newRow = tableResult.insertRow(tableResult.rows.length);
  
        const rowNome = newRow.insertCell(0);
        rowNome.innerHTML = data.nome;
  
        const rowSobrenome = newRow.insertCell(1);
        rowSobrenome.innerHTML = data.sobrenome;
  
        const rowEmail = newRow.insertCell(2);
        rowEmail.innerHTML = data.email;
  
        const rowSenha = newRow.insertCell(3);
        rowSenha.innerHTML = data.senha;
  
        const rowIdade = newRow.insertCell(4);
        rowIdade.innerHTML = data.idade;
  
        cleanInput();
      })
      .catch((error) => {
        console.error('Erro ao criar usuário', error);
        alert(`Erro ao criar usuário: ${error.message}`);
      });
  });
  
  function cleanInput() {
    let nome = document.getElementById('nome');
    const sobrenome = document.getElementById('sobrenome');
    const email = document.getElementById('email');
    const senha = document.getElementById('senha');
    const idade = document.getElementById('idade');
  
      
    nome.value = '';
    sobrenome.value = '';
    email.value = '';
    senha.value = '';
    idade.value = '';
  }
  