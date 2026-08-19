import ServiceDetailLayout from '../../components/ServiceDetailLayout';

const OilGasEnergy = () => (
  <ServiceDetailLayout
    eyebrow="Sector 02"
    title="Oil, Gas &"
    highlight="Energy."
    intro="Engineering for upstream, midstream and downstream assets — plus the renewable infrastructure now integrated alongside them."
    overview={[
      'We engineer structures and systems that operate safely in demanding environments, from offshore platforms and subsea tie-ins to onshore production facilities.',
      'Midstream work covers long-distance pipeline systems, pump and compressor stations, terminals and loading infrastructure, designed to the relevant international codes.',
      'Downstream, we support refinery and petrochemical units with structural, foundation and integrity engineering, including environmental and safety assessment.',
    ]}
    keyServices={[
      'Pipeline design & engineering',
      'Offshore platform structures',
      'Refinery & processing facilities',
      'Storage tank engineering',
      'Renewable energy infrastructure',
      'Environmental & safety assessment',
    ]}
    groups={[
      {
        title: 'Upstream operations',
        items: [
          'Offshore drilling platforms',
          'Onshore production facilities',
          'Wellhead and Christmas tree systems',
          'Subsea infrastructure',
        ],
      },
      {
        title: 'Midstream infrastructure',
        items: [
          'Long-distance pipeline systems',
          'Compressor and pump stations',
          'Terminal and storage facilities',
          'Loading and unloading systems',
        ],
      },
      {
        title: 'Downstream processing',
        items: [
          'Refinery process units',
          'Petrochemical processing plants',
          'Product distribution systems',
          'Environmental control systems',
        ],
      },
    ]}
    stats={[
      { value: '3', label: 'Value-chain stages' },
      { value: 'API', label: 'Code-aligned design' },
      { value: 'HSE', label: 'Led assessment' },
    ]}
    ctaTitle="Power your energy projects"
    ctaText="From concept select to detailed design, we can support your asset with focused engineering input."
  />
);

export default OilGasEnergy;
