const express = require('express');
const path = require('path');
const helmet = require('helmet');
const compression = require('compression');

const app = express();
const PORT = process.env.PORT || 3000;

// Security middleware
app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
            fontSrc: ["'self'", "https://fonts.gstatic.com"],
            imgSrc: ["'self'", "data:", "https:"],
            scriptSrc: ["'self'", "'unsafe-inline'"],
            connectSrc: ["'self'"]
        }
    }
}));

// Compression middleware
app.use(compression());

// Serve static files
app.use(express.static(path.join(__dirname), {
    maxAge: '1d',
    etag: true
}));

// Cache control for static assets
app.use('/style.css', (req, res, next) => {
    res.setHeader('Cache-Control', 'public, max-age=86400'); // 1 day
    next();
});

app.use('/script.js', (req, res, next) => {
    res.setHeader('Cache-Control', 'public, max-age=86400'); // 1 day
    next();
});

// Root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle SPA routing (if needed for future expansion)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Error:', err.stack);
    res.status(500).send('Something went wrong!');
});

// 404 handler
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`L&T Abruzzi Wine website running on port ${PORT}`);
    console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});