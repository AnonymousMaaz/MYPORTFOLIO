# 3D Portfolio Website

A modern, interactive portfolio website featuring 3D elements and animations. Built with React, Three.js, and EmailJS for contact form functionality.

![Portfolio Preview](public/images/preview.png)

## Features

- 🎨 Modern and responsive design
- 🚀 Interactive 3D elements using Three.js
- 📱 Mobile-friendly interface
- 📧 Contact form with EmailJS integration
- 🌟 Smooth animations and transitions
- 🎯 SEO optimized

## Tech Stack

- React
- Three.js
- EmailJS
- Tailwind CSS
- Vite

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/3d-portfolio.git
cd 3d-portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env` file:
```bash
cp .env.example .env
```

4. Configure EmailJS:
   - Sign up for an [EmailJS](https://www.emailjs.com/) account
   - Create an email service (Gmail recommended)
   - Create an email template
   - Update your `.env` file with your EmailJS credentials:
     ```
     VITE_APP_EMAILJS_SERVICE_ID=your_service_id
     VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
     VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
     ```

5. Start the development server:
```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173`

## Deployment

1. Build the project:
```bash
npm run build
# or
yarn build
```

2. Deploy the `dist` folder to your preferred hosting service (Vercel, Netlify, etc.)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Three.js](https://threejs.org/) for 3D graphics
- [EmailJS](https://www.emailjs.com/) for email functionality
- [React](https://reactjs.org/) for the UI framework
- [Tailwind CSS](https://tailwindcss.com/) for styling

## Contact

Your Name - [@yourtwitter](https://twitter.com/yourtwitter)

Project Link: [https://github.com/yourusername/3d-portfolio](https://github.com/yourusername/3d-portfolio)
