import TextLoop from './components/text_loop.jsx';
export function TextNameLoop(){return(<TextLoop
  text="kumar✦ayush"
  shape="wave"
  speed={90}
  direction="forward"
  separator="✦"
  curviness={90}
  tilt={0}
  fontSize={46}
  fontWeight={800}
  letterSpacing={2}
  uppercase
  ribbon
  ribbonColor="#3b82f6"
  ribbonWidth={86}
  edgeFade={0}
  cross={false}
  crossAngle={16}
  draggable={false}
  scrollBoost={0}
  outline={false}
  pauseOnHover
  outlineWidth={1.5}
  color="#f97316"
  crossColor="#7c3aed"
/>)}




import WarpText from './components/WarpText';

<WarpText
  text="Bend the moment when you hover over the text."
  warpStrength={0.08}
  warpScale={1.7}
  speed={0.55}
  lens="bulge"
  pointerInfluence={0.42}
  pointerStrength={0.38}
  refraction={0.018}
  chromatic={0.35}
  idleDrift={0.2}
  ripple
  clickRipple
  intro
  fontSize={106}
  fontWeight={800}
  style={{ height: '320px' }}
  fontFamily="inherit"
  letterSpacing="-0.06em"
  lineHeight={0.9}
/>


export function WarpTextLoop(){
    return(
        <div className="" >
            <WarpText/>
        </div>
    )
}


import FoldText from './components/FoldText';

<FoldText
  text="Design unfolds"
  foldStyle="paper"
  splitBy="char"
  hinge="top"
  trigger="mount"
  foldAngle={92}
  duration={0.65}
  stagger={0.045}
  staggerFrom="start"
  ease="power3.out"
  loopDelay={1.4}
  hoverRefold
  refoldRadius={140}
  refoldAngle={45}
  perspective={700}
  creaseShading={0.55}
  fontSize={80}
  fontWeight={800}
/>


export function FoldTextLoop(){
    return(
        <div className="" >
            <FoldText/>
        </div>
    )
}


import DepthCarousel from './components/DepthCarousel';

const items = [
  { image: 'https://picsum.photos/seed/a/800/1000', alt: 'One' },
  { image: 'https://picsum.photos/seed/b/800/1000', alt: 'Two' },
  { image: 'https://picsum.photos/seed/c/800/1000', alt: 'Three' },
  { image: 'https://picsum.photos/seed/d/800/1000', alt: 'Four' },
  { image: 'https://picsum.photos/seed/e/800/1000', alt: 'Five' }
];

<div style={{ height: '500px', position: 'relative' }}>
  <DepthCarousel
    items={items}
    depth={220}
    spread={90}
    tilt={22}
    tiltDirection="right"
    perspective={1400}
    visibleCards={4}
    falloff={0.2}
    blur={6}
    autoplay={false}
    loop
    cardWidth={300}
    cardHeight={380}
    radius={18}
    tint="#05060a"
    duration={700}
    ease="power3.out"
    autoplayDelay={3200}
    showControls
    showIndicators
/>
</div>



export function DepthCarouselLoop(){
    return(
        <div className="" >
            <DepthCarousel/>
        </div>
    )
}



import Lanyard from './components/Lanyard';

<div style={{ width: '100%', height: '600px' }}>
  <Lanyard frontImage="https://images.pexels.com/photos/29866935/pexels-photo-29866935.jpeg" backImage="/card-back.png" strapImage="/band.png"
  imageFit="cover"
  cardColor="#ffffff"
  orientation="portrait"
  finish="glossy"
  cornerRadius={0.3}
  size={0.6}
  anchor="center"
  strapLength={0.5}
  strapColor="#111111"
  strapWidth={0.65}
  metal="silver"
  gravity={1}
  damping={0.5}
  elasticity={0.5}
  breeze={0.5}
  interactive
  intro
/>
</div>


export function LanyardLoop(){
    return(
        <div className="" >
            <Lanyard/>
        </div>
    )
}



