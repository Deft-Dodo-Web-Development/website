FROM --platform=linux/amd64 node:18-alpine AS base
RUN apk add --no-cache libc6-compat && \
  npm install -g pnpm@8.9.0 && \
  mkdir -p /usr/local/share/pnpm && \
  echo 'export PNPM_HOME=/usr/local/share/pnpm' >> /etc/profile.d/pnpm.sh && \
  echo 'export PATH="$PNPM_HOME:$PATH"' >> /etc/profile.d/pnpm.sh

#########################
#### BUILDER STAGE #####
#########################

FROM base AS builder
WORKDIR /app
ENV PNPM_HOME=/usr/local/share/pnpm
ENV PATH="$PNPM_HOME:$PATH"
RUN pnpm add -g turbo

COPY . .
RUN turbo prune @deft-dodo/www --docker

#########################
#### INSTALLER STAGE ####
#########################

FROM base AS installer
WORKDIR /app
ENV PNPM_HOME=/usr/local/share/pnpm
ENV PATH="$PNPM_HOME:$PATH"

COPY .gitignore .gitignore
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/pnpm-lock.yaml ./pnpm-lock.yaml

RUN pnpm install
RUN pnpm i sharp --filter www

COPY --from=builder /app/out/full/ .
COPY turbo.json turbo.json

RUN pnpm turbo build --filter=www...

#######################
#### RUNNER STAGE ####
#######################

FROM base AS runner
WORKDIR /app

RUN addgroup --system --gid 1001 web && \
  adduser --system --uid 1001 web

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

COPY --from=installer /app .
RUN chown -R web:web /app

USER web

ENV HOST=0.0.0.0
ENV PORT=3000
ENV NODE_ENV=production

EXPOSE 3000

ENTRYPOINT ["/entrypoint.sh"]
CMD ["pnpm", "start", "--scope", "www"]
