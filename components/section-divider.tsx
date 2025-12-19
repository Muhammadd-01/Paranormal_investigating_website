export function SectionDivider() {
  return (
    <div className="relative w-full h-px my-20">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary shadow-lg shadow-primary/50 animate-pulse" />
    </div>
  )
}
