import React, { useState, useRef } from 'react';

const prizes = [
  'Free strategy call',
  '10% off 3D animation',
  'Free Instagram reel pack',
  'Secret bonus (surprise offer)'
];

const colors = ['#1e293b', '#fbbf24', '#0ea5e9', '#a21caf'];

function getRandomPrizeIndex() {
  return Math.floor(Math.random() * prizes.length);
}

const SpinTheWheel: React.FC = () => {
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [show, setShow] = useState(false);
  const [angle, setAngle] = useState(0);
  const wheelRef = useRef<SVGSVGElement>(null);

  function spin() {
    if (spinning) return;
    setResult(null);
    setSpinning(true);
    setShow(true);
    const prizeIndex = getRandomPrizeIndex();
    // Each segment is 360/4 = 90deg, add extra spins for effect
    const spins = 4 + Math.floor(Math.random() * 2); // 4-5 full spins
    const finalAngle = 360 * spins + (360 - prizeIndex * 90 - 45); // -45 to center pointer
    setAngle(finalAngle);
    setTimeout(() => {
      setSpinning(false);
      setResult(prizes[prizeIndex]);
    }, 2500);
  }

  return (
    <div style={{ position: 'fixed', bottom: 24, left: 24, zIndex: 1000 }}>
      <button
        className="bg-yellow-accent text-black rounded-full shadow-elegant w-14 h-14 flex items-center justify-center text-2xl hover:scale-110 transition-all duration-300 border-2 border-yellow-accent/50"
        onClick={() => setShow(true)}
        aria-label="Spin the Wheel"
      >
        🎁
      </button>
      {show && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 animate-fade-in" onClick={() => !spinning && setShow(false)}>
          <div className="bg-white rounded-2xl shadow-elegant p-8 relative flex flex-col items-center min-w-[320px]" onClick={e => e.stopPropagation()}>
            <button className="absolute top-2 right-2 text-xl text-gray-400 hover:text-red-accent" onClick={() => !spinning && setShow(false)}>&times;</button>
            <h3 className="text-2xl font-bold mb-4 text-gradient">Spin the Wheel!</h3>
            <div className="mb-4 relative" style={{ width: 220, height: 220 }}>
              <svg
                ref={wheelRef}
                width={220}
                height={220}
                viewBox="0 0 220 220"
                style={{ transform: `rotate(${angle}deg)`, transition: spinning ? 'transform 2.5s cubic-bezier(0.23, 1, 0.32, 1)' : 'none' }}
              >
                {prizes.map((prize, i) => {
                  const startAngle = i * 90;
                  const endAngle = startAngle + 90;
                  const largeArc = endAngle - startAngle > 180 ? 1 : 0;
                  const x1 = 110 + 100 * Math.cos((Math.PI * startAngle) / 180);
                  const y1 = 110 + 100 * Math.sin((Math.PI * startAngle) / 180);
                  const x2 = 110 + 100 * Math.cos((Math.PI * endAngle) / 180);
                  const y2 = 110 + 100 * Math.sin((Math.PI * endAngle) / 180);
                  return (
                    <path
                      key={prize}
                      d={`M110,110 L${x1},${y1} A100,100 0 ${largeArc} 1 ${x2},${y2} Z`}
                      fill={colors[i % colors.length]}
                      stroke="#fff"
                      strokeWidth={2}
                    />
                  );
                })}
                {prizes.map((prize, i) => {
                  const angle = (i + 0.5) * 90;
                  const x = 110 + 60 * Math.cos((Math.PI * angle) / 180);
                  const y = 110 + 60 * Math.sin((Math.PI * angle) / 180);
                  return (
                    <text
                      key={prize}
                      x={x}
                      y={y}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fontSize={14}
                      fill="#fff"
                      style={{ fontWeight: 600, pointerEvents: 'none', userSelect: 'none' }}
                      transform={`rotate(${angle + 90} ${x} ${y})`}
                    >
                      {prize.split(' ')[0]}
                    </text>
                  );
                })}
                {/* Center circle */}
                <circle cx={110} cy={110} r={30} fill="#fff" />
                <text x={110} y={115} textAnchor="middle" fontSize={18} fontWeight={700} fill="#222">SPIN</text>
              </svg>
              {/* Pointer */}
              <div style={{ position: 'absolute', left: '50%', top: -18, transform: 'translateX(-50%)' }}>
                <div style={{ width: 0, height: 0, borderLeft: '12px solid transparent', borderRight: '12px solid transparent', borderBottom: '18px solid #fbbf24' }} />
              </div>
            </div>
            <button
              className="btn-primary w-full mt-2 disabled:opacity-50"
              onClick={spin}
              disabled={spinning}
            >
              {spinning ? 'Spinning...' : 'Spin Now!'}
            </button>
            {result && (
              <div className="mt-6 text-center animate-fade-in-up">
                <h4 className="text-xl font-bold mb-2 text-green-accent">🎉 You won:</h4>
                <div className="text-lg font-semibold text-primary mb-2">{result}</div>
                <button className="btn-secondary mt-2" onClick={() => setShow(false)}>Close</button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SpinTheWheel; 