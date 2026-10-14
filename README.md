# Finanças do Dia

Blog sobre economia do dia a dia e como guardar dinheiro.

## Como rodar localmente

1. Instale as dependências:
```bash
npm install
```

2. Rode o servidor de desenvolvimento:
```bash
npm run dev
```

3. Abra [http://localhost:3000](http://localhost:3000)

## Como adicionar novos artigos

Crie um arquivo `.md` na pasta `content/posts/` com o seguinte formato:

```md
---
title: "Título do artigo"
date: "2026-10-10"
excerpt: "Resumo curto do artigo."
category: "Poupança"
---

Conteúdo do artigo em Markdown...
```

## Deploy na Vercel

1. Faça push deste repositório para o GitHub
2. Importe o projeto na Vercel
3. Pronto! O site estará no ar.
