import Header from './layout/Header'

export default function Layout({ children }) {
  return (
    <div className="grid grid-rows-[62.5px_1fr_auto] grid-cols-[100%] min-h-full bg-[#f4f0ea]">
      <Header />
      {children}
    </div>
  )
}
