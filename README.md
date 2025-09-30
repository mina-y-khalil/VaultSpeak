# VaultSpeak – Secrets App

<p align="center">
  <img src="https://redeem-innovations.com/wp-content/uploads/2025/09/VaultSpeak-App2.png" alt="VaultSpeak App" />
</p>

## 📖 Overview

VaultSpeak is a fun Node.js application that fetches random secrets from a public API and displays them in a styled EJS view. The project demonstrates the use of **Express**, **Axios**, **EJS**, and modern CSS styling for an engaging UI with neon effects.

## 🚀 Features

- Fetch random secrets from the [Secrets API](https://secrets-api.appbrewery.com/random).
- Display secrets and usernames dynamically with **EJS templates**.
- Stylish **hover-reveal card effect** with glowing borders.
- Logging middleware using **morgan** for development.
- Static assets served from a `public` folder.

## 🛠️ Tech Stack

- **Backend:** Node.js, Express
- **View Engine:** EJS
- **HTTP Client:** Axios
- **Middleware:** Body-parser, Morgan
- **Styling:** Custom CSS with neon glow effects

## 📂 Project Structure

```
.
├── public/           # Static assets (CSS, images)
├── views/            # EJS templates
│   └── index.ejs
├── server.js         # Main Express server
├── package.json
└── README.md
```

## ⚙️ Installation & Setup

1. Clone this repository:

   ```bash
   git clone https://github.com/mina-y-khalil/VaultSpeak.git
   cd vaultspeak
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the server:

   ```bash
   nodemon index.js
   ```

   or

   ```bash
   node index.js
   ```

4. Open the app in your browser:
   ```
   http://localhost:3000
   ```

## 🎨 Usage

- Open the homepage to view a random secret.
- Hover over the styled card to reveal the text with a glowing neon effect.
- Click the button to fetch and display another secret.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!  
Feel free to fork the project and submit a pull request.

## 🌐 Connect with Me

Let’s connect and share ideas!

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Mina%20Y.%20Khalil-blue?style=flat&logo=linkedin)](https://www.linkedin.com/in/mina-y-khalil/)
