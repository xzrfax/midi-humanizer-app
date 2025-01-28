import { makeAutoObservable } from 'mobx';
import humanize from '../logic/Humanizer';

class AppStore {
  constructor() {
    makeAutoObservable(this);

    this.timingPresetChoices = [
      {
        label: 'Tight',
        value: 7,
      },
      {
        label: 'Relaxed',
        value: 15,
      },
      {
        label: 'Sloppy',
        value: 25,
      },
    ];

    this.velocityPresetChoices = [
      {
        label: 'Steady',
        value: 5,
      },
      {
        label: 'Inconsistent',
        value: 10,
      },
      {
        label: 'Chaotic',
        value: 20,
      },
    ];

    this.globalOffsetChoices = [
      {
        label: 'Ahead',
        value: -10,
      },
      {
        label: 'On Beat',
        value: 0,
      },
      {
        label: 'Behind',
        value: 10,
      },
    ];

    this.noteLengthPresetChoices = [
      {
        label: 'Subtle',
        value: 5,
      },
      {
        label: 'Natural',
        value: 10,
      },
      {
        label: 'Loose',
        value: 20,
      },
    ];

    this.timingPreset = 0;
    this.velocityPreset = 0;
    this.globalOffsetPreset = 1;
    this.noteLengthPreset = 0;

    this.timingVariance = this.timingPresetChoices[this.timingPreset].value;
    this.velocityVariance = this.velocityPresetChoices[
      this.velocityPreset
    ].value;
    this.globalOffset = this.globalOffsetChoices[this.globalOffsetPreset].value;
    this.noteLengthVariance = this.noteLengthPresetChoices[this.noteLengthPreset].value;
  }

  loadTimingPreset() {
    this.timingVariance = this.timingPresetChoices[this.timingPreset].value;
  }

  loadVelocityPreset() {
    this.velocityVariance = this.velocityPresetChoices[
      this.velocityPreset
    ].value;
  }

  loadGlobalOffsetPreset() {
    this.globalOffset = this.globalOffsetChoices[this.globalOffsetPreset].value;
  }

  loadNoteLengthPreset() {
    this.noteLengthVariance = this.noteLengthPresetChoices[this.noteLengthPreset].value;
  }

  apply(midi) {
    return humanize(
      midi,
      this.timingVariance,
      this.velocityVariance,
      this.globalOffset,
      this.noteLengthVariance
    );
  }
}

export default AppStore;
