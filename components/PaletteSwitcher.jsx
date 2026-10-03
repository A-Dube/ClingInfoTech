import { palettes } from '../lib/content';

export default function PaletteSwitcher({ value, onChange }) {
  const active = palettes.find((p) => p.id === value);
  return (
    <div className="switcher glass2" role="group" aria-label="Colour palette">
      <span className="switcher-label">Theme</span>
      {palettes.map((p) => (
        <button
          key={p.id}
          type="button"
          title={p.name}
          aria-label={`${p.name} palette`}
          aria-pressed={value === p.id}
          className={`swatch ${value === p.id ? 'active' : ''}`}
          style={{ background: p.bg }}
          onClick={() => onChange(p.id)}
        >
          <span style={{ background: p.a }} />
        </button>
      ))}
      {active && <span className="switcher-name">{active.name}</span>}
    </div>
  );
}
