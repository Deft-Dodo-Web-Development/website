FROM --platform=linux/amd64 node:18-alpine AS base
RUN apk add --no-cache libc6-compat && \
  npm install -g pnpm && \
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
RUN turbo prune @deft-dodo/api --docker

#########################
#### INSTALLER STAGE ####
#########################

FROM base AS installer
WORKDIR /app
ENV PNPM_HOME=/usr/local/share/pnpm
ENV PATH="$PNPM_HOME:$PATH"

COPY .gitignore .gitignore
COPY --from=builder /app/out/json/ .
# Assuming yarn.lock is replaced with pnpm-lock.yaml or appropriately generated
COPY --from=builder /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
RUN pnpm install

COPY --from=builder /app/out/full/ .
COPY turbo.json turbo.json

RUN pnpm turbo build --filter=api...

#######################
#### RUNNER STAGE ####
#######################

FROM base AS runner
WORKDIR /app

RUN addgroup --system --gid 1001 strapi && \
  adduser --system --uid 1001 strapi

COPY --from=installer /app .
RUN chown -R strapi:strapi /app

USER strapi

ENV HOST=0.0.0.0
ENV PORT=1337
ENV BROWSER=false
ENV NODE_ENV=production

EXPOSE 1337

CMD ["pnpm", "start", "--scope", "api"]
