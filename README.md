# ABESS VIP — Firebase App Hosting web console

This repository separates the **web application** from the original **Xray/VLESS VPN engine**.

## Included
- Next.js web console starter designed for Firebase App Hosting.
- Node.js 20+ package configuration.
- No passwords, private keys, VPN UUIDs, or server credentials.

## Architecture boundary
The source archive supplied for the original project contained an Xray Dockerfile, an Xray `config.json`, and a Docker Hub publishing workflow. That is a VPN-engine container, not a web app. This repository provides a separate web-console starter; it does **not** convert Xray into a Firebase App Hosting service.

1. **Web UI:** this Next.js project on Firebase App Hosting.
2. **VPN engine:** keep Xray on a VPS/container host suitable for VPN network requirements.
3. **Optional status API:** expose an authenticated HTTPS API from a suitable backend, only after implementing authentication and authorization.

Never expose private Xray configuration or credentials in `NEXT_PUBLIC_*` variables or client-side code.

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Production build
```bash
npm run build
npm start
```

## Deploy to Firebase App Hosting
1. Push this repository to GitHub.
2. Open https://console.firebase.google.com/ and select/create a Firebase project.
3. App Hosting currently requires the Blaze plan.
4. Open **App Hosting** and create a backend.
5. Connect this GitHub repository and select the deployment branch (usually `main`).
6. Set the app root to `/` and complete setup.
7. Review build logs and wait for rollout to become healthy. Firebase provides an HTTPS subdomain after deployment.

Official guide: https://firebase.google.com/docs/app-hosting

## Environment variables
`.env.example` documents placeholders for a future server-side status integration. No status API is wired up yet. Keep secrets out of the repository and configure them using Firebase/Google Cloud secret management.

## Verification status
This repository is a starter scaffold. It has not yet been deployed to Firebase or build-tested in this session. Run `npm install` and `npm run build` before deployment.
