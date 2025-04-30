# Kenny Almeida - Website

Website profissional para Kenny Almeida, especialista em marketing digital.

## Características

- Design moderno e responsivo
- Otimizado para SEO
- Fácil de personalizar
- Componentes reutilizáveis
- Integração com GitHub Pages

## Tecnologias Utilizadas

- Next.js
- React
- TypeScript
- Tailwind CSS
- React Icons

## Configuração do Ambiente

1. Clone o repositório:

```bash
git clone https://github.com/diogocoutinho/kennyalmeida.github.io.git
cd kennyalmeida.github.io
```

2. Instale as dependências:

```bash
npm install
```

3. Execute o projeto em modo desenvolvimento:

```bash
npm run dev
```

4. Acesse o site em: [http://localhost:3000](http://localhost:3000)

## Personalização

### Cores

As cores principais do site podem ser alteradas no arquivo `src/app/globals.css`:

```css
:root {
  --foreground-rgb: 43, 45, 66; /* Cor principal (azul escuro) */
  --background-rgb: 255, 255, 255; /* Cor de fundo */
}
```

### Conteúdo

O conteúdo do site pode ser personalizado editando os seguintes arquivos:

- `src/components/Hero.tsx` - Seção principal
- `src/components/Services.tsx` - Serviços oferecidos
- `src/components/About.tsx` - Sobre o profissional
- `src/components/Testimonials.tsx` - Depoimentos
- `src/components/Contact.tsx` - Formulário de contato
- `src/components/CTA.tsx` - Chamadas para ação

### Imagens

Substitua as imagens na pasta `public/`:

- `hero-image.jpg` - Imagem principal
- `about-image.jpg` - Imagem da seção sobre
- `testimonial-1.jpg`, `testimonial-2.jpg`, `testimonial-3.jpg` - Fotos dos depoimentos

## Deploy no GitHub Pages

1. Configure o repositório no GitHub
2. Instale a dependência `gh-pages`:

```bash
npm install gh-pages --save-dev
```

3. Adicione o script de deploy no `package.json`:

```json
"scripts": {
  "deploy": "gh-pages -d out"
}
```

4. Execute o build e deploy:

```bash
npm run build
npm run deploy
```

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
