# Vinix Strapi CMS

Content Management System voor de Vinix Marketing website.

## Setup

### Development

1. Clone de repository:
```bash
git clone https://github.com/Vinix24/vinix-strapi-cms.git
cd vinix-strapi-cms
```

2. Installeer dependencies:
```bash
npm install
```

3. Maak een `.env` bestand aan gebaseerd op `.env.example`:
```bash
cp .env.example .env
```

4. Start de development server:
```bash
npm run develop
```

De admin interface is beschikbaar op: http://localhost:1337/admin

### Configuratie

#### Database
- Development: SQLite (`.tmp/data.db`)
- Production: PostgreSQL op Railway

#### Content Types
- Blog Posts
- Authors
- Categories
- Comments
- Case Studies

#### Scripts
- `setup-permissions.js`: Configureert de juiste permissies voor public en authenticated roles
- `npm run develop`: Start development server
- `npm run build`: Bouwt de productie versie
- `npm run start`: Start de productie server

### Railway Deployment

1. Zorg dat alle environment variables zijn geconfigureerd in Railway:
   - Database configuratie
   - Admin gegevens
   - JWT secrets

2. De deployment gebeurt automatisch bij push naar de main branch

## Development Guidelines

1. Maak gebruik van TypeScript voor alle nieuwe code
2. Volg de Strapi best practices voor content type definities
3. Test nieuwe features lokaal voordat je ze naar production pushed
4. Houd de documentatie up-to-date

## Contact

Voor vragen over deze setup, neem contact op met Vincent van Deth.
