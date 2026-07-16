# 🛏️ Quadro de Acomodações — Igreja Maceió

> Página web interativa para visualização e organização da distribuição de quartos, camas e acessibilidade para o evento da Igreja em Maceió.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## 📋 Sobre o Projeto

Este projeto é um **quadro digital de acomodações** que organiza e exibe de forma clara a estrutura de hospedagem disponível para um evento da igreja. A página permite visualizar a distribuição de quartos coletivos, suítes e infraestrutura sanitária, com **recomendações de alocação baseadas em acessibilidade** para diferentes perfis de público.

### Problema Resolvido

Transformar informações brutas sobre a estrutura do local (quartos, camas, banheiros) em um **painel visual interativo** que facilita a tomada de decisão na hora de distribuir participantes, levando em conta:

- 👴 **Idosos e pessoas com mobilidade reduzida** — evitar escadas e beliches superiores
- 👶 **Famílias com crianças de colo** — priorizar privacidade e banheiro privativo
- 💑 **Casais** — suítes com cama de casal
- 🧑‍🤝‍🧑 **Jovens e adultos** — flexibilidade de alocação

---

## ✨ Funcionalidades

| Funcionalidade | Descrição |
|---|---|
| **Tabelas detalhadas** | Quartos coletivos (11), suítes (9) e quartos auxiliares (3) com todas as informações |
| **Filtros interativos** | Filtragem por perfil de público (Idosos, Famílias, Casais, Jovens) |
| **Contadores animados** | Header com estatísticas animadas (total de camas, quartos, capacidade) |
| **Recomendações** | Cards com orientações de alocação por perfil de acessibilidade |
| **Observações** | Alertas sobre limitações, pendências e prioridades de alocação |
| **Responsivo** | Layout adaptável para desktop, tablet e mobile |
| **Modo impressão** | Estilos otimizados para impressão (`Ctrl + P`) |
| **Tema escuro** | Design premium com glassmorphism e partículas animadas |

---

## 🏗️ Estrutura do Local

```
📊 Capacidade Total: ~240 pessoas
│
├── 🏠 Quartos Coletivos (11 quartos) — 214 camas
│   ├── Quartos 01–08: 20 camas cada (beliches + avulsas)
│   ├── Quarto 09: 22 camas (misto)
│   ├── Quarto 10: 12 camas (6 beliches)
│   └── Quarto 11: 20 camas (10 beliches)
│
├── 🛌 Suítes com Escada (6 unidades) — 12 camas
│   ├── Suítes 01–04: 1 casal + 1 solteiro cada
│   ├── Suíte 05: 1 casal
│   └── Suíte 06: 1 casal + 2 solteiros
│
├── 🛌 Suítes com Pequeno Lance (3 unidades) — 7 camas
│   ├── Suítes 07–08: 1 casal + 2 solteiros cada
│   └── Suíte 09: 1 casal
│
└── 🏡 Casinha Central (3 quartos) — ~6–9 camas
    └── Quantidade exata a confirmar
```

---

## 🚀 Como Usar

### Visualização Local

Basta abrir o arquivo `index.html` no navegador:

```bash
# Clone o repositório
git clone https://github.com/Rodrigues011xbx/accommodation-chart-page.git

# Acesse a pasta
cd accommodation-chart-page

# Abra no navegador (Linux)
xdg-open index.html

# Abra no navegador (macOS)
open index.html

# Abra no navegador (Windows)
start index.html
```

> **Nota:** Não é necessário nenhum servidor ou instalação de dependências. O projeto é 100% estático (HTML + CSS + JS puro).

### GitHub Pages

O projeto pode ser publicado diretamente via **GitHub Pages** para acesso online:

1. Acesse **Settings** → **Pages** no repositório
2. Selecione a branch `main` e a pasta `/ (root)`
3. A página estará disponível em: `https://rodrigues011xbx.github.io/accommodation-chart-page/`

---

## 📁 Estrutura de Arquivos

```
Quadro/
├── img/
│   └── acomodacao.png      # Favicon do projeto
├── index.html              # Página principal
├── styles.css              # Estilos (design system completo)
├── app.js                  # Lógica (dados, renderização, filtros, animações)
├── informacoes.md          # Dados brutos de referência
└── readme.md               # Documentação
```

---

## 🎨 Design

O projeto utiliza um design **dark mode premium** com:

- **Glassmorphism** — cards com `backdrop-filter` e bordas sutis
- **Gradientes** — header e ícones com gradientes vibrantes
- **Partículas animadas** — efeito de fundo com partículas flutuantes
- **Micro-animações** — fade-in ao scroll, hover effects, contadores animados
- **Tipografia** — [Inter](https://fonts.google.com/specimen/Inter) via Google Fonts
- **Paleta** — tons de índigo, violeta e ciano sobre fundo escuro

---

## 🤝 Contribuição

Caso precise atualizar informações de quartos ou adicionar novos dados:

1. Edite o objeto `DATA` no arquivo `app.js`
2. Cada quarto possui as propriedades: `id`, `name`, `beds`, `bedType`, `showers`, `toilets`, `sinks`, `access`, `tags`, `tagLabels`
3. Os filtros e recomendações se ajustam automaticamente com base nas `tags`

---

## 📄 Licença

Este projeto foi desenvolvido para uso interno da organização do evento da Igreja em Maceió.

---

<p align="center">
  Feito com ❤️ para a Igreja em Maceió — Julho 2026
</p>
