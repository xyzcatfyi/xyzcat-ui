import React from 'react';
import { Plus, ArrowRight } from 'lucide-react';
import { useTheme, ToggleDarkLight, ButtonPrimary, ButtonSecondary, ButtonDestructive, LayoutHeaderText, LayoutFooter, NavBar, NavHamburger, SettingsSection, SettingsRow } from 'xyzcat-ui';
import './App.css';

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const [activeTab, setActiveTab] = React.useState('overview');

  return (
    <div className="playground">

      <LayoutHeaderText
        title="xyzcat-ui playground"
        subtitle="component testing area"
        right={<ToggleDarkLight theme={theme} onToggle={toggleTheme} />}
      />

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

        {/* ── ButtonSecondary ── */}
        <section className="playground__section">
          <h2>ButtonSecondary</h2>

          <h3>Sizes</h3>
          <div className="playground__row">
            <ButtonSecondary label="Small" onClick={() => {}} size="sm" />
            <ButtonSecondary label="Medium" onClick={() => {}} size="md" />
            <ButtonSecondary label="Large" onClick={() => {}} size="lg" />
          </div>

          <h3>Shapes</h3>
          <div className="playground__row">
            <ButtonSecondary label="Rounded" onClick={() => {}} shape="rounded" />
            <ButtonSecondary label="Pill" onClick={() => {}} shape="pill" />
          </div>

          <h3>Icons</h3>
          <div className="playground__row">
            <ButtonSecondary label="Icon Left" onClick={() => {}} iconLeft={<Plus />} />
            <ButtonSecondary label="Icon Right" onClick={() => {}} iconRight={<ArrowRight />} />
            <ButtonSecondary label="Both" onClick={() => {}} iconLeft={<Plus />} iconRight={<ArrowRight />} />
          </div>

          <h3>States</h3>
          <div className="playground__row">
            <ButtonSecondary label="Default" onClick={() => {}} />
            <ButtonSecondary label="Disabled" onClick={() => {}} disabled />
            <ButtonSecondary label="Loading" onClick={() => {}} loading />
          </div>
        </section>

        {/* ── ButtonDestructive ── */}
        <section className="playground__section">
          <h2>ButtonDestructive</h2>

          <h3>Sizes</h3>
          <div className="playground__row">
            <ButtonDestructive label="Small" onClick={() => {}} size="sm" />
            <ButtonDestructive label="Medium" onClick={() => {}} size="md" />
            <ButtonDestructive label="Large" onClick={() => {}} size="lg" />
          </div>

          <h3>Shapes</h3>
          <div className="playground__row">
            <ButtonDestructive label="Rounded" onClick={() => {}} shape="rounded" />
            <ButtonDestructive label="Pill" onClick={() => {}} shape="pill" />
          </div>

          <h3>Icons</h3>
          <div className="playground__row">
            <ButtonDestructive label="Icon Left" onClick={() => {}} iconLeft={<Plus />} />
            <ButtonDestructive label="Icon Right" onClick={() => {}} iconRight={<ArrowRight />} />
            <ButtonDestructive label="Both" onClick={() => {}} iconLeft={<Plus />} iconRight={<ArrowRight />} />
          </div>

          <h3>States</h3>
          <div className="playground__row">
            <ButtonDestructive label="Default" onClick={() => {}} />
            <ButtonDestructive label="Disabled" onClick={() => {}} disabled />
            <ButtonDestructive label="Loading" onClick={() => {}} loading />
          </div>
        </section>

        {/* ── LayoutHeaderText ── */}
        <section className="playground__section">
          <h2>LayoutHeaderText</h2>

          <h3>With subtitle + right slot</h3>
          <LayoutHeaderText
            title="App Title"
            subtitle="v1.0.0 · beta"
            right={<ButtonPrimary label="Action" onClick={() => {}} size="sm" />}
            sticky={false}
          />

          <h3>Title only</h3>
          <LayoutHeaderText title="App Title" sticky={false} />

        </section>

        {/* ── NavBar ── */}
        <section className="playground__section">
          <h2>NavBar</h2>

          <h3>Horizontal</h3>
          <NavBar
            orientation="horizontal"
            items={[
              { label: 'Overview', value: 'overview' },
              { label: 'Transactions', value: 'transactions' },
              { label: 'Settings', value: 'settings' },
            ]}
            activeItem={activeTab}
            onItemClick={setActiveTab}
          />

          <h3>Vertical</h3>
          <div style={{ width: '200px' }}>
            <NavBar
              orientation="vertical"
              items={[
                { label: 'Overview', value: 'overview' },
                { label: 'Transactions', value: 'transactions' },
                { label: 'Settings', value: 'settings' },
              ]}
              activeItem={activeTab}
              onItemClick={setActiveTab}
            />
          </div>

        </section>

        {/* ── NavHamburger ── */}
        <section className="playground__section">
          <h2>NavHamburger</h2>

          <h3>Align right</h3>
          <div className="playground__row" style={{ background: '#eee', padding: '1rem' }}>
            <NavHamburger
            align="right"
            items={[
              { label: 'Overview', value: 'overview', onClick: () => {} },
              { label: 'Transactions', value: 'transactions', onClick: () => {} },
              { label: 'Settings', value: 'settings', onClick: () => {} },
            ]}
          />
          </div>

          <h3>Align left (default)</h3>
          <div className="playground__row" style={{ background: '#eee', padding: '1rem' }}>
            <NavHamburger
            align="left"
            items={[
              { label: 'Overview', value: 'overview', onClick: () => {} },
              { label: 'Transactions', value: 'transactions', onClick: () => {} },
              { label: 'Settings', value: 'settings', onClick: () => {} },
            ]}
          />
          </div>

        </section>

        {/* ── SettingsSection + SettingsRow ── */}
        <section className="playground__section">
          <h2>SettingsSection + SettingsRow</h2>

          <SettingsSection title="General">
            <SettingsRow
              label="Appearance"
              description="Switch between dark and light mode"
            >
              <ToggleDarkLight theme={theme} onToggle={toggleTheme} />
            </SettingsRow>
            <SettingsRow
              label="Language"
              description="Currently: English (UK)"
            >
              <span style={{ fontSize: '0.75rem', color: 'var(--tx3)' }}>Coming soon</span>
            </SettingsRow>
            <SettingsRow label="Version">
              <span style={{ fontSize: '0.8125rem', color: 'var(--tx2)' }}>v0.1.0</span>
            </SettingsRow>
          </SettingsSection>

          <SettingsSection title="Data">
            <SettingsRow
              label="Export"
              description="Download your data as JSON, CSV, or PDF"
            >
              <ButtonSecondary label="Export" onClick={() => {}} size="sm" />
            </SettingsRow>
            <SettingsRow
              label="Reset All Data"
              description="Permanently delete everything — cannot be undone"
            >
              <ButtonDestructive label="Reset" onClick={() => {}} size="sm" />
            </SettingsRow>
          </SettingsSection>

        </section>

      </main>

      <LayoutFooter>
        xyzcat-ui playground · not a product 🩷
      </LayoutFooter>
    </div>
  );
}
