interface PlaceholderProps {
  label: string
}

export function Placeholder({ label }: PlaceholderProps) {
  return (
    <div className="inline-flex items-center rounded bg-accent px-3 py-1 text-accent-foreground text-sm">
      {label}
    </div>
  )
}
