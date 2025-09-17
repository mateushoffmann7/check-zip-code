**Consulta de Endereço por CEP**

Uma aplicação web simples e interativa para consultar informações de endereço a partir de um CEP brasileiro. O projeto demonstra o consumo de uma API pública para enriquecer a experiência do usuário.

<img width="1592" height="581" alt="image" src="https://github.com/user-attachments/assets/c1850883-e679-4992-aba3-7fd1332d8b3a" />


Destaques do Código
Este projeto foi desenvolvido para praticar e aplicar conceitos essenciais do JavaScript moderno, como:

Consumo de API: Utiliza a API pública do ViaCEP (https://viacep.com.br) para buscar dados de endereços.

Requisições Assíncronas (async/await): O uso de async/await permite que a requisição à API seja feita de forma não bloqueante, garantindo que a interface do usuário permaneça responsiva enquanto a resposta é aguardada.

Manipulação de Requisições (fetch): A função fetch() é utilizada para enviar a requisição HTTP e obter a resposta da API de forma eficiente.

Tratamento de Erros (try/catch/throw): Um bloco try...catch garante que a aplicação não quebre em caso de problemas, como um CEP inválido ou uma falha de conexão. A instrução throw é usada para lançar um erro quando o CEP retornado pela API é undefined, indicando que o dado não foi encontrado.

Como Usar
acesse meu deploy: https://check-zip-code.vercel.app/

Digite um CEP válido no campo de texto e pressione "Enter" ou clique no botão "Enviar".

O endereço correspondente será exibido na tela.

💻 Tecnologias
HTML5: Estrutura da página.

CSS3: Estilização.

JavaScript (ES6+): Lógica da aplicação.
