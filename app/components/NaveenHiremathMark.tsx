export function NaveenHiremathMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 160.3 70"
      {...props}
    >
      <path
        fill="currentColor"
        d="M 70.2 70 L 70.2 0 L 104.2 0 L 104.2 31.3 L 126.3 31.3 L 126.3 0 L 160.3 0 L 160.3 70 L 126.3 70 L 126.3 38 L 104.2 38 L 104.2 70 L 70.2 70 Z M 0 70 L 0 0 L 29.4 0 L 58.6 35 L 58.6 0 L 64.6 0 L 64.6 70 L 41.1 70 L 6.1 23.4 L 6.1 70 L 0 70 Z"
      />
    </svg>
  )
}

export function getMarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 256 128"><path fill="${color}" d="M 70.2 70 L 70.2 0 L 104.2 0 L 104.2 31.3 L 126.3 31.3 L 126.3 0 L 160.3 0 L 160.3 70 L 126.3 70 L 126.3 38 L 104.2 38 L 104.2 70 L 70.2 70 Z M 0 70 L 0 0 L 29.4 0 L 58.6 35 L 58.6 0 L 64.6 0 L 64.6 70 L 41.1 70 L 6.1 23.4 L 6.1 70 L 0 70 Z""/></svg>`
}