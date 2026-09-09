# ============================================================
# DEPENDENCIES
# ============================================================

FROM node:22-alpine AS deps

WORKDIR /app

# A build context a repository gyökere,
# ezért a hejotrade mappából másolunk
COPY hejotrade/package.json hejotrade/package-lock.json ./

RUN npm ci


# ============================================================
# BUILD
# ============================================================

FROM node:22-alpine AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules

# Csak a Next.js projektet másoljuk be
COPY hejotrade/ .

ENV NEXT_TELEMETRY_DISABLED=1

RUN npm run build


# ============================================================
# PRODUCTION
# ============================================================

FROM node:22-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV HOSTNAME=0.0.0.0
ENV PORT=3000

RUN addgroup --system --gid 1001 nodejs \
    && adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

RUN mkdir .next \
    && chown nextjs:nodejs .next

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]
