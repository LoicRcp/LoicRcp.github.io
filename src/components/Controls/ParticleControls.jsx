import React from 'react';
import { ControlSlider } from './EffectControls';

const ParticleGroup = ({ title, children }) => (
  <div className="mb-6">
    <h3 className="text-lg font-semibold mb-3 text-white">{title}</h3>
    {children}
  </div>
);

const ParticleControls = ({ particles }) => {
  const [activeTab, setActiveTab] = React.useState('main');
  const [values, setValues] = React.useState({
    amplitude: 1,
    frequency: 2,
    bassPower: 2,
    midPower: 1.5,
    curlIntensity: 1,
    size: 1.1,
    maxDistance: 1.8,
    startColor: '#ff00ff',
    endColor: '#00ffff',
    autoMix: true,
    autoRotate: true
  });

  // Mise à jour continue des valeurs
  React.useEffect(() => {
    if (!particles?.material?.uniforms) return;

    const updateValues = () => {
      const uniforms = particles.material.uniforms;
      setValues(prev => ({
        ...prev,
        amplitude: uniforms.amplitude.value,
        frequency: uniforms.frequency.value,
        bassPower: uniforms.bassPower.value,
        midPower: uniforms.midPower.value,
        curlIntensity: uniforms.curlIntensity.value,
        size: uniforms.size.value,
        maxDistance: uniforms.maxDistance.value,
        autoMix: particles.properties.autoMix,
        autoRotate: particles.properties.autoRotate
      }));
    };

    const frameId = requestAnimationFrame(function update() {
      updateValues();
      requestAnimationFrame(update);
    });

    return () => cancelAnimationFrame(frameId);
  }, [particles]);

  const handleColorChange = (type, color) => {
    particles.material.uniforms[`${type}Color`].value.set(color);
    particles.properties[`${type}Color`] = color;
  };

  return (
    <div className="fixed left-4 top-4 w-80 bg-black/80 backdrop-blur-sm rounded-lg p-4 shadow-lg z-50 overflow-auto max-h-[calc(100vh-2rem)]">
      <h2 className="text-xl font-bold mb-4 text-white">Particle Controls</h2>

      <div className="flex mb-4 bg-gray-900 rounded overflow-hidden">
        {['main', 'colors', 'behavior'].map((tab) => (
          <button
            key={tab}
            className={`flex-1 py-2 ${activeTab === tab ? 'bg-purple-600 text-white' : 'text-gray-300'}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {activeTab === 'main' && (
        <>
          <ParticleGroup title="Dynamics">
            <ControlSlider
              label="Amplitude"
              value={values.amplitude}
              onChange={(v) => particles.material.uniforms.amplitude.value = v}
              min={0.1}
              max={3}
              step={0.1}
            />
            <ControlSlider
              label="Frequency"
              value={values.frequency}
              onChange={(v) => particles.material.uniforms.frequency.value = v}
              min={0.1}
              max={5}
              step={0.1}
            />
            <ControlSlider
              label="Curl Intensity"
              value={values.curlIntensity}
              onChange={(v) => particles.material.uniforms.curlIntensity.value = v}
              min={0.1}
              max={2}
              step={0.1}
            />
          </ParticleGroup>

          <ParticleGroup title="Audio Response">
            <ControlSlider
              label="Bass Power"
              value={values.bassPower}
              onChange={(v) => particles.material.uniforms.bassPower.value = v}
              min={0.5}
              max={4}
              step={0.1}
            />
            <ControlSlider
              label="Mid Power"
              value={values.midPower}
              onChange={(v) => particles.material.uniforms.midPower.value = v}
              min={0.5}
              max={3}
              step={0.1}
            />
          </ParticleGroup>
        </>
      )}

      {activeTab === 'colors' && (
        <ParticleGroup title="Color Settings">
          <div className="mb-4">
            <label className="text-sm text-white block mb-2">Start Color</label>
            <input
              type="color"
              value={values.startColor}
              onChange={(e) => handleColorChange('start', e.target.value)}
              className="w-full"
            />
          </div>
          <div className="mb-4">
            <label className="text-sm text-white block mb-2">End Color</label>
            <input
              type="color"
              value={values.endColor}
              onChange={(e) => handleColorChange('end', e.target.value)}
              className="w-full"
            />
          </div>
        </ParticleGroup>
      )}

      {activeTab === 'behavior' && (
        <ParticleGroup title="Particle Behavior">
          <ControlSlider
            label="Size"
            value={values.size}
            onChange={(v) => particles.material.uniforms.size.value = v}
            min={0.5}
            max={5}
            step={0.1}
          />
          <ControlSlider
            label="Max Distance"
            value={values.maxDistance}
            onChange={(v) => particles.material.uniforms.maxDistance.value = v}
            min={0.5}
            max={3}
            step={0.1}
          />
          <div className="flex items-center justify-between mt-4">
            <span className="text-sm text-white">Auto Mix Shapes</span>
            <input
              type="checkbox"
              checked={values.autoMix}
              onChange={(e) => particles.properties.autoMix = e.target.checked}
              className="w-4 h-4"
            />
          </div>
          <div className="flex items-center justify-between mt-2">
            <span className="text-sm text-white">Auto Rotate</span>
            <input
              type="checkbox"
              checked={values.autoRotate}
              onChange={(e) => particles.properties.autoRotate = e.target.checked}
              className="w-4 h-4"
            />
          </div>
        </ParticleGroup>
      )}
    </div>
  );
};

export default ParticleControls;