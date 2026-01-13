# Configuração de Variáveis de Ambiente na Vercel

## ⚠️ IMPORTANTE: Configure na Vercel

A chave de API do Resend foi fornecida. Agora você precisa configurá-la na Vercel:

### Passo a Passo:

1. **Acesse o Dashboard da Vercel**
   - Vá em: https://vercel.com/dashboard
   - Encontre o projeto `lorvent-capital`

2. **Vá em Settings**
   - Clique no projeto
   - Vá na aba **Settings**
   - Clique em **Environment Variables**

3. **Adicione as Variáveis:**
   
   **Variável 1:**
   - Key: `RESEND_API_KEY`
   - Value: `sua_chave_api_resend_aqui`
   - Environment: Production, Preview, Development (marque todos)
   
   **Variável 2:**
   - Key: `TO_EMAIL`
   - Value: `wellington.aquino@lorventcapital.com.br`
   - Environment: Production, Preview, Development (marque todos)

4. **Salve e Faça Redeploy**
   - Clique em **Save**
   - Vá em **Deployments**
   - Clique nos três pontos do último deployment
   - Selecione **Redeploy**

## ✅ Após Configurar

O formulário de contato começará a enviar emails automaticamente para `wellington.aquino@lorventcapital.com.br` sempre que alguém preencher e enviar o formulário.

## 📧 Formato do Email Recebido

Você receberá um email com:
- Nome do cliente
- Email do cliente
- Telefone
- Perfil (Pessoa Física ou Jurídica)
- Mensagem

## 🔒 Segurança

A chave de API está configurada como variável de ambiente e não está exposta no código, garantindo segurança.
