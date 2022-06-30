import Image from "next/image";

const test = () => {
    return ( 
      <div className="container mx-auto px-16 grid grid-cols-2 gap-4 h-auto relative">
      <div className="h-full p-1.5 pt-32">
        <h1 className="text-6xl font-semibold text-primary mb-10">
          Bring everyone together to build better products.
        </h1>
        <p className="text-secondary w-3/4 mb-10">
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </p>
        <button className="rounded-full bg-burnt-orange hover:bg-burnt-orange-active text-white text-sm px-5 py-2 hover:shadow-xl">
          Get Started
        </button>
        <h3 className="text-primary text-4xl w-3/4 font-medium mt-40 mb-9">
          {" "}
          What’s different about Manage?
        </h3>
        <p className="text-secondary w-3/4">
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </p>
      </div>
      <div className="h-full p-1.5 pt-16">
        <Image
          src="/illustration-intro.svg"
          alt=""
          width="580"
          height="525"
          className="fixed fate top-0 right-0"
        />
        <div className="absolute -top-44 -right-44 -z-10">
          <Image
            src="/bg-tablet-pattern.svg"
            alt=""
            width="714"
            height="714"
          />
        </div>
        <div className="benefits mt-16">
          <div className="flex mb-12">
            <div className="button-wrap !w-12 mr-4">
              <button className="rounded-full bg-burnt-orange px-3 py-2 text-white">
                01
              </button>
            </div>
            <div className="text">
              <p className="heading text-primary font-medium mb-3">
                Track company-wide progress
              </p>
              <p className="details text-secondary">
                See how your day-to-day tasks fit into the wider vision. Go
                from tracking progress at the milestone level all the way
                done to the smallest of details. Never lose sight of the
                bigger picture again.
              </p>
            </div>
          </div>
          <div className="flex mb-12">
            <div className="button-wrap !w-12 mr-4">
              <button className="rounded-full bg-burnt-orange px-3 py-2 text-white">
                02
              </button>
            </div>
            <div className="text">
              <p className="heading text-primary font-medium mb-3">
                Advanced built-in reports
              </p>
              <p className="details text-secondary">
                Set internal delivery estimates and track progress toward
                company goals. Our customisable dashboard helps you build
                out the reports you need to keep key stakeholders informed.
              </p>
            </div>
          </div>
          <div className="flex mb-12">
            <div className="button-wrap !w-12 mr-4">
              <button className="rounded-full bg-burnt-orange px-3 py-2 text-white">
                03
              </button>
            </div>
            <div className="text">
              <p className="heading text-primary font-medium mb-3">
                Everything you need in one place
              </p>
              <p className="details text-secondary">
                Stop jumping from one service to another to communicate,
                store files, track tasks and share documents. Manage offers
                an all-in-one team productivity solution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
     );
}
 
export default test;