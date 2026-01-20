# CodeVerse Hub - Official Website (v2)

Welcome to the **CodeVerse Hub v2** repository! This is the source code for the official website of CodeVerse Hub, a community-driven platform designed for developers to collaborate, learn, and build software together.

## 🚀 About The Project

CodeVerse Hub is more than just a Discord server. It's a collective of passionate developers, designers, and creators. The website serves as a central point for our resources, announcements, and project milestones.

**Key Features:**
*   **Community Hub:** Information about who we are and our featured projects.
*   **Resource Browser:** Curated lists of learning resources for our community.
*   **Timeline:** Tracks major events and announcements.
*   **Admin Dashboard:** A secure internal tool for managing site content and announcements.

## 🛠️ Tech Stack

This project is built using modern web technologies:

*   **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Styling:** CSS Modules with global CSS variables for theming.
*   **Authentication:** Custom JWT-based admin authentication (`jose`).
*   **Data:** JSON-based simple data storage (for v2 simplicity).

## 📂 Project Structure

```bash
src/
├── app/                  # Next.js App Router
│   ├── (public)/         # Public facing pages (Home, Resources, Timeline)
│   ├── admin/            # Protected Admin Dashboard
│   └── api/              # API Routes (if any)
├── components/           # Reusable UI components (Navbar, Footer, etc.)
├── data/                 # JSON data files (announcements.json, etc.)
└── styles/               # Global styles
```

## 🏁 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

*   Node.js (v18 or higher)
*   npm or yarn

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/TheCodeVerseHub/site-v2.git
    cd site-v2
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up Environment Variables:**
    Create a `.env` file in the root directory. You can duplicate a `.env.example` if it exists, or add the following:
    ```env
    # Admin Credentials
    ADMIN_USERNAME=your_username
    ADMIN_PASSWORD=your_secure_password
    ADMIN_SESSION_SECRET=long_complex_secret_string
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

5.  **Open your browser:**
    Navigate to [http://localhost:3000](http://localhost:3000).

## 🤝 Contributing

We welcome contributions from the community! Whether it's fixing a bug, improving documentation, or adding a new feature, your help is appreciated.

1.  **Fork the Project**
2.  **Create your Feature Branch** (`git checkout -b feature/AmazingFeature`)
3.  **Commit your Changes** (`git commit -m 'Add some AmazingFeature'`)
4.  **Push to the Branch** (`git push origin feature/AmazingFeature`)
5.  **Open a Pull Request**

Please read our [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

## 💬 Community

*   **Discord:** [Join our Server](https://discord.gg/3xKFvKhuGR)
*   **GitHub:** [TheCodeVerseHub](https://github.com/TheCodeVerseHub)

---
Built with ❤️ by the CodeVerse Hub Team
