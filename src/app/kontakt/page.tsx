import Image from 'next/image'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
export default function AboutPage() {
  return (
    <>
    <Navbar></Navbar>
    <main>
        <section className='py-sm-5 py-4 mt-5 position-relative overflow-hidden'>
          <div className='container'>
            <div className='mb-4'>
                <h1 className='fs-1'>Om Länsinfra AB</h1>
                <p className='mb-0' style={{maxWidth:"700px"}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur tempore eum quibusdam incidunt maiores quaerat nam reprehenderit vitae delectus tempora.</p>
            </div>
            
            <div className='row g-4 pb-5 mb-5 text-dark'>
              <div className='col-3'>
                <div className='card card-body border-0 shadow'>
                  <img style={{objectFit:"cover", width:"100%;", maxHeight:"200px"}} src="/images/grind.jpg" alt="" />
                  <h3 className='fs-4 mt-3'>Tjänst 1</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, culpa? Cupiditate eveniet obcaecati odio aliquam.</p>
                </div>
              </div>
              <div className='col-3'>
                <div className='card card-body border-0 shadow'>
                  <img style={{objectFit:"cover", width:"100%;", maxHeight:"200px"}} src="/images/event.jpg" alt="" />
                  <h3 className='fs-4 mt-3'>Tjänst 2</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, culpa? Cupiditate eveniet obcaecati odio aliquam.</p>
                </div>
              </div>
              <div className='col-3'>
                <div className='card card-body border-0 shadow'>
                  <img style={{objectFit:"cover", width:"100%;", maxHeight:"200px"}} src="/images/områdesskydd-grafik.jpg" alt="" />
                  <h3 className='fs-4 mt-3 '>Tjänst 3</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, culpa? Cupiditate eveniet obcaecati odio aliquam.</p>
                </div>
              </div>
              <div className='col-3'>
                <div className='card card-body border-0 shadow'>
                  <img style={{objectFit:"cover", width:"100%;", maxHeight:"200px"}} src="/images/event.jpg" alt="" />
                  <h3 className='fs-4 mt-3'>Tjänst 4</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, culpa? Cupiditate eveniet obcaecati odio aliquam.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="shape-divider" style={{filter:"flipH"}}>
            <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
                <path
                  d="
                    M0,85
                    C70,110 130,45 210,60
                    C280,75 310,120 380,100
                    C450,80 520,35 600,55
                    C660,70 710,115 780,95
                    C850,75 900,40 980,65
                    C1050,90 1100,120 1180,100
                    C1260,80 1320,50 1440,85
                    L1440,120
                    L0,120
                    Z
                  "
                  fill="#f8f9fa"
                />
            </svg>
          </div>
        </section>
        <section className='py-4 py-sm-5 bg-light'>
          <div className='container'>
            <div className='d-flex align-items-center gap-5'>
              <div className='w-75 row g-0 rounded overflow-hidden shadow'>
                <img className='col-6' src="/images/grind.jpg" alt="" />
                <img className='col-6' src="/images/event.jpg" alt="" />
                <img className='col-6' src="/images/områdesskydd-grafik.jpg" alt="" />
                <img className='col-6' src="/images/arbetsplats-1920x1280.jpg" alt="" />
              </div>
              <div className='w-100'>
                <h2>Varför välja oss?</h2>
                <p style={{maxWidth:"750px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab neque, libero esse voluptatibus reprehenderit dolores corporis reiciendis ea alias, soluta amet, perferendis id repellendus quod quia earum beatae hic enim optio dicta natus deserunt dolor! Officia aut temporibus nam!</p>
                <p style={{maxWidth:"750px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio cupiditate laboriosam voluptates, voluptatibus qui ipsa cum nobis voluptas accusantium rem?</p>
                <a href="" className='btn btn-dark mt-2'>Läs mer om oss</a>
              </div>
            </div>
          </div>
        </section>
    </main>
    <Footer></Footer>
    </>
  )
}