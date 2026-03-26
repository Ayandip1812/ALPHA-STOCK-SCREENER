import React, { useState } from 'react';
import './App.css';

// Seed stocks data
const seedStocks = [
    { ticker: 'AAPL', name: 'Apple Inc.' },
    { ticker: 'GOOGL', name: 'Alphabet Inc.' },
    { ticker: 'AMZN', name: 'Amazon.com Inc.' },
    { ticker: 'MSFT', name: 'Microsoft Corp.' },
    { ticker: 'TSLA', name: 'Tesla Inc.' },
    { ticker: 'FB', name: 'Meta Platforms Inc.' },
    { ticker: 'NFLX', name: 'Netflix Inc.' },
    { ticker: 'NVDA', name: 'NVIDIA Corp.' },
];

const App = () => {
    const [watchlist, setWatchlist] = useState([]);
    const [portfolio, setPortfolio] = useState([]);
    const [aiUpdates, setAIUpdates] = useState([]);

    const addToWatchlist = (stock) => {
        setWatchlist([...watchlist, stock]);
    };

    const addToPortfolio = (stock) => {
        setPortfolio([...portfolio, stock]);
    };

    return (
        <div className="app">
            <header className="header">
                <h1>Alpha Screener Pro</h1>
            </header>
            <nav className="tabs">
                <button>Dashboard</button>
                <button>Watchlist</button>
                <button>Portfolio</button>
                <button>AI Updates</button>
            </nav>
            <main>
                <section className="seed-stocks">
                    <h2>Seed Stocks</h2>
                    <ul>
                        {seedStocks.map(stock => (
                            <li key={stock.ticker}>
                                {stock.name} ({stock.ticker})
                                <button onClick={() => addToWatchlist(stock)}>Add to Watchlist</button>
                                <button onClick={() => addToPortfolio(stock)}>Add to Portfolio</button>
                            </li>
                        ))}
                    </ul>
                </section>
            </main>
            <footer className="footer">
                <p>&copy; 2026 Alpha Screener Pro</p>
            </footer>
        </div>
    );
};

export default App;