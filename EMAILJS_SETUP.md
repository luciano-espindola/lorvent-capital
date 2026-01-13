# Configuração do EmailJS para Envio de Formulário

## Passo a Passo para Configurar

### 1. Criar Conta no EmailJS
1. Acesse: https://www.emailjs.com/
2. Crie uma conta gratuita (permite até 200 emails/mês)
3. Faça login no dashboard

### 2. Configurar Serviço de Email
1. No dashboard, vá em **Email Services**
2. Clique em **Add New Service**
3. Escolha seu provedor de email (Gmail, Outlook, etc.)
4. Siga as instruções para conectar sua conta
5. **Anote o Service ID** gerado

### 3. Criar Template de Email
1. Vá em **Email Templates**
2. Clique em **Create New Template**
3. Use este template:

**Subject:**
```
Nova Solicitação de Consultoria - Lorvent Capital
```

**Content:**
```
Nova solicitação de consultoria recebida:

Nome: {{from_name}}
Email: {{from_email}}
Telefone: {{phone}}
Perfil: {{profile_type}}

Mensagem:
{{message}}

---
Este email foi enviado através do formulário de contato do site Lorvent Capital.
```

4. **Anote o Template ID** gerado

### 4. Obter Public Key
1. Vá em **Account** > **General**
2. Copie o **Public Key**

### 5. Atualizar o Código
Substitua no arquivo `script.js`:
- `YOUR_PUBLIC_KEY` → Seu Public Key
- `YOUR_SERVICE_ID` → Seu Service ID
- `YOUR_TEMPLATE_ID` → Seu Template ID

### Exemplo Final:
```javascript
emailjs.init("abc123xyz"); // Seu Public Key
emailjs.send('service_abc123', 'template_xyz789', {...});
```

## Alternativa: Usar Formspree (Mais Simples)

Se preferir uma solução ainda mais simples, pode usar Formspree:

1. Acesse: https://formspree.io/
2. Crie uma conta gratuita
3. Crie um novo formulário
4. Configure o email de destino: wellington.aquino@lorventcapital.com.br
5. Copie o endpoint do formulário
6. Atualize o `action` do formulário no HTML
