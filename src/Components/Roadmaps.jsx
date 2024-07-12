import Section from "./Section";
import { roadmap } from "../Constants";
import { Gradient } from "../design/Roadmap";
import { check2, grid, loading1 } from "../assets";

const Roadmap = () => (
  <Section className="overflow-hidden" id="roadmap">
    <div className="container md:pb-10">
      <div className="font-code md:max-w-md text-center lg:max-w-2xl max-w-[50rem] mx-auto mb-12 lg:mb-20 md:text-center">
        <h2 className="h2">What we’re working on</h2>
      </div>{" "}
      <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
        {roadmap.map((item) => {
          const status = item.status === "done" ? "Done" : "In progress";
          return (
            <div
              className={`flex justify-center even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] overflow-hidden ${
                item.colorful ? "bg-conic-gradient" : "bg-n-6"
              } font-code mx-auto`}
              key={item.id}
            >
              <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                <div className="absolute top-0 left-0 w-full h-full">
                  <img
                    className="w-full h-full object-cover"
                    src={grid}
                    alt="Grid"
                  />
                </div>
                <div className="relative z-1">
                  <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20 mx-auto">
                    <div className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8">
                      <img
                        className="mr-2.5"
                        src={item.status === "done" ? check2 : loading1}
                        width={16}
                        height={16}
                        alt={status}
                      />
                      <div className="tagline">{status}</div>
                    </div>
                  </div>
                  <div className="mb-10">
                    <img
                      className="w-[60%] mx-auto"
                      src={item.imageUrl}
                      alt={item.title}
                    />
                  </div>
                  <h4 className={`h4 mb-4 text-center ${item.id === "2" ? "id-2-title" : ""}`}>
                    {item.title}
                  </h4>
                  <p className="t body-2 text-n-4 text-center">{item.text}</p>
                </div>
              </div>
            </div>
          );
        })}
        <Gradient />
      </div>
    </div>
  </Section>
);

export default Roadmap;
