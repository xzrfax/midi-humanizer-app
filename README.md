# MIDI Humanizer App

[![Netlify Status](https://api.netlify.com/api/v1/badges/1b3c7ef0-ce78-4e67-9562-e5ca11bdc3d8/deploy-status)](https://app.netlify.com/sites/humanizer/deploys)

A hastily written app that adds randomness to MIDI note timings, velocities and note lengths (AKA "humanizing"). Since I could not find one, I built one. 😊

Features:
- Randomize note timing (0-200ms variation)
- Randomize note velocity (0-127 variation)
- Adjust global timing offset (-200ms to +200ms)
- Randomize note lengths (0-100ms variation)
- Preset configurations for each parameter (Tight/Relaxed/Sloppy, etc.)

> Written using [lit](https://lit.dev/) for rendering, [mobx](https://github.com/mobxjs/mobx) for state management and [@tonejs/midi](https://github.com/Tonejs/Midi) for reading/writing MIDI.

## Build & Launch

```bash
yarn install
yarn start
```

## Recent Updates
- Added note length humanization
- Updated dependencies to latest versions
- Improved browser compatibility
