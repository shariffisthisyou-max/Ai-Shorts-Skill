import fs from 'node:fs';
import path from 'node:path';

const projectDir = process.cwd();
const scriptPath = path.join(projectDir, 'script.json');
const S = JSON.parse(fs.readFileSync(scriptPath, 'utf8'));

const speed = S.speed || 1.0;
const wps = 2.4; // steady, meditative speaking rate
let t = parseFloat(S.lead || 0.4);

const lines = [];
const words = [];

// For the dhikr counter in the middle, we dedicate a peaceful counting span between lines 3 and 4
for (let i = 0; i < S.lines.length; i++) {
  const ln = S.lines[i];
  const toks = ln.text.split(/\s+/).filter(Boolean);
  const letters = toks.map(w => (w.replace(/[^A-Za-z0-9]/g, '').length || 1));
  const base = toks.length / (wps * speed);
  const sumWeights = letters.reduce((a, b) => a + (b + 2.5), 0);
  const unit = base / sumWeights;
  
  const start = t;
  for (let j = 0; j < toks.length; j++) {
    const w = toks[j];
    const l = letters[j];
    const d = (l + 2.5) * unit;
    words.push({
      w,
      line: i,
      s: +t.toFixed(3),
      e: +(t + d * 0.92).toFixed(3)
    });
    t += d;
    if (w.endsWith(',')) t += 0.2;
    else if (/[.?!:]$/.test(w) && j !== toks.length - 1) t += 0.35;
  }
  
  lines.push({
    i,
    text: ln.text,
    start: +start.toFixed(3),
    end: +t.toFixed(3)
  });
  
  // If line 3 (the dhikr intro), add 28 seconds for the 0->100 count visualization!
  if (i === 3) {
    t += 28.0; 
  } else {
    t += parseFloat(ln.gap || S.gap || 0.3);
  }
}

const dur = +(lines[lines.length - 1].end + parseFloat(S.outro || 1.0)).toFixed(3);
const dataDir = path.join(projectDir, 'data');
if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });

fs.writeFileSync(path.join(dataDir, 'lines.json'), JSON.stringify({ duration: dur, lines }, null, 2));
fs.writeFileSync(path.join(dataDir, 'words.json'), JSON.stringify(words, null, 2));

console.log(`Generated timing: ${lines.length} lines, ${words.length} words, total ${dur}s`);
