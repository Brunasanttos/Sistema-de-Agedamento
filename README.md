# 🚀 Sistema de Agendamento Criativo

Bem-vindo ao front-end de um Sistema de Agendamento moderno, interativo e visualmente atraente. Este projeto foi criado para simular a experiência de agendamento em estabelecimentos como barbearias, salões de beleza ou consultórios, com foco total na experiência do usuário.


---

## ✨ Funcionalidades Principais

- **Formulário Multi-Passo:** A jornada do usuário é dividida em 3 passos lógicos (Serviço -> Data/Hora -> Dados Pessoais) para uma experiência mais limpa e organizada.
- **Design Atraente e Responsivo:** Layout de duas colunas com um lado para o formulário e outro para um resumo visual. O design se adapta a diferentes tamanhos de tela (embora o foco principal seja desktop).
- **Geração Dinâmica de Conteúdo:** Os serviços e os horários disponíveis são gerados via JavaScript, facilitando a manutenção e futuras integrações.
- **Resumo do Agendamento em Tempo Real:** Um painel lateral é atualizado instantaneamente conforme o usuário faz suas escolhas.
- **Validação de Passos:** O usuário não pode avançar sem preencher as informações necessárias do passo atual.
- **Modal de Confirmação:** Uma bela janela de confirmação aparece ao finalizar o agendamento, melhorando o feedback ao usuário.
- **Animações Suaves:** Transições e animações sutis em CSS para tornar a navegação mais fluida e agradável.

---

## 🎨 Tecnologias Utilizadas

Este projeto é construído puramente com tecnologias de front-end:

- **HTML5:** Para a estrutura semântica do conteúdo.
- **CSS3:** Para toda a estilização, incluindo:
  - Variáveis CSS (para fácil customização de temas)
  - Flexbox e Grid Layout
  - Animações (`@keyframes`) e Transições
- **JavaScript (ES6+):** Para toda a interatividade, incluindo:
  - Manipulação do DOM
  - Gerenciamento de estado (passos do formulário)
  - Lógica de navegação e validação
  - Geração dinâmica de elementos
- **Feather Icons:** Para ícones vetoriais leves e elegantes.
- **Google Fonts:** Para uma tipografia sofisticada (`Playfair Display` e `Roboto`).

---

## 🔧 Como Usar e Rodar o Projeto

É muito simples! Como este é um projeto de front-end puro, você não precisa de um servidor ou de instalações complexas.

1.  **Clone ou Baixe o Repositório:**
    ```bash
    git clone [https://github.com/seu-usuario/nome-do-repositorio.git](https://github.com/seu-usuario/nome-do-repositorio.git)
    ```
    Ou simplesmente baixe os 3 arquivos (`index.html`, `style.css`, `script.js`) e coloque-os na mesma pasta.

2.  **Estrutura da Pasta:**
    Certifique-se de que sua pasta esteja assim:
    ```
    /seu-projeto
    ├── index.html
    ├── style.css
    └── script.js
    ```

3.  **Abra no Navegador:**
    Clique duas vezes no arquivo `index.html` para abri-lo diretamente no seu navegador favorito (Google Chrome, Firefox, etc.). E pronto!

---

## 🛠️ Customização

Você pode facilmente adaptar este projeto para a sua própria marca!

### Mudar os Serviços
- Abra o arquivo `script.js`.
- Encontre o array `const services = [...]`.
- Altere, adicione ou remova os objetos para refletir seus próprios serviços e preços.
  ```javascript
  const services = [
      { id: 'meu-servico-1', name: 'Nome do Meu Serviço', price: 99.99 },
      { id: 'meu-servico-2', name: 'Outro Serviço Incrível', price: 120.00 }
  ];
