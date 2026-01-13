# Lorvent Capital - Website

Site institucional da Lorvent Capital - Consultoria independente em seguros e gestão de riscos.

## 🚀 Deploy na Vercel

### Opção 1: Via Interface Web da Vercel (Recomendado)

1. Acesse [vercel.com](https://vercel.com) e faça login (ou crie uma conta)
2. Clique em "Add New Project"
3. Conecte seu repositório Git (GitHub, GitLab ou Bitbucket) ou faça upload da pasta
4. A Vercel detectará automaticamente que é um site estático
5. Clique em "Deploy"

### Opção 2: Via CLI da Vercel

1. Instale a CLI da Vercel:
   ```bash
   npm i -g vercel
   ```

2. No diretório do projeto, execute:
   ```bash
   vercel
   ```

3. Siga as instruções no terminal para fazer login e fazer o deploy

### Opção 3: Via GitHub (Deploy Automático)

1. Crie um repositório no GitHub
2. Faça push do código:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <seu-repositorio-github>
   git push -u origin main
   ```

3. Na Vercel, conecte o repositório GitHub
4. A cada push, o site será atualizado automaticamente

## 📁 Estrutura do Projeto

```
lorvent-capital/
├── index.html          # Página principal
├── style.css          # Estilos
├── script.js          # JavaScript
├── assets/            # Assets (logo, imagens de fundo)
├── images/            # Imagens do site
└── vercel.json        # Configuração do Vercel
```

## 🛠 Tecnologias

- HTML5
- CSS3 (Vanilla)
- JavaScript (Vanilla)
- Font Awesome (CDN)
- Google Fonts (Outfit, Inter, Cinzel)

## 📝 Notas

- O site é totalmente estático, não requer build
- Todas as dependências são carregadas via CDN
- Compatível com todos os navegadores modernos
