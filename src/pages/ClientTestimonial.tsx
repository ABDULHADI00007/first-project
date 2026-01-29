import propert_1 from "../assets/property-1.png";
import propert_2 from "../assets/property-2.png";
import propert_3 from "../assets/property-3.png";
import property_4 from "../assets/property-4.png";
import property_5 from "../assets/property-5.png";

const ClientTestimonial = () => {
  const TestimonialDiv = [
    {
      name: "Performance",
      company: "Visibility",
      logo: propert_1,
      testimonial:
        "“NuHelixX RE gives brokers a unified view of production, pipeline activity, compliance status, and agent performance across the entire organization. Leadership gains clarity without needing additional staff or manual reporting.”",
    },
    {
      name: "AI Oversight",
      company: "Security",
      logo: propert_2,
      testimonial:
        "“AI identifies risk, stalled deals, and performance gaps early—helping brokers take proactive action instead of reacting too late.”",
    },
    {
      name: "Scalable Structure",
      company: "Costs",
      logo: propert_3,
      testimonial:
        "“Support single offices, multi-office brokerages, teams, and hybrid org structures with controlled permissions and clear contact ownership rules.”",
    },
    {
      name: "Operational Efficiency",
      company: "Costs",
      logo: property_4,
      testimonial:
        "“Because NuHelixX RE automates administrative tasks, compliance reminders, pipeline updates, and data entry, brokerages reduce overhead while improving output.”",
    },
    {
      name: "One Platform for Growth",
      company: "Costs",
      logo: property_5,
      testimonial:
        "“Whether managing 5 agents or 500, NuHelixX RE scales seamlessly and eliminates the need to invest in additional tools, assistants, or manual oversight systems.”",
    },
  ];

  return (
    <section className="min-h-[100vh] flex flex-col gap-[100px] lg:gap-[200px] mt-12 px-4 md:px-12">
      <div className="text-center mt-[40px] lg:mt-[70px]">
        <h1 className="font-[Duck-cry] leading-none text-[60px] sm:text-[80px] lg:text-[120px]">
          BROKERAGE <br />
          EXPERIENCE
        </h1>
      </div>

      <div className="flex flex-col gap-12">
        {TestimonialDiv.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-1 lg:grid-cols-4 font-[poppins] mt-[30px] lg:mt-[50px] border-t gap-4 lg:gap-0 items-center"
          >
            {/* Left: Name & Company */}
            <div className="font-[500] text-sm lg:text-base text-left">
              <div>{item.name}</div>
              <div className="text-gray-500">{item.company}</div>
            </div>

            {/* Center: Image (CENTERED vertically) */}
            <div className="flex justify-center items-center">
              <div className="h-[150px] lg:h-[250px] w-[200px] lg:w-[200px] relative rounded-2xl overflow-hidden -mr-0 lg:-mr-72">
                <img
                  src={item.logo}
                  alt={item.name}
                  className="w-full h-full object-cover rounded-2xl "
                />
              </div>
            </div>

            {/* Right: Testimonial */}
          <p className="font-[500] text-sm lg:text-base text-gray-700 leading-relaxed lg:col-span-2 ml-80 text-left">
  {item.testimonial}
</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientTestimonial;
