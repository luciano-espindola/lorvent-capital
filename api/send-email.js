// Vercel Serverless Function para enviar emails
// Requer configuração de variáveis de ambiente na Vercel

export default async function handler(req, res) {
  // Apenas permitir método POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, type, message } = req.body;

  // Validação básica
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Campos obrigatórios faltando' });
  }

  // Configurar email usando Nodemailer ou serviço de email
  // Para usar, você precisa configurar variáveis de ambiente na Vercel:
  // - SMTP_HOST (ex: smtp.gmail.com)
  // - SMTP_PORT (ex: 587)
  // - SMTP_USER (seu email)
  // - SMTP_PASS (sua senha de app)
  // - TO_EMAIL (lucianoespindola@gmail.com)

  const emailContent = `
Nova solicitação de consultoria recebida através do site Lorvent Capital:

Nome: ${name}
Email: ${email}
Telefone: ${phone || 'Não informado'}
Perfil: ${type === 'individual' ? 'Pessoa Física / Family Office' : 'Pessoa Jurídica / Empresa'}

Mensagem:
${message}

---
Este email foi enviado automaticamente através do formulário de contato.
  `;

  try {
    // Usando serviço de email (exemplo com SendGrid, Mailgun, ou Nodemailer)
    // Por enquanto, vamos usar uma solução simples com fetch para um serviço de email
    
    // Opção 1: Usar Resend (recomendado - gratuito até 3000 emails/mês)
    // Opção 2: Usar SendGrid
    // Opção 3: Usar Mailgun
    
    // Exemplo básico - você precisará configurar um serviço de email
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`
      },
      body: JSON.stringify({
        from: 'noreply@lorventcapital.com',
        to: process.env.TO_EMAIL || 'lucianoespindola@gmail.com',
        subject: 'Nova Solicitação de Consultoria - Lorvent Capital',
        text: emailContent
      })
    });

    if (response.ok) {
      return res.status(200).json({ success: true, message: 'Email enviado com sucesso' });
    } else {
      throw new Error('Erro ao enviar email');
    }
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    return res.status(500).json({ error: 'Erro ao enviar email. Tente novamente mais tarde.' });
  }
}
