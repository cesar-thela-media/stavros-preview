interface PropertyConcessionNoteProps {
  text?: string
  variant?: 'hero' | 'card'
}

export default function PropertyConcessionNote({
  text,
  variant = 'card',
}: PropertyConcessionNoteProps) {
  if (!text) {
    return null
  }

  if (variant === 'hero') {
    return (
      <div className="mt-3">
        <div className="inline-block border border-gold-400 bg-black/25 px-[18px] py-2 text-xs font-bold uppercase tracking-[0.18em] text-gold-400">
          {text}
        </div>
      </div>
    )
  }

  return (
    <div className="mt-2">
      <div className="inline-block border border-champagne-600 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-champagne-600">
        {text}
      </div>
    </div>
  )
}
