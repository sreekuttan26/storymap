
import Image from "next/image";
import { AnimatedTestimonials } from "./Compoents/Animcards";
import { ContainerScroll } from "./Compoents/Scolltilt";
import dynamic from 'next/dynamic';
import { StickyScroll } from "./Compoents/Stickyscroll";
import { PinContainer } from "./Compoents/Pincontainer";
import { Compare } from "./Compoents/Comapre";


export default function Home() {




  const stakeholders = [
    {
      name: "Narayanppa",
      text: "Great product!",
      rating: 5,
      quote: "This lake has always provided drinking water for our cattle. We washed our clothes here. The temple stood there even in my great grandfather’s time. During droughts, we would offer grains to the deity and we were always sure to be blessed with rains.Located at the low end of the rocky surface, which was one continuous structure unlike now, the temple pit was always filled with water and was sacred. We would take a few drops and sprinkle it on our heads in reverence to the deity. Water no longer collects here as much or as regularly.",

      designation: "Sampigehalli resident & temple devotee",
      src: "/user1.JPG"
    },
    {
      name: "Shivakumar",
      text: "Excellent service!",
      rating: 4,
      quote: "The lake has served us for generations. The water was once good for drinking but today it is unsafe even to step into it. With growing urbanization in the last 10–15 years and apartments taking over the lake surroundings, the educated allowed the water to become a sewage dump. The original purpose of the lake – to support livestock and groundwater – has been neglected. Today the revived status of the lake benefits some residents. The recreational area is important but the fence around the revived lake has cut off water access to livestock. Over time more farmers will abandon keeping livestock… If everyone is into IT–BT, who will supply milk? A farmer is essential.",
      designation: "Chokkanahalli resident, Pastoralist by tradition, lawyer by profession",
      src: "user2.jpg"
    },
  ];

  return (
    <main className="flex flex-col h-full w-full cursor-custom">


      {/* Comapair the past and presnt lake */}
      <div className="w-full h-full flex justify-center items-center">
        <Compare firstImage='/lake_gm.png' secondImage='place.png' className='w-full h-[600px]' slideMode='drag' />
      </div>


      {/* heading */}
      <h1 className="text-4xl md:text-6xl font-bold w-full text-center mt-20 mb-10">
        Urban lake Restoration Blueprint
      </h1>






      {/* tilt scroll animation */}
      <div className="w-full h-full ">
        <ContainerScroll
          titleComponent={
            <h1 className="text-xl md:text-5xl font-bold">
              Venkateshpura Lake
            </h1>
          }
        >
          <div className="relative  w-full h-screen overflow-hidden ">
            <video
              src="/earth.mp4"
              autoPlay
              muted
              loop

              playsInline
              className="absolute top-0 left-0 w-full h-full object-cover rounded-2xl"
            />
          </div>

        </ContainerScroll>



      </div>



      {/* introduction */}
      <div className="max-w-7xl mx-auto text-center px-4 space-y-4 text-xl -mt-20">
        <h1>This is the story of Venkateshpura Lake – a modest freshwater lake tucked away in the northern part of Bengaluru.
        </h1>
        <p>It is the story of how the lake lost its vitality as human development took precedence. Over time, it turned into a stagnant, degraded water body, until one day, a few concerned citizens decided to bring it back to life, not just for the lake’s sake, but for their own.
        </p>
      </div>



      {/* Place */}
      <h1 className="text-xl md:text-5xl font-bold w-full text-center mt-20"> Place </h1>
      <div className="w-full relative h-[50rem] mt-0">
        {/* <Image
          unoptimized
          src="/place.png"
          alt="Place Image"
          fill
          className="rounded-lg object-cover"
          priority
        /> */}



        {/* overlay scroll */}
        <div className=" relative  h-full flex w-full justify-center scroll-smooth overflow-hidden scrollbar-hide">
          <StickyScroll
            content={[
              {
                title: "",
                description: "Venkateshpura Lake is a relatively small lake, extending a little over 10 acres. It is managed by the Bruhat Bangalore Mahanagara Palike (BBMP), Bengaluru’s civic body. Located in Sampigehalli in the Arkavathy Layout of Jakkur Ward, the lake is sometimes more familiar to the locals as Sampigehalli Lake, its old name."
              },
              {
                title: "",
                description: "The estimated water spread is 8 acres. Venkateshpura Lake has an independent catchment area that leads to Hebbala Nagara Valley, one of the five valleys of Bangalore. Being at the apex of a series of lakes, its outlet joins Rachenahalli Lake on the downstream."
              }, {
                title: "",
                description: "There is a ruggedness to the lake’s identity that comes from the rocky outgrowth both within it and along its periphery. Most of the rock faces that covered the lake are gone. Only the rocky projection bearing the nineteenth-century Sampigehalli Auxiliary Tower Station, stands to tell a story. Adjacent to the waterbody is the  Jarabandemma Temple, built on a rock, which holds unique significance due to the distinct rituals observed there even today. The lake stands in the neighbourhood, amid towering buildings, as a testament of struggle put up by many of the residents who live around it."
              },

              {
                title: "",
                description: ""
              },
              {
                title: "",
                description: ""
              }
            ]}
          />
        </div>






      </div>
      {/* History */}
      <div className="w-full h-[1500px] flex flex-col justify-center items-center">
        <h1 className="text-xl md:text-5xl font-bold w-full text-center mt-10"> History </h1>
        <div className="max-w-7xl mx-auto text-center px-4 space-y-4 text-xl mt-15">

          <p>There is little by way of origin story for Venkateshpura Lake. But some little legends from history lend a narrative. Here is one such.
            <i>“Keregalam Kattu, Maragalam Nedu” </i> is a saying in Kannada, meaning – “Build lakes, plant trees” – attributed to the mother of Kempe Gowda, the governor under the Vijayanagara Empire famed for founding Bangalore city. Legend has it that the mother offered this advice to her son when he set out to build his dream capital in the 1530s. Kempe Gowda is remembered today for creating nearly a hundred lakes and lining the city’s roads with trees, a vision that was to shape Bangalore’s identity. Before it transformed into an ‘IT hub’ of India, Bangalore was popularly known as the ‘City of Lakes’. While many lakes have made way for development, some like the Venkateshpura Lake survive as renewed hope for a city heaving under construction projects.
          </p>
        </div>
        <div className="w-full h-full bg-no-repeat bg-cover relative " style={{ backgroundImage: "url('/place.png') " }}>

          <div className="absolute top-60 left-140 z-60">
            <div className=" w-full" >
              <PinContainer title="Tower Station" href="https://example.com">
                <div className="flex basis-full p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[80rem] ">
                  <div className="flex flex-col w-full h-full p-2">
                    <h3 className=" !pb-2 !m-0 font-bold  text-base text-slate-100">
                      The Sampigehalli Auxiliary Tower Station (SATS)
                    </h3>
                    <div className="text-base !m-0 !p-0 font-normal">
                      <span className="text-black">
                        The Sampigehalli Auxiliary Tower Station (SATS) overlooking Venkateshpura Lake, built in 1803, witnessed the Great Trigonometrical Survey (GTS) of India. It was one of the most ambitious scientific projects in history, designed to survey the Indian subcontinent. The GTS commenced in 1802 and took nearly a hundred years to complete. It mapped the entire Indian subcontinent, even measuring the Himalayan peaks and revealing to the world that Mt Everest was the tallest mountain ever.
                        Thousands of people worked on this project but the most remembered are William Lambton, George Everest and Andrew Waugh. It was Lambton, an English Infantry officer, with experience in surveying, who came up with the idea of developing an accurate map of India using a precise technique called triangulation, and his proposal soon set the GTS in motion. While his equipment was yet to arrive, Lambton decided to do a pilot survey in Bangalore, for which he needed to establish a trial baseline. He set out by establishing observation points across Bangalore, which aided in minimising observation and calculation errors. These points were the auxiliary stations and one was the SATS, which became one of the many principal stations for triangulation.
                        A twelve-foot pillar, which was recorded as standing in the centre of the platform, is now missing. Only the deep circular pit at its base remains.

                      </span>
                    </div>

                  </div>


                  <div className="w-full h-full">
                    <Image
                      src="/tower.png"
                      alt="Hover Image"
                      width={1300}
                      height={1200}
                      className="mt-4 rounded-md border border-white/10 shadow-lg object-cover object-center"
                    />
                  </div>
                </div>
              </PinContainer>

            </div>


          </div>



          <div className="absolute top-130 left-80">
            <div className=" w-full" >
              <PinContainer title="Jarabandemma Temple" href="https://example.com">
                <div className="flex basis-full p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[50rem] ">
                  <div className="flex flex-col w-full h-full p-2">
                    <h3 className=" !pb-2 !m-0 font-bold  text-base text-slate-100">
                      Jarabandemma Temple
                    </h3>
                    <div className="text-base !m-0 !p-0 font-normal">
                      <span className="text-black">
                        Have many queries about the write up that we have. Even if we may not be able to place it historically and rely on oral accounts, the current write-up has a few anomalies like Sharvana being the month of drought. Which it isn’t, as far as I know. Will turn it in tomorrow hopefully.

                      </span>
                    </div>

                  </div>


                  <div className="w-full h-full">
                    <Image
                      unoptimized
                      src="/temple.png"
                      alt="Hover Image"
                      width={1300}
                      height={1200}
                      className="mt-4 rounded-md border border-white/10 shadow-lg object-cover object-center"
                    />
                  </div>
                </div>
              </PinContainer>

            </div>


          </div>

        </div>
      </div>

      <h1 className="text-xl md:text-5xl font-bold w-full text-center mt-15"> Stakeholders </h1>
      <div className="h-full flex w-full mt-0 gap-1 overflow-hidden  ">
        {/* <div className=" w-[40vw] relative" >
          <Image
            unoptimized
            src="/place.png"
            alt="Hover Image"
            fill
            className="mt-4 rounded-md  object-cover object-center"
          />
        </div> */}
        <div className=" w-full " >
          <AnimatedTestimonials testimonials={stakeholders} autoplay={false} />
        </div>



      </div>







      {/* ....................................................................................................................... */}








      {/* <div className="h-full flex w-full mt-10 gap-5">
        <div className=" w-100" >
          <PinContainer title="Hover Me" href="https://example.com">
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem]  ">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                Hover over this container
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-500">
                  This is a hover effect inspired by Linear.This is a hover effect inspired by Linear.This is a hover effect inspired by Linear.This is a hover effect inspired by Linear.
                </span>
              </div>
              <div>
                <Image
                  src="/user1.jpg"
                  alt="Hover Image"
                  width={300}
                  height={200}
                  className="mt-4 rounded-md border border-white/10 shadow-lg"
                />
              </div>
            </div>
          </PinContainer>

        </div>
        <div className="h-40 w-100" >
          <PinContainer title="Hover Me" href="https://example.com">
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                Hover over this container
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-500">
                  This is a hover effect inspired by Linear.
                </span>
              </div>
              <div>
                <Image
                  src="/user1.jpg"
                  alt="Hover Image"
                  width={300}
                  height={200}
                  className="mt-4 rounded-md border border-white/10 shadow-lg"
                />
              </div>
            </div>
          </PinContainer>

        </div>
      </div>

      <div className="h-100"></div>

      <div className="mt-20 mb-20 flex justify-center items-center w-full h-full">


      </div> */}




    </main>
  );
}
