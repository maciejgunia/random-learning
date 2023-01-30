import './style.css';
import { runScripts } from './scripts';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>read the console</div>
`;

runScripts();
