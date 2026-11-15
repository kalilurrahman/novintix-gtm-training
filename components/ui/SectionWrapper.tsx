type Props = {
  variant?: 'dark' | 'light' | 'paper'
  children: React.ReactNode
  className?: string
  id?: string
}

const variantStyles: Record<NonNullable<Props['variant']>, string> = {
  dark: 'bg-ink text-white',
  light: 'bg-white',
  paper: 'bg-surface',
}

export default function SectionWrapper({
  variant = 'light',
  children,
  className = '',
  id,
}: Props) {
  return (
    <section id={id} className={`${variantStyles[variant]} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  )
}
