import propert_1 from "../assets/property-1.png"
import propert_2 from "../assets/property-2.png"
import propert_3 from "../assets/property-3.png"
import property_4 from "../assets/property-4.png"
import property_5 from "../assets/property-5.png"


const ClientTestimonial = () => {
  let TestimonialDiv = [
    {
     
      name: "Performance ",
      company: "Visibility",
      logo: propert_1,
      testimonial:
        "“NuHelixX RE gives brokers a unified view of production, pipeline activity, compliancestatus, and agent performance across the entire organization. Leadership gains clarity without needing additional staff or manual reporting.”",
    },
    {
    
      name: "AI Oversight ",
      company: "Security",
      logo: propert_2,
      testimonial:
      "“AI identifies risk, stalled deals, and performance   gaps early—helping brokers take proactive action instead of reacting too late.”",
    },
    {
    
      name: "Scalable Structure",
      company: " Costs",
      logo: propert_3,
      testimonial:
        "“Support single offices, multi-office brokerages, teams, and hybrid org structures with controlled permissions and clear contact ownership rules.”",
    },
      {
     
      name: "Operational Efficiency",
      company: " Costs",
      logo: property_4,
      testimonial:
        "“Because NuHelixX RE automates administrative tasks, compliance reminders, pipeline updates, and data entry, brokerages reduce overhead while improving output.”",
    },
      {
     
      name: "One Platform for Growth",
      company: " Costs",
      logo: property_5,
      testimonial:
        "“Whether managing 5 agents or 500, NuHelixX RE scales seamlessly and eliminates theneed to invest in additional tools, assistants, or manual oversight systems.Agent Experience–Change all images to NuHelix ‘X’ or do a text transformation”",
    },
  ];

  return (
    <section className="min-h-[100vh] flex flex-col gap-[100px] lg:gap-[200px] mt-12">
      <div className="text-center mt-[40px] lg:mt-[70px]">
        <h1 className="font-[Duck-cry] leading-none text-[60px] sm:text-[80px] lg:text-[120px]">
         BROKAGE  <br />
          EXPERIENCE
        </h1>
      </div>
      <div>
      {TestimonialDiv.map((item) => (
        <div key={item.id} className="grid grid-cols-1 lg:grid-cols-4 font-[poppins] mt-[30px] lg:mt-[50px] border-t gap-4 lg:gap-0">
          <p className="text-gray-600 text-sm lg:text-base">/0{item.id}</p>

          {/* name/company - avoid nested <p> inside <p> */}
          <div className="font-[500] text-sm lg:text-base">
            <div>{item.name}</div>
            <div className="text-gray-500">{item.company}</div>
          </div>

          {/* use inline style for dynamic background color */}
          <div
            className="h-[150px] lg:h-[250px] rounded-2xl w-full lg:w-[200px] -top-[25px] lg:-top-[50px] relative flex justify-center items-center mx-auto lg:mx-0"
          >
            <img src={item.logo} alt="" className="h-full lg:h-full rounded-2xl w-auto object-cover" />
          </div>

          <p className="font-[500] text-sm lg:text-base">{item.testimonial}</p>
        </div>
      ))}
        </div>
    </section>
  );
};

export default ClientTestimonial;
