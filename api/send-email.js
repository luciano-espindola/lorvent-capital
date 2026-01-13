// Vercel Serverless Function para enviar emails
// Requer configuração de variáveis de ambiente na Vercel

export default async function handler(req, res) {
  // Permitir CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Apenas permitir método POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, type, message } = req.body;

  // Validação básica
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Campos obrigatórios faltando' });
  }

  const toEmail = process.env.TO_EMAIL || 'lucianoespindola@gmail.com';
  const resendApiKey = process.env.RESEND_API_KEY;

  // Se não tiver Resend configurado, usar fallback simples
  if (!resendApiKey) {
    // Log para debug (em produção, você pode usar um serviço de logging)
    console.log('Email que seria enviado:', {
      to: toEmail,
      from: email,
      subject: 'Nova Solicitação de Consultoria - Lorvent Capital',
      body: `
Nome: ${name}
Email: ${email}
Telefone: ${phone || 'Não informado'}
Perfil: ${type === 'individual' ? 'Pessoa Física / Family Office' : 'Pessoa Jurídica / Empresa'}

Mensagem:
${message}
      `
    });
    
    // Retornar sucesso mesmo sem enviar (para desenvolvimento)
    // Em produção, configure o RESEND_API_KEY
    return res.status(200).json({ 
      success: true, 
      message: 'Email enviado com sucesso',
      note: 'Configure RESEND_API_KEY na Vercel para envio real'
    });
  }

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
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${resendApiKey}`
      },
      body: JSON.stringify({
        from: 'onboarding@resend.dev', // Use seu domínio verificado após configurar
        to: toEmail,
        subject: 'Nova Solicitação de Consultoria - Lorvent Capital',
        text: emailContent,
        reply_to: email
      })
    });

    const data = await response.json();

    if (response.ok) {
      return res.status(200).json({ success: true, message: 'Email enviado com sucesso' });
    } else {
      console.error('Erro Resend:', data);
      throw new Error(data.message || 'Erro ao enviar email');
    }
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    return res.status(500).json({ error: 'Erro ao enviar email. Tente novamente mais tarde.' });
  }
}
