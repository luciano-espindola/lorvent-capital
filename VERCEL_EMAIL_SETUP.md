# Configuração de Envio de Email na Vercel

## Opção 1: Usar Resend (Recomendado - Mais Simples)

### Passo 1: Criar conta no Resend
1. Acesse: https://resend.com/
2. Crie uma conta gratuita (3000 emails/mês grátis)
3. Vá em **API Keys** e crie uma nova chave
4. Copie a chave API

### Passo 2: Configurar na Vercel
1. No dashboard da Vercel, vá em seu projeto
2. Vá em **Settings** > **Environment Variables**
3. Adicione as variáveis:
   - `RESEND_API_KEY`: Sua chave API do Resend
   - `TO_EMAIL`: wellington.aquino@lorventcapital.com.br
4. Clique em **Save**

### Passo 3: Verificar Domínio (Opcional)
- Para usar um email personalizado (ex: noreply@lorventcapital.com), você precisa verificar o domínio no Resend
- Por enquanto, pode usar o email padrão do Resend

## Opção 2: Usar SendGrid

1. Crie conta em: https://sendgrid.com/
2. Crie uma API Key
3. Configure na Vercel:
   - `SENDGRID_API_KEY`: Sua chave API
   - `TO_EMAIL`: wellington.aquino@lorventcapital.com.br

## Opção 3: Usar EmailJS (Mais Simples, mas requer configuração manual)

Veja o arquivo `EMAILJS_SETUP.md` para instruções detalhadas.

## Opção 4: Usar Formspree (Mais Simples de Todas)

1. Acesse: https://formspree.io/
2. Crie uma conta gratuita
3. Crie um novo formulário
4. Configure o email de destino: wellington.aquino@lorventcapital.com.br
5. Copie o endpoint (ex: https://formspree.io/f/xxxxx)
6. Atualize o formulário no HTML:

```html
<form id="contactForm" action="https://formspree.io/f/SEU_ID_AQUI" method="POST">
```

E remova o `onsubmit="handleFormSubmit(event)"` do formulário.

## Recomendação

Para começar rapidamente, use **Formspree** (Opção 4). É a mais simples e funciona imediatamente sem configuração de servidor.

Para uma solução mais profissional e integrada, use **Resend** (Opção 1).
