
FROM node:22-alpine

  WORKDIR /app

  # Copier les fichiers de dépendances
  COPY package*.json ./

  # Installer les dépendances
  RUN npm install --production

  # Copier le code de l'API
  COPY api/ ./api/

  # Exposer le port (Fastify écoute par défaut sur 3000)
  EXPOSE 3000

  # Lancer l'application
  CMD ["node", "api/index.mjs"]