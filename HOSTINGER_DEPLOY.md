# HEJŐTRADE – Hostinger VPS Docker deploy

## Git repository

```text
https://github.com/Mogyi6/HEJOTRADE.git
```

Branch:

```text
main
```

## Repository struktúra

```text
HEJOTRADE/                 <- Git repository gyökere
├── docker-compose.yml     <- Hostinger / Docker Compose
├── HOSTINGER_DEPLOY.md
└── hejotrade/             <- Next.js alkalmazás
    ├── Dockerfile
    ├── .dockerignore
    ├── next.config.ts
    ├── package.json
    ├── package-lock.json
    ├── app/
    ├── components/
    └── public/
```

A `next.config.ts` `output: "standalone"` beállítást használ, ezért a production Docker image csak a futtatáshoz szükséges Next.js fájlokat tartalmazza.

## Helyi ellenőrzés Dockerrel

A repository gyökeréből:

```bash
docker compose build
docker compose up -d
```

Ezután:

```text
http://localhost:3000
```

Leállítás:

```bash
docker compose down
```

Logok:

```bash
docker compose logs -f hejotrade
```

## Hostinger Docker Manager

1. Pushold a módosításokat a `main` branch-re.
2. Hostinger hPanel -> VPS -> Docker Manager -> Compose.
3. A Git repository URL-t add meg:

```text
https://github.com/Mogyi6/HEJOTRADE.git
```

4. A repository gyökerében található `docker-compose.yml` fogja felépíteni a `hejotrade/Dockerfile` image-et.
5. A konténer a VPS 3000-es portjára van kivezetve.
6. Első ellenőrzés:

```text
http://VPS_IP:3000
```

## Domain

A projekt metadata alapján a production domain:

```text
hejotrade.hu
www.hejotrade.hu
```

A domain DNS `A` rekordját a VPS publikus IP-címére kell irányítani. Ezután Hostinger reverse proxy / Traefik segítségével a Docker alkalmazás 3000-es portjára kell továbbítani a forgalmat, és HTTPS/Let's Encrypt SSL-t kell engedélyezni.

## Frissítés

Új verzió esetén:

```bash
git add .
git commit -m "Deploy update"
git push origin main
```

Ezután Hostinger Docker Managerben indítsd el a projekt új build/update műveletét. Automatikus redeploy később GitHub Actions-szel is beállítható.
