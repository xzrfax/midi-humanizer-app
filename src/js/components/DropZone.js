import './DropZone.scss';
import { html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { observable, action } from 'mobx';

const dragOver = observable.box(false);
const label = observable.box('Drop MIDI Here');

const setDragOver = action(value => dragOver.set(value));
const setLabel = action(value => label.set(value));

const DropZone = ({ id, onDrop }) =>
  html`
    <div
      class=${classMap({
        dropzone: true,
        'dropzone--dragover': dragOver.get(),
      })}
      id=${ifDefined(id)}
      @dragover=${e => {
        e.preventDefault();
        if (e.dataTransfer.types.indexOf('Files') !== -1) {
          setDragOver(true);
        }
      }}
      @dragleave=${() => setDragOver(false)}
      @drop=${e => {
        e.preventDefault();
        setDragOver(false);
        const file = e.dataTransfer.files[0];
        setLabel(file.name);
        readFile(file, onDrop);
      }}
    >
      ${label.get()}
    </div>
  `;

function readFile(file, onComplete) {
  const fr = new FileReader();
  fr.onload = () => onComplete(fr.result, file.name);
  fr.readAsArrayBuffer(file);
}

export default DropZone;
