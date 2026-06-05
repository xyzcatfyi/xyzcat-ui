import React from 'react';
import { Plus, ArrowRight } from 'lucide-react';
import { useTheme, ToggleDarkLight, ButtonPrimary } from 'xyzcat-ui';
import './App.css';

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="playground" data-theme={theme}>
      <header className="playground__header">
        <h1>xyzcat-ui playground</h1>
        <ToggleDarkLight theme={theme} onToggle={toggleTheme} />
      </header>

      <main className="playground__main">

        {/* ── Buttons ── */}
        <section className="playground__section">
          <h2>ButtonPrimary</h2>

          <h3>Sizes</h3>
          <div className="playground__row">
            <ButtonPrimary label="Small" onClick={() => {}} size="sm" />
            <ButtonPrimary label="Medium" onClick={() => {}} size="md" />
            <ButtonPrimary label="Large" onClick={() => {}} size="lg" />
          </div>

          <h3>Shapes</h3>
          <div className="playground__row">
            <ButtonPrimary label="Rounded" onClick={() => {}} shape="rounded" />
            <ButtonPrimary label="Pill" onClick={() => {}} shape="pill" />
          </div>

          <h3>Icons</h3>
          <div className="playground__row">
            <ButtonPrimary label="Icon Left" onClick={() => {}} iconLeft={<Plus />} />
            <ButtonPrimary label="Icon Right" onClick={() => {}} iconRight={<ArrowRight />} />
            <ButtonPrimary label="Both" onClick={() => {}} iconLeft={<Plus />} iconRight={<ArrowRight />} />
          </div>

          <h3>States</h3>
          <div className="playground__row">
            <ButtonPrimary label="Default" onClick={() => {}} />
            <ButtonPrimary label="Disabled" onClick={() => {}} disabled />
            <ButtonPrimary label="Loading" onClick={() => {}} loading />
          </div>
        </section>

      </main>
    </div>
  );
}
