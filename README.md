# Projeto Cortez Gás & Água

Aplicativo de fidelidade digital para controlar clientes, selos de gás e água, prêmios e histórico de movimentações.

## Como rodar

### Opção 1: abrir diretamente no navegador
- Abra o arquivo `index.html` no navegador.

### Opção 2: servidor local
```bash
python -m http.server 8000
```
Depois acesse:
```bash
http://localhost:8000
```

## Funcionalidades
- Login de cliente por WhatsApp
- Login de administrador com PIN padrão `1234`
- Cadastro de novos clientes
- Busca por nome ou telefone no painel administrativo
- Aumento e resgate de selos de gás e água
- Histórico de movimentações por cliente
- Persistência em `localStorage`
- Design responsivo para mobile

## Estrutura
- `index.html` — estrutura da interface
- `styles.css` — estilos e layout
- `script.js` — lógica do sistema

## Observações
Este projeto foi pensado como uma versão funcional e visualmente melhorada do protótipo original, mantendo simplicidade de execução e sem dependências externas de build.

## Personalização
Você pode alterar facilmente:
- PIN administrativo em `script.js`
- Nome e dados iniciais em `initialCustomers`
- Número do WhatsApp da empresa em `handleUpdateStamps` / link do WhatsApp

## Licença
MIT










