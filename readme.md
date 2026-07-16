# 🛏️ Quadro de Acomodações — Igreja Maceió

> Painel interativo e editável para organização da distribuição de quartos, camas e público para eventos da Igreja em Maceió. Otimizado para retiros e eventos dinâmicos.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## 📋 Sobre o Projeto

Este projeto é um **quadro digital de acomodações** altamente flexível. Originalmente adaptado para a estrutura de um **Retiro Masculino**, ele permite o gerenciamento completo (CRUD) de quartos coletivos, suítes e blocos auxiliares diretamente na interface do navegador, facilitando a distribuição dos participantes de acordo com perfis específicos.

O design foi ajustado para um **Light Mode** elegante e limpo, mantendo a vibração dos badges e a riqueza visual das informações.

### Perfis de Distribuição (Masculino)

- 👑 **Liderança / Pastores** — Prioridade para as suítes privativas.
- 🍳 **Equipe de Cozinha** — Localizados em áreas de fácil acesso e próximas à cozinha (como a Casinha Central).
- ⚡ **Jovens** — Otimizados nos quartos coletivos maiores com beliches (incluindo superiores).
- 👤 **Público Geral** — Distribuídos nos dormitórios coletivos gerais.

---

## ✨ Novas Funcionalidades (Versão Editável)

| Funcionalidade | Descrição |
|---|---|
| **Edição em Tela (CRUD)** | Adicione, edite ou exclua qualquer quarto ou suíte através de formulários dinâmicos. |
| **Edição de Títulos** | Clique diretamente no título ou subtítulo do cabeçalho para personalizá-los para o seu evento. |
| **Persistência Local** | Todas as alterações são salvas automaticamente no navegador (`localStorage`), sem perder dados ao recarregar. |
| **Exportação JSON** | Exporte todo o mapa de acomodações configurado em um clique para um arquivo `.json` (Backup). |
| **Exportação CSV** | Exporte os dados consolidados de quartos e suítes diretamente para uma planilha do Excel (.csv). |
| **Importação JSON** | Carregue dados salvos anteriormente ou configurações prontas para novos eventos. |
| **Gestão de Observações** | Crie, altere ou exclua cards de observação/pendências na parte inferior. |
| **Filtros por Perfil** | Destaque e isole apenas as acomodações recomendadas para o público selecionado. |
| **Light Mode Moderno** | Visual claro e limpo para facilitar a leitura no sol ou em ambientes abertos, mantendo badges coloridos. |

---

## 🚀 Como Usar

### Execução Local

Basta abrir o arquivo `index.html` no navegador de sua preferência. Não há dependências externas nem necessidade de servidores locais (Node.js, PHP, etc.).

```bash
# Abra a pasta do projeto
cd Quadro

# Abra o index.html no navegador
# No Linux:
xdg-open index.html
# No Windows:
start index.html
# No macOS:
open index.html
```

### Gestão e Reutilização dos Dados

1. **Editar Dados**: Use o botão de engrenagem/lápis de edição ao lado de cada acomodação para alterar suas especificações ou tags.
2. **Adicionar Acomodações**: Use o botão verde `+` no canto de cada seção (Quartos Coletivos e Suítes).
3. **Novo Evento**: Se for usar em outro retiro, basta clicar em **Resetar** para restaurar a estrutura base, ou editar tudo e clicar em **Exportar** para guardar a configuração em seu computador.
4. **Importar**: Carregue o arquivo `.json` gerado anteriormente para restaurar o mapa completo daquele evento.

---

## 📁 Estrutura de Arquivos

```
Quadro/
├── img/
│   └── acomodacao.png      # Ícone da aplicação / Favicon
├── index.html              # Estrutura HTML do painel e modais
├── styles.css              # Estilização Light Mode responsiva
├── app.js                  # Lógica de CRUD, filtros, import/export e localStorage
├── informacoes.md          # Referências e anotações brutas iniciais
└── readme.md               # Documentação do projeto
```

---

<p align="center">
  Feito com ❤️ para a Igreja em Maceió — Atualizado em 2026
</p>
