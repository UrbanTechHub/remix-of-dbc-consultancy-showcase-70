import ServiceDetailLayout from '../../components/ServiceDetailLayout';

const BuildingConstruction = () => (
  <ServiceDetailLayout
    eyebrow="Sector 01"
    title="Building &"
    highlight="Construction."
    intro="Structural and civil engineering for residential, commercial and industrial developments — from feasibility to construction close-out."
    overview={[
      'We provide comprehensive structural engineering for buildings of every scale, combining efficient structural forms with documentation contractors can build from without ambiguity.',
      'Our teams work across concrete, steel, timber and composite structures, with foundation solutions engineered to the actual ground conditions rather than conservative assumptions.',
      'Design coordination, BIM delivery and construction-stage support are handled by the same engineers who authored the design, so nothing is lost in handover.',
    ]}
    keyServices={[
      'Structural design & analysis',
      'Foundation engineering',
      'Seismic design & retrofit',
      'Construction management',
      'Building Information Modeling (BIM)',
      'Sustainable design consultation',
    ]}
    groups={[
      {
        title: 'Residential construction',
        items: [
          'Single-family homes',
          'Multi-family developments',
          'Townhouses & condominiums',
          'Luxury custom residences',
        ],
      },
      {
        title: 'Commercial projects',
        items: [
          'Office buildings & headquarters',
          'Shopping centres & retail',
          'Hospitals & medical facilities',
          'Schools & universities',
        ],
      },
      {
        title: 'Industrial construction',
        items: [
          'Manufacturing facilities',
          'Warehouses & distribution centres',
          'Processing plants',
          'Equipment foundations',
        ],
      },
    ]}
    stats={[
      { value: '4', label: 'Structural materials' },
      { value: 'BIM', label: 'Level 2 delivery' },
      { value: '100%', label: 'Checked designs' },
    ]}
    ctaTitle="Ready to build your vision?"
    ctaText="Send us your architectural intent and site information — we will outline the structural strategy and next steps."
  />
);

export default BuildingConstruction;
