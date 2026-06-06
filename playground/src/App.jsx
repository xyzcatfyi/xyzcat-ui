import React from 'react';
import { Plus, ArrowRight } from 'lucide-react';
import { useTheme, ToggleDarkLight, ButtonPrimary, LayoutHeaderText, LayoutFooter, NavBar } from 'xyzcat-ui';
import './App.css';

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const [activeTab, setActiveTab] = React.useState('overview');

  return (
    <div className="playground" data-theme={theme}>

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

      </main>

      <LayoutFooter>
        xyzcat-ui playground · not a product 🩷
      </LayoutFooter>
    </div>
  );
}
