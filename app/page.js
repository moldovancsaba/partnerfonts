'use client';

import { useState } from 'react';

const fonts = [
  {
    name: 'AS Roma',
    family: 'AS Roma',
    file: 'ASRoma-Regular.woff',
    weight: 400,
    description: 'Classic Roman-inspired typeface'
  },
  {
    name: 'Aquatics',
    family: 'Aquatics',
    file: 'Aquatics-Medium.woff',
    weight: 500,
    description: 'Modern medium weight font'
  }
];

export default function Home() {
  const [selectedFont, setSelectedFont] = useState(fonts[0]);

  return (
    <main className="page">
      <h1>Font Preview & Download</h1>
      <p>
        Select a font from the dropdown below to preview how it looks.
      </p>

      <section className="block">
        <h2>Select Font</h2>
        <div className="font-selector">
          <select 
            value={selectedFont.name} 
            onChange={(e) => {
              const font = fonts.find(f => f.name === e.target.value);
              if (font) setSelectedFont(font);
            }}
            className="font-select"
          >
            {fonts.map((font) => (
              <option key={font.name} value={font.name}>
                {font.name} - {font.description}
              </option>
            ))}
          </select>
        </div>
      </section>

      <section className="block">
        <h2>Preview</h2>
        <p className="font-info">
          Currently viewing: <strong>{selectedFont.name}</strong>
        </p>
        <div className="sample" style={{ fontFamily: `"${selectedFont.family}", system-ui, sans-serif` }}>
          The quick brown fox jumps over the lazy dog.
        </div>
        <div className="sample" style={{ fontFamily: `"${selectedFont.family}", system-ui, sans-serif` }}>
          Roma, non <strong>pro patria</strong> sed pro <em>style</em>.
        </div>
        <div className="sample" style={{ fontFamily: `"${selectedFont.family}", system-ui, sans-serif` }}>
          ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
          abcdefghijklmnopqrstuvwxyz<br />
          0123456789 !@#$%^&*()
        </div>
      </section>

      <section className="block">
        <h2>Download Fonts</h2>
        <div className="downloads">
          {fonts.map((font) => (
            <a
              key={font.name}
              href={`/fonts/${font.file}`}
              download
              className={`download-link ${selectedFont.name === font.name ? 'active' : ''}`}
            >
              {font.file}
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
