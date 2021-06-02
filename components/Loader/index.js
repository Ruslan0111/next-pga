import Image from 'next/image'

function Loader() {
  return (
    <div className="d-flex justify-center align-center loader">
      <Image src="/images/spinner2.svg" alt="Vercel Logo" width={224} height={224} />
    </div>
  )
}

export default Loader;