'use client'

import { useEffect, useRef } from 'react'

type Props = {
  variant?: 'hero' | 'compact'
}

const nodes = [
  { id: 'concept', label: 'CONCEPT' },
  { id: 'design', label: 'DESIGN' },
  { id: 'manufacture', label: 'MANUFACTURE' },
  { id: 'comply', label: 'COMPLY' },
  { id: 'scale', label: 'SCALE' },
]

export default function LifecycleThread({ variant = 'hero' }: Props) {
  const pathRef = useRef<SVGPathElement>(null)
  const svgRef = useRef<SVGSVGElement>(null)

  const isHero = variant === 'hero'
  const height = isHero ? 120 : 80
  const nodeY = isHero ? 44 : 30
  const labelY = isHero ? 72 : 52
  const circleR = isHero ? 10 : 7
  const fontSize = isHero ? 11 : 9
  const arrowSize = isHero ? 7 : 5

  // Evenly distribute nodes: 10% → 90% of width
  const nodeXPercents = [10, 27.5, 50, 72.5, 90]

  useEffect(() => {
    const path = pathRef.current
    if (!path) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const length = path.getTotalLength()
    path.style.strokeDasharray = `${length}`
    path.style.strokeDashoffset = `${length}`
    path.style.transition = 'stroke-dashoffset 1.6s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        path.style.strokeDashoffset = '0'
      })
    })
  }, [])

  // Build an SVG wave path between node positions
  // We'll use viewport width via a viewBox of 1000 × height
  const vbWidth = 1000
  const positions = nodeXPercents.map((p) => (p / 100) * vbWidth)

  // Build smooth bezier segments between each pair of nodes
  let d = `M ${positions[0]} ${nodeY}`
  for (let i = 0; i < positions.length - 1; i++) {
    const x1 = positions[i]
    const x2 = positions[i + 1]
    const mx = (x1 + x2) / 2
    const waveOffset = i % 2 === 0 ? -8 : 8
    d += ` C ${mx} ${nodeY + waveOffset}, ${mx} ${nodeY + waveOffset}, ${x2} ${nodeY}`
  }

  // Arrowhead marker
  const markerId = `arrow-${variant}`

  return (
    <div className={`w-full ${isHero ? 'py-8' : 'py-4'}`} aria-label="MedTech lifecycle: Concept to Scale">
      <svg
        ref={svgRef}
        viewBox={`0 0 ${vbWidth} ${height}`}
        xmlns="http://www.w3.org/2000/svg"
        className="w-full"
        style={{ overflow: 'visible' }}
      >
        <defs>
          <marker
            id={markerId}
            markerWidth={arrowSize}
            markerHeight={arrowSize}
            refX={arrowSize - 1}
            refY={arrowSize / 2}
            orient="auto"
          >
            <polygon
              points={`0 0, ${arrowSize} ${arrowSize / 2}, 0 ${arrowSize}`}
              fill="#00B8A9"
            />
          </marker>
        </defs>

        {/* Connecting path with wave */}
        <path
          ref={pathRef}
          d={d}
          fill="none"
          stroke="#00B8A9"
          strokeWidth={isHero ? 2.5 : 2}
          strokeLinecap="round"
          markerEnd={`url(#${markerId})`}
        />

        {/* Nodes */}
        {nodes.map((node, i) => {
          const x = positions[i]
          return (
            <g key={node.id}>
              {/* Glow ring */}
              <circle
                cx={x}
                cy={nodeY}
                r={circleR + 5}
                fill="#00B8A9"
                opacity={0.12}
              />
              {/* Main circle */}
              <circle
                cx={x}
                cy={nodeY}
                r={circleR}
                fill="#00B8A9"
                stroke="#fff"
                strokeWidth={2}
              />
              {/* Label */}
              <text
                x={x}
                y={labelY}
                textAnchor="middle"
                fontSize={fontSize}
                fontFamily="'IBM Plex Mono', monospace"
                fill="#6B7A8C"
                fontWeight="500"
                letterSpacing="0.08em"
              >
                {node.label}
              </text>
            </g>
          )
        })}
      </svg>
    </div>
  )
}
