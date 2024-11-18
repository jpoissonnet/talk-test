# Contributing

## Dependencies

- Make sure to have Node installed > 20
- Use PNPM for installation of your dependencies

Fetch repository and run `pnpm install` to install all dependencies.

## Commands

### Development

```bash
pnpm start:watch
```

Open this link in your browser: http://localhost:8080/
This page will refresh automatically if you change any file.

### Production (without presenter mode)

```bash
pnpm start
```

Open this link in your browser: http://localhost:8080/
This will be the navigation tab you will show to your audience.

### Presenter mode

Run production mode like above, then run:

```bash
pnpm presenter 
```

Then open http://localhost:4320/pages/console/?slide-deck-url=http://0.0.0.0:8080/
This will be the navigation tab you hide or open on a dedicate device (with same wifi, correct IP and firewall rules configured)

Then open http://localhost:4320/pages/viewer/ in a dedicated tab, this will be the tab syncronized with the presenter mode that you will share to the audience.