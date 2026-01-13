# Lorvent Capital - Instruções para Desenvolvimento no Cursor

Este documento contém o contexto, regras de design e prompts necessários para continuar o desenvolvimento do site **Lorvent Capital** utilizando o editor **Cursor**.

## 📂 Como Abrir o Projeto

1. Abra o **Cursor**.
2. Vá em **File > Open Folder...** (Arquivo > Abrir Pasta).
3. Selecione a pasta `lorvent-capital` que está em seus Downloads.
4. (Opcional) Abra este arquivo (`CURSOR_INSTRUCTIONS.md`) para ter os prompts à mão.

---

## 🤖 Contexto para a IA (Cursor AI / Copilot)

Para garantir que o Cursor entenda o estilo visual e o propósito do projeto, recomenda-se criar um arquivo chamado `.cursorrules` na raiz do projeto com o conteúdo abaixo, ou colar o texto abaixo no chat sempre que iniciar uma nova sessão.

### Copie e Cole no Chat (ou configure no `.cursorrules`):

```markdown
# Contexto do Projeto: Lorvent Capital

Você está atuando como um Engenheiro de Software Sênior e Designer de UI/UX especialista em interfaces "High-End" para o mercado financeiro.

## Sobre a Empresa
A Lorvent Capital é uma boutique financeira e corretora independente focada em Wealth Management, Planejamento Sucessório e Seguros. O público-alvo inclui Family Offices, indivíduos de alta renda (High Net Worth) e grandes corporações.

## Estética e Design System (CRÍTICO)
O design DEVE ser premium, sofisticado e minimalista.
- **Cores**: 
  - Primária: Deep Midnight Blue (`#0c1220`)
  - Secundária: Dark Navy (`#1a2436`)
  - Accent: Metallic Gold (`#D4AF37`) e Light Gold (`#F3E5AB`) para gradientes de texto.
- **Estilo**: "Glassmorphism" sutil. Cartões com fundo translúcido, bordas finas e brilhantes, sombras suaves.
- **Tipografia**: 'Outfit' para títulos (moderno, geométrico) e 'Inter' para corpo. 'Cinzel' pode ser usado com parcimônia para detalhes de luxo.
- **Tech Stack**: HTML5 Semântico, Vanilla CSS (Variáveis CSS são obrigatórias), JavaScript Puro (Vanilla JS). Evite frameworks pesados a menos que solicitado.

## Regras de Desenvolvimento
1. **Aesthetics First**: A primeira impressão deve ser "Uau". Use animações suaves (fade-in, slide-up) ao rolar.
2. **Responsividade**: O site deve funcionar perfeitamente em mobile, adaptando grids para colunas únicas.
3. **Código Limpo**: Mantenha o CSS organizado em seções lógicas. Use classes utilitárias para cor e tipografia onde fizer sentido.

## Serviços Oferecidos (Referência)
- **Pessoa Física**: Previdência, Investimentos, Sucessão, Seguro de Vida, Saúde.
- **Pessoa Jurídica**: Seguros Corporativos (Frota, D&O, RC), Benefícios (Saúde, Odonto), Planejamento Financeiro.

## Tom de Voz (Copywriting)
O texto deve transmitir segurança, exclusividade, independência e rigor técnico. Use termos como "Boutique Financeira", "Arquitetura Patrimonial", "Governança" e "Independência".
```

---

## 💡 Exemplos de Prompts para Evolução

Aqui estão alguns exemplos de como pedir novas funcionalidades ao Cursor mantendo a consistência do projeto.

### 1. Adicionar uma nova seção (ex: Depoimentos)
> "Crie uma seção de 'Depoimentos de Clientes' para ser inserida antes do rodapé. Use o mesmo estilo de glassmorphism dos cartões de serviço. Os depoimentos devem focar em 'atendimento personalizado' e 'segurança patrimonial'. Adicione uma animação suave de entrada."

### 2. Melhorar o Formulário de Contato
> "O formulário atual é funcional, mas quero deixá-lo mais elegante. Faça os campos de input terem apenas uma borda inferior (underline style) que muda para dourado (`var(--accent-gold)`) quando focado. Adicione uma validação simples em JavaScript que mostre uma mensagem de erro sutil abaixo do campo se estiver vazio."

### 3. Criar uma página interna (ex: Sobre o Fundador)
> "Crie um novo arquivo `founder.html` detalhando a biografia de Wellington Aquino. Mantenha o mesmo Header e Footer. Use um layout de duas colunas: foto à esquerda (use um placeholder por enquanto) e texto à direita. Destaque as certificações (CEA, CPA-20) com ícones dourados."

### 4. Ajustes de Mobile
> "Verifique o comportamento do menu de navegação em telas menores que 768px. Implemente um 'Hamburger Menu' que abre uma sobreposição (overlay) com fundo desfocado (backdrop-filter) e links centralizados, usando as cores do tema."

---

## 🛠 Comandos Úteis

Se você estiver usando o terminal integrado do Cursor:

- Para abrir o site no navegador: `open index.html`
- Para iniciar um servidor local simples (se tiver Python): `python3 -m http.server`
- Para iniciar com Node (se tiver instalado `serve`): `npx serve .`
