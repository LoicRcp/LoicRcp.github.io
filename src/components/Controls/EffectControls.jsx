import React from 'react';
import { DEFAULT_EFFECTS_CONFIG as defaultConfig } from '../../config/effects';

const ControlSlider = ({ label, value, onChange, min, max, step = 0.01 }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <label className="text-sm text-white">{label}</label>
      <span className="text-sm text-gray-300">{value.toFixed(2)}</span>
    </div>
    <input
      type="range"
      value={value}
      onChange={(e) => onChange(parseFloat(e.target.value))}
      min={min}
      max={max}
      step={step}
      className="w-full"
    />
  </div>
);

const EffectGroup = ({ title, children }) => (
  <div className="mb-6">
    <h3 className="text-lg font-semibold mb-3 text-white">{title}</h3>
    {children}
  </div>
);

const EffectControls = ({ renderer, enabledPasses, onTogglePass }) => {
  const [activeTab, setActiveTab] = React.useState('base');

  const handleLuminanceChange = (value) => {
    renderer.setLuminance(value);
  };

  const handleDistortionChange = (value) => {
    renderer.setDistortion(value);
  };

  const handleAberrationChange = (value) => {
    renderer.setAberration(value);
  };

  const handleScanlinesChange = (type, value) => {
    const current = {
      intensity: renderer.scanlinesPass?.uniforms.scanlineIntensity.value ?? defaultConfig.scanlines.intensity,
      count: renderer.scanlinesPass?.uniforms.scanlineCount.value ?? defaultConfig.scanlines.count,
      speed: renderer.scanlinesPass?.uniforms.scanlineSpeed.value ?? defaultConfig.scanlines.speed
    };

    renderer.setScanlines(
      type === 'intensity' ? value : current.intensity,
      type === 'count' ? value : current.count,
      type === 'speed' ? value : current.speed
    );
  };

  const handleGlowChange = (type, value) => {
    const current = {
      radius: renderer.glowHorizontalPass?.uniforms.glowRadius.value ?? defaultConfig.glow.radius,
      intensity: renderer.glowHorizontalPass?.uniforms.glowIntensity.value ?? defaultConfig.glow.intensity,
      persistence: renderer.glowVerticalPass?.uniforms.persistence.value ?? defaultConfig.glow.persistence
    };

    renderer.setGlow(
      type === 'radius' ? value : current.radius,
      type === 'intensity' ? value : current.intensity,
      type === 'persistence' ? value : current.persistence
    );
  };

  return (
    <div className="fixed right-4 top-4 w-80 bg-black/80 backdrop-blur-sm rounded-lg p-4 shadow-lg z-50 overflow-auto max-h-[calc(100vh-2rem)]">
      <h2 className="text-xl font-bold mb-4 text-white">Effect Controls</h2>
      
      <div className="flex mb-4 bg-gray-900 rounded overflow-hidden">
        <button
          className={`flex-1 py-2 ${activeTab === 'base' ? 'bg-blue-600 text-white' : 'text-gray-300'}`}
          onClick={() => setActiveTab('base')}
        >
          Base
        </button>
        <button
          className={`flex-1 py-2 ${activeTab === 'scanlines' ? 'bg-blue-600 text-white' : 'text-gray-300'}`}
          onClick={() => setActiveTab('scanlines')}
        >
          Scanlines
        </button>
        <button
          className={`flex-1 py-2 ${activeTab === 'glow' ? 'bg-blue-600 text-white' : 'text-gray-300'}`}
          onClick={() => setActiveTab('glow')}
        >
          Glow
        </button>
      </div>

      {activeTab === 'base' && (
        <>
          <EffectGroup title="Luminance">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-white">Enabled</span>
              <input
                type="checkbox"
                checked={enabledPasses.luminance}
                onChange={(e) => onTogglePass('luminance', e.target.checked)}
                className="w-4 h-4"
              />
            </div>
            <ControlSlider
              label="Base"
              value={renderer.luminancePass?.uniforms.luminanceBase.value ?? defaultConfig.luminance.base}
              onChange={handleLuminanceChange}
              min={defaultConfig.luminance.min}
              max={defaultConfig.luminance.max}
            />
          </EffectGroup>

          <EffectGroup title="Distortion">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-white">Enabled</span>
              <input
                type="checkbox"
                checked={enabledPasses.distortion}
                onChange={(e) => onTogglePass('distortion', e.target.checked)}
                className="w-4 h-4"
              />
            </div>
            <ControlSlider
              label="Intensity"
              value={renderer.distortionPass?.uniforms.distortionIntensity.value ?? defaultConfig.distortion.intensity}
              onChange={handleDistortionChange}
              min={defaultConfig.distortion.min}
              max={defaultConfig.distortion.max}
            />
          </EffectGroup>

          <EffectGroup title="Chromatic Aberration">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-white">Enabled</span>
              <input
                type="checkbox"
                checked={enabledPasses.aberration}
                onChange={(e) => onTogglePass('aberration', e.target.checked)}
                className="w-4 h-4"
              />
            </div>
            <ControlSlider
              label="Intensity"
              value={renderer.chromaticAberrationPass?.uniforms.aberrationIntensity.value ?? defaultConfig.aberration.intensity}
              onChange={handleAberrationChange}
              min={defaultConfig.aberration.min}
              max={defaultConfig.aberration.max}
            />
          </EffectGroup>
        </>
      )}

      {activeTab === 'scanlines' && (
        <EffectGroup title="Scanlines">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-white">Enabled</span>
            <input
              type="checkbox"
              checked={enabledPasses.scanlines}
              onChange={(e) => onTogglePass('scanlines', e.target.checked)}
              className="w-4 h-4"
            />
          </div>
          <div className="space-y-4">
            <ControlSlider
              label="Intensity"
              value={renderer.scanlinesPass?.uniforms.scanlineIntensity.value ?? defaultConfig.scanlines.intensity}
              onChange={(v) => handleScanlinesChange('intensity', v)}
              min={defaultConfig.scanlines.intensityLimits.min}
              max={defaultConfig.scanlines.intensityLimits.max}
            />
            <ControlSlider
              label="Count"
              value={renderer.scanlinesPass?.uniforms.scanlineCount.value ?? defaultConfig.scanlines.count}
              onChange={(v) => handleScanlinesChange('count', v)}
              min={defaultConfig.scanlines.countLimits.min}
              max={defaultConfig.scanlines.countLimits.max}
              step={1}
            />
            <ControlSlider
              label="Speed"
              value={renderer.scanlinesPass?.uniforms.scanlineSpeed.value ?? defaultConfig.scanlines.speed}
              onChange={(v) => handleScanlinesChange('speed', v)}
              min={defaultConfig.scanlines.speedLimits.min}
              max={defaultConfig.scanlines.speedLimits.max}
            />
          </div>
        </EffectGroup>
      )}

      {activeTab === 'glow' && (
        <EffectGroup title="Glow">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-white">Enabled</span>
            <input
              type="checkbox"
              checked={enabledPasses.glow}
              onChange={(e) => onTogglePass('glow', e.target.checked)}
              className="w-4 h-4"
            />
          </div>
          <div className="space-y-4">
            <ControlSlider
              label="Radius"
              value={renderer.glowHorizontalPass?.uniforms.glowRadius.value ?? defaultConfig.glow.radius}
              onChange={(v) => handleGlowChange('radius', v)}
              min={defaultConfig.glow.radiusLimits.min}
              max={defaultConfig.glow.radiusLimits.max}
            />
            <ControlSlider
              label="Intensity"
              value={renderer.glowHorizontalPass?.uniforms.glowIntensity.value ?? defaultConfig.glow.intensity}
              onChange={(v) => handleGlowChange('intensity', v)}
              min={defaultConfig.glow.intensityLimits.min}
              max={defaultConfig.glow.intensityLimits.max}
            />
            <ControlSlider
              label="Persistence"
              value={renderer.glowVerticalPass?.uniforms.persistence.value ?? defaultConfig.glow.persistence}
              onChange={(v) => handleGlowChange('persistence', v)}
              min={defaultConfig.glow.persistenceLimits.min}
              max={defaultConfig.glow.persistenceLimits.max}
            />
          </div>
        </EffectGroup>
      )}
    </div>
  );
};

export default EffectControls;