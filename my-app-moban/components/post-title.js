export default function PostTitle({ children }) {
  return (
    <h3 className="text-lg md:text-xl lg:text-xl font-serif  antialiased tracking-tighter leading-tight md:leading-none mb-6 text-center md:text-left">
      {children}
    </h3>
  )
}
