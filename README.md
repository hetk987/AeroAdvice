# 🌍 AeroAdvice - AI-Powered Travel Planning Platform

[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.2-purple.svg)](https://getbootstrap.com/)
[![OpenAI](https://img.shields.io/badge/OpenAI-GPT--3.5-green.svg)](https://openai.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

AeroAdvice is an intelligent travel planning platform that leverages AI to provide personalized destination recommendations based on your preferences, budget, and travel style. Plan your perfect trip with AI-powered insights and seamless booking integration.

## ✨ Features

- **AI-Powered Recommendations**: Get personalized travel suggestions using OpenAI's GPT-3.5
- **Smart Preference Matching**: Input your cuisine preferences, activities, budget, and travel dates
- **Interactive Trip Planning**: Intuitive interface for setting travel preferences
- **Destination Discovery**: Explore curated destinations with detailed descriptions
- **Responsive Design**: Beautiful, modern UI that works across all devices
- **Flight Integration**: Seamless integration with flight booking systems
- **User Authentication**: Secure login and signup functionality

## 🛠️ Technologies Used

- **Frontend**: React 18.2.0
- **Styling**: Bootstrap 5.3.2, React Bootstrap 2.10.0
- **AI Integration**: OpenAI API (GPT-3.5 Turbo)
- **Routing**: React Router DOM 6.21.3
- **Date Handling**: React DatePicker 5.0.0
- **UI Components**: MDB React UI Kit 7.1.0

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (version 14.0 or higher)
- **npm** (version 6.0 or higher)
- **OpenAI API Key** (for AI-powered recommendations)

## ⚡ Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/AeroAdvice.git
cd AeroAdvice
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Setup

Create a `.env` file in the root directory and add your OpenAI API key:

```env
REACT_APP_OPENAI_API_KEY=your_openai_api_key_here
```

### 4. Start the Development Server

```bash
npm start
```

The application will open in your browser at `http://localhost:3000`.

## 📁 Project Structure

```
AeroAdvice/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── logo.png
├── src/
│   ├── api/
│   │   └── destinationAPI.js     # OpenAI API integration
│   ├── assets/                   # Images and fonts
│   ├── components/
│   │   ├── LocationCard.js       # Location display component
│   │   └── QuestionCard.js       # Preference input component
│   ├── context/
│   │   └── ResultsContext.js     # Global state management
│   ├── main_components/
│   │   ├── App.js               # Main application component
│   │   ├── Layout.js            # Page layout wrapper
│   │   └── NavigationBar.js     # Navigation component
│   ├── Pages/
│   │   ├── HomePage.js          # Landing page
│   │   ├── SearchPage.js        # Preference input page
│   │   ├── ResultsPage.js       # AI recommendations display
│   │   ├── LoginPage.js         # User authentication
│   │   ├── SignUpPage.js        # User registration
│   │   └── FlightsPage.js       # Flight booking integration
│   └── index.js                 # Application entry point
├── package.json
└── README.md
```

## 🔧 Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (irreversible)

## 🎯 How It Works

1. **Set Preferences**: Users input their travel preferences including cuisine, activities, budget, and dates
2. **AI Processing**: The application sends user preferences to OpenAI's GPT-3.5 model
3. **Smart Recommendations**: AI generates personalized destination suggestions with detailed itineraries
4. **Interactive Results**: Users can browse through recommendations with rich descriptions and imagery
5. **Booking Integration**: Seamless transition to flight booking for chosen destinations

## 🔑 API Configuration

### OpenAI Integration

The application uses OpenAI's GPT-3.5 Turbo model for generating travel recommendations. To configure:

1. Sign up for an OpenAI API account
2. Generate an API key from your dashboard
3. Add the key to your environment variables
4. Update the API configuration in `src/api/destinationAPI.js`

```javascript
const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});
```


## 🙏 Acknowledgments

- OpenAI for providing the GPT-3.5 API
- React team for the amazing framework
- Bootstrap for the responsive design components
- All contributors who have helped improve this project

---

[⬆ Back to top](#-aeroadvice---ai-powered-travel-planning-platform)
