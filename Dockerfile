ARG NODE_VERSION=26

FROM node:${NODE_VERSION}-slim AS dependencies
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --omit=dev

FROM gcr.io/distroless/nodejs${NODE_VERSION}-debian13:nonroot
WORKDIR /app
ENV NODE_ENV=production
COPY --from=dependencies /app/node_modules ./node_modules
COPY package.json ./
COPY src ./src
EXPOSE 8080
CMD ["src/index.ts"]
