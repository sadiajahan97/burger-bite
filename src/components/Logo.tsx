export default function () {
  return (
    <svg width='150' height='120'>
      <ellipse cx='75' cy='60' rx='75' ry='60' fill='var(--patty)' />
      <defs>
        <path id='curvePath' d='M30,80 A10,10 0 0,1 120,80' />
      </defs>
      <text fontSize='24' fontWeight='bold' fill='var(--bun)'>
        <textPath href='#curvePath' startOffset='50%' textAnchor='middle'>
          BURGER BITE
        </textPath>
      </text>
      <image href='burger.png' x='40' y='47.5' width='70' />
    </svg>
  );
}
