export default function About(){
    return(
        
      <>
        <div id="about" className="min-h-screen py-28 px-8 mx-auto container -z-10">
          <div className="mb-20 md:px-0 px-5">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
              <div className="md:col-span-8">
                <p className="mb-4">Best Tiffins</p>
                <h2 className="text-6xl font-modern-negra max-w-lg">
                  Where every grain matters{" "}
                  <span className="text-yellow">-</span>
                  from batter to chutney
                </h2>
              </div>

              <div className="md:col-span-4 space-y-5 flex flex-col justify-between text-xl pt-8">
                <p>
                  Every Tiffin we serve is a reflection of our obsession with
                  detail — from the grains to the final product. That care
                  is what turns a simple food into something remarkably delicious.
                </p>

                <div>
                  <p className="md:text-4xl text-xl font-bold">
                    <span className="text-yellow text-6xl">4.5</span>/5
                  </p>
                  <p className="text-sm text-yellow">
                    More than +1200 customers
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </>
    
    )
}