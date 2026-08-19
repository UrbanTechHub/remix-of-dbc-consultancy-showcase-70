import ServiceDetailLayout from '../../components/ServiceDetailLayout';

const ChemicalsPetrochemicals = () => (
  <ServiceDetailLayout
    eyebrow="Sector 04"
    title="Chemicals &"
    highlight="Petrochemicals."
    intro="Process and plant engineering for chemical, petrochemical and specialty production facilities operating in demanding conditions."
    overview={[
      'We design process plant layouts and the structures that support them, accounting for thermal movement, vibration, containment and access from the outset.',
      'Corrosive and hazardous environments demand specific material and detailing choices — our specifications reflect real operating conditions and maintenance access.',
      'Safety and environmental systems are engineered alongside the process, supported by hazard analysis and risk assessment to the applicable standards.',
    ]}
    keyServices={[
      'Process plant design',
      'Equipment foundation engineering',
      'Structural systems for corrosive environments',
      'Safety & environmental systems',
      'Piping and instrumentation design',
      'Hazard analysis & risk assessment',
    ]}
    groups={[
      {
        title: 'Process facilities',
        items: [
          'Reactor and column support structures',
          'Process unit layouts',
          'Equipment and pump foundations',
          'Pipe racks and utility corridors',
        ],
      },
      {
        title: 'Safety & environmental',
        items: [
          'Bunding and secondary containment',
          'Blast and fire-resistant structures',
          'Emissions and effluent systems',
          'Hazard and risk assessment',
        ],
      },
      {
        title: 'Specialized infrastructure',
        items: [
          'Corrosion-resistant structural systems',
          'Tank farms and storage bunds',
          'Cleanroom and specialty production areas',
          'Loading and transfer facilities',
        ],
      },
    ]}
    stats={[
      { value: 'P&ID', label: 'Coordinated design' },
      { value: 'HAZOP', label: 'Supported reviews' },
      { value: 'ATEX', label: 'Aware detailing' },
    ]}
    ctaTitle="Transform your chemical operations"
    ctaText="Share your process requirements and we will define the plant and structural engineering scope."
  />
);

export default ChemicalsPetrochemicals;
