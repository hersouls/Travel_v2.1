'use client'

import React, { useEffect, useRef, useMemo } from 'react'
import { cn } from '@/lib/utils/cn'

interface WaveBackgroundProps {
  className?: string
  quality?: 'low' | 'medium' | 'high'
  reduceMotion?: boolean
  seed?: number
  children?: React.ReactNode
}

interface Star {
  x: number
  y: number
  size: number
  opacity: number
  twinkleSpeed: number
  initialOpacity: number
}

interface Meteor {
  x: number
  y: number
  length: number
  speed: number
  opacity: number
  angle: number
  active: boolean
}

const QUALITY_SETTINGS = {
  low: { stars: 50, meteors: 2, fps: 30 },
  medium: { stars: 100, meteors: 3, fps: 60 },
  high: { stars: 200, meteors: 5, fps: 60 },
}

export function WaveBackground({
  className,
  quality = 'medium',
  reduceMotion = false,
  seed = 12345,
  children,
}: WaveBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameRef = useRef<number>()
  const starsRef = useRef<Star[]>([])
  const meteorsRef = useRef<Meteor[]>([])
  const isVisibleRef = useRef(true)
  const lastTimeRef = useRef(0)
  const canvasSizeRef = useRef({ width: 0, height: 0 })
  const isInitializedRef = useRef(false)

  // Seeded random number generator
  const seededRandom = useMemo(() => {
    let currentSeed = Number(seed) || 12345
    return () => {
      const x = Math.sin(currentSeed++) * 10000
      return x - Math.floor(x)
    }
  }, [seed])

  // Generate stars
  const generateStars = useMemo(() => {
    const { stars: starCount } = QUALITY_SETTINGS[quality]
    const stars: Star[] = []

    for (let i = 0; i < starCount; i++) {
      const opacity = 0.3 + seededRandom() * 0.7
      stars.push({
        x: seededRandom() * 2000,
        y: seededRandom() * 1200,
        size: 1 + seededRandom() * 2,
        opacity,
        initialOpacity: opacity,
        twinkleSpeed: 0.5 + seededRandom() * 2,
      })
    }
    return stars
  }, [quality, seededRandom])

  // Generate meteors
  const generateMeteors = useMemo(() => {
    const { meteors: meteorCount } = QUALITY_SETTINGS[quality]
    const meteors: Meteor[] = []

    for (let i = 0; i < meteorCount; i++) {
      meteors.push({
        x: -100,
        y: -100,
        length: 50 + seededRandom() * 100,
        speed: 2 + seededRandom() * 4,
        opacity: 0,
        angle: 45 + seededRandom() * 20,
        active: false,
      })
    }
    return meteors
  }, [quality, seededRandom])

  // Initialize
  useEffect(() => {
    if (isInitializedRef.current) return
    starsRef.current = generateStars
    meteorsRef.current = generateMeteors
    isInitializedRef.current = true
  }, [generateStars, generateMeteors])

  // Intersection Observer
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting
      },
      { threshold: 0.1 }
    )
    observer.observe(canvas)
    return () => observer.disconnect()
  }, [])

  // Motion preference
  const [shouldAnimate, setShouldAnimate] = React.useState(false)
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    setShouldAnimate(!reduceMotion && !prefersReducedMotion)
  }, [reduceMotion])

  // Animation loop
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || !shouldAnimate || !isInitializedRef.current) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const { fps } = QUALITY_SETTINGS[quality]
    const frameInterval = 1000 / fps

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect()
      const dpr = window.devicePixelRatio || 1
      canvas.width = Math.floor(rect.width * dpr)
      canvas.height = Math.floor(rect.height * dpr)
      canvasSizeRef.current = { width: Math.floor(rect.width), height: Math.floor(rect.height) }
      ctx.scale(dpr, dpr)
      canvas.style.width = `${rect.width}px`
      canvas.style.height = `${rect.height}px`
    }

    const drawStars = (time: number) => {
      const stars = starsRef.current
      const { width, height } = canvasSizeRef.current
      stars.forEach(star => {
        if (star.x > width || star.y > height) return
        const twinkle = Math.sin(time * 0.001 * star.twinkleSpeed) * 0.3
        star.opacity = Math.max(0.1, star.initialOpacity + twinkle)
        ctx.save()
        ctx.globalAlpha = star.opacity
        ctx.fillStyle = '#ffffff'
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      })
    }

    const drawMeteors = (time: number, deltaTime: number) => {
      const meteors = meteorsRef.current
      const { width, height } = canvasSizeRef.current
      meteors.forEach(meteor => {
        if (!meteor.active && seededRandom() < 0.001) {
          meteor.x = -meteor.length
          meteor.y = seededRandom() * height * 0.5
          meteor.opacity = 0.8 + seededRandom() * 0.2
          meteor.active = true
        }
        if (meteor.active) {
          const radians = (meteor.angle * Math.PI) / 180
          meteor.x += Math.cos(radians) * meteor.speed * (deltaTime / 16)
          meteor.y += Math.sin(radians) * meteor.speed * (deltaTime / 16)
          ctx.save()
          ctx.globalAlpha = meteor.opacity
          const gradient = ctx.createLinearGradient(
            meteor.x,
            meteor.y,
            meteor.x - Math.cos(radians) * meteor.length,
            meteor.y - Math.sin(radians) * meteor.length
          )
          gradient.addColorStop(0, '#ffffff')
          gradient.addColorStop(0.5, '#93c5fd')
          gradient.addColorStop(1, 'transparent')
          ctx.strokeStyle = gradient
          ctx.lineWidth = 2
          ctx.beginPath()
          ctx.moveTo(meteor.x, meteor.y)
          ctx.lineTo(
            meteor.x - Math.cos(radians) * meteor.length,
            meteor.y - Math.sin(radians) * meteor.length
          )
          ctx.stroke()
          ctx.restore()
          if (meteor.x > width + meteor.length || meteor.y > height + meteor.length) {
            meteor.active = false
            meteor.opacity = 0
          }
        }
      })
    }

    const animate = (currentTime: number) => {
      if (!isVisibleRef.current) {
        animationFrameRef.current = requestAnimationFrame(animate)
        return
      }
      const deltaTime = currentTime - lastTimeRef.current
      if (deltaTime >= frameInterval) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        drawStars(currentTime)
        drawMeteors(currentTime, deltaTime)
        lastTimeRef.current = currentTime
      }
      animationFrameRef.current = requestAnimationFrame(animate)
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)
    animationFrameRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current)
    }
  }, [shouldAnimate, quality, seededRandom])

  return (
    <div className={cn('relative overflow-hidden', className)}>
      <div className='absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900' />
      <div className='absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent' />

      <canvas
        ref={canvasRef}
        className='pointer-events-none absolute inset-0 h-full w-full'
        style={{ mixBlendMode: 'screen' }}
      />

      <svg
        className='absolute inset-0 h-full w-full opacity-20'
        viewBox='0 0 1200 800'
        preserveAspectRatio='xMidYMid slice'
      >
        <defs>
          <linearGradient id='waveGradient1' x1='0%' y1='0%' x2='100%' y2='100%'>
            <stop offset='0%' stopColor='#3b82f6' stopOpacity='0.3' />
            <stop offset='100%' stopColor='#1d4ed8' stopOpacity='0.1' />
          </linearGradient>
          <linearGradient id='waveGradient2' x1='0%' y1='0%' x2='100%' y2='100%'>
            <stop offset='0%' stopColor='#6366f1' stopOpacity='0.2' />
            <stop offset='100%' stopColor='#4f46e5' stopOpacity='0.05' />
          </linearGradient>
        </defs>
        <path
          d='M0,400 C300,300 600,500 900,400 C1050,350 1150,450 1200,400 L1200,800 L0,800 Z'
          fill='url(#waveGradient1)'
          className={cn(shouldAnimate && 'animate-wave wave-accelerated', 'transition-transform duration-1000')}
          style={{ transformOrigin: 'center' }}
        />
        <path
          d='M0,500 C200,400 400,600 600,500 C800,400 1000,600 1200,500 L1200,800 L0,800 Z'
          fill='url(#waveGradient2)'
          className={cn(shouldAnimate && 'animate-wave-reverse wave-accelerated', 'transition-transform duration-1000')}
          style={{ transformOrigin: 'center' }}
        />
      </svg>

      <div
        className='pointer-events-none absolute inset-0 opacity-5 mix-blend-overlay'
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='27' cy='27' r='1'/%3E%3Ccircle cx='47' cy='47' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div className='relative z-10'>{children}</div>
    </div>
  )
}

// Variants
export function WaveBackgroundHero({ children, className }: { children?: React.ReactNode; className?: string }) {
  return (
    <WaveBackground className={cn('flex min-h-screen items-center justify-center', className)} quality='high'>
      {children}
    </WaveBackground>
  )
}

export function WaveBackgroundSection({ children, className }: { children?: React.ReactNode; className?: string }) {
  return (
    <WaveBackground className={cn('py-20', className)} quality='medium'>
      {children}
    </WaveBackground>
  )
}

export function WaveBackgroundCard({ children, className }: { children?: React.ReactNode; className?: string }) {
  return (
    <WaveBackground className={cn('overflow-hidden rounded-2xl', className)} quality='low'>
      <div className='relative z-10 p-6'>{children}</div>
    </WaveBackground>
  )
}
