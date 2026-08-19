import ServiceDetailLayout from '../../components/ServiceDetailLayout';

const PowerUtilities = () => (
  <ServiceDetailLayout
    eyebrow="Sector 03"
    title="Power &"
    highlight="Utilities."
    intro="Generation, transmission, distribution and smart-grid infrastructure engineered to grid-code and utility standards."
    overview={[
      'We support generation assets from thermal and hydro through to solar and wind, engineering the civil and structural works that carry the plant.',
      'Transmission and substation projects cover tower and gantry design, foundations, cable routes and interconnection works, coordinated with electrical designers.',
      'On the distribution side we work on network reinforcement, automation, smart metering rollouts and microgrid integration for local generation.',
    ]}
    keyServices={[
      'Power plant design & engineering',
      'Transmission line infrastructure',
      'Substation design & construction',
      'Distribution network engineering',
      'Smart grid implementation',
      'Renewable energy integration',
    ]}
    groups={[
      {
        title: 'Power generation',
        items: [
          'Thermal power plants',
          'Nuclear power facilities',
          'Solar and wind farms',
          'Hydroelectric installations',
        ],
      },
      {
        title: 'Transmission systems',
        items: [
          'High-voltage transmission lines',
          'Underground cable systems',
          'Transmission towers and structures',
          'Grid interconnection facilities',
        ],
      },
      {
        title: 'Distribution networks',
        items: [
          'Medium and low-voltage networks',
          'Smart metering systems',
          'Distribution automation',
          'Microgrids and local generation',
        ],
      },
    ]}
    stats={[
      { value: 'HV', label: 'To LV networks' },
      { value: 'Grid', label: 'Code compliant' },
      { value: '24/7', label: 'Resilience focus' },
    ]}
    ctaTitle="Energize your infrastructure"
    ctaText="Tell us about your generation or network programme and we will scope the engineering required."
  />
);

export default PowerUtilities;
