
// eslint-disable-next-line react/prop-types
function Heading({ title }) {
  return (
    <div data-title={title} className="relative text-center text-5xl sm:text-8xl underline underline-offset-5 decoration-green-100 text-darkshadow-100 font-extrabold">
      {title}
    </div>
  )
}

export default Heading;