import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
        <div className="container py-2">
          <div className='d-flex align-items-center'>
            <Image className='me-2' src="/images/ecg-graphic.png" height={36} width={30} alt="" />
            <div className='fw-bold text-uppercase mt-1' style={{lineHeight:"13px", fontSize:"10px"}}>
              <span className='fs-4'>Länsinfra</span>
            </div>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">Hem</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">Tjänster</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">Om oss</a>
              </li>
            </ul>
            <a className='btn btn-lansinfra-primary px-3 ms-3' href="">Kontakt</a>
          </div>
        </div>
      </nav>
  )
}
