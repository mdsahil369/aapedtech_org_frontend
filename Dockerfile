# Multi-stage Dockerfile for a Next.js application (production-ready)
# Place this file at the project root next to package.json

FROM node:20-alpine AS deps
WORKDIR /app
# copy package manifests first to leverage docker layer cache
COPY package*.json ./
# install all dependencies needed for build
RUN npm ci

FROM node:20-alpine AS builder
WORKDIR /app
# reuse installed node_modules from deps stage
COPY --from=deps /app/node_modules ./node_modules
# copy the rest of the app source
COPY . .
# build the Next.js application
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
# copy only production deps (fresh install to avoid bundling dev deps)
COPY package*.json ./
RUN npm ci --omit=dev

# copy built output and static assets
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.ts ./next.config.ts

# expose default Next.js port
EXPOSE 3000

# ensure the start script in package.json runs: "next start -p 3000"
CMD ["npm", "start"]
