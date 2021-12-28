import Button from "./Button";
import Shell from "./Shell";

// import img from "next/image";

const Features = () => {
  return (
    <Shell>
      <div className="flex justify-between items-center mb-16">
        <h2 className="text-gray-700 font-jakarta text-4xl font-medium">
          Powered by AI, backed by science.
        </h2>
        <Button>Contact Sales</Button>
      </div>
      <div className="grid gap-x-24 gap-y-16 grid-cols-3">
        <div className="flex flex-col items-start">
          <div className="mb-[18px]">
            <img
              src={
                "https://uploads-ssl.webflow.com/60d686f300adb994e5b816f1/60f1f75b544f0f5bf3ec8120_Group%207038.png"
              }
              width="36px"
              height="42px"
              alt=""
            />
          </div>
          <div className="home-feature-content font-jakarta ">
            <h3 className="mb-2 text-xl font-semibold tracking-wide">
              Powerful
            </h3>
            <p className="paragraph home-feature text-gray-500 leading-7">
              We harness our state of the art neural engine developed from the
              ground up, built specifically to quantify people skills
            </p>
          </div>
        </div>
        <div className="flex flex-col items-start">
          <div className="mb-[18px]">
            <img
              src={
                "https://uploads-ssl.webflow.com/60d686f300adb994e5b816f1/60f1f782f83197bd92f8547a_Group%207039.png"
              }
              width="36px"
              height="42px"
              alt=""
            />
          </div>
          <div className="home-feature-content font-jakarta ">
            <h3 className="mb-2 text-xl font-semibold tracking-wide">
              Scalable
            </h3>
            <p className="paragraph home-feature text-gray-500  leading-7  ">
              We apply distributed computing techniques to process thousands of
              data points every minute, across the globe
            </p>
          </div>
        </div>
        <div className="flex flex-col items-start">
          <div className="mb-[18px]">
            <img
              src={
                "https://uploads-ssl.webflow.com/60d686f300adb994e5b816f1/60f1f7cbbe2dae39c65701f8_Group%207330.png"
              }
              width="36px"
              height="42px"
              alt=""
            />
          </div>
          <div className="home-feature-content font-jakarta ">
            <h3 className="mb-2 text-xl font-semibold tracking-wide">Secure</h3>
            <p className="paragraph home-feature text-gray-500  leading-7 ">
              We keep your data safe by encrypting all at-rest and in-transit
              connections with AES-256 and TLS
            </p>
          </div>
        </div>
        <div className="flex flex-col items-start">
          <div className="mb-[18px]">
            <img
              src={
                "https://uploads-ssl.webflow.com/60d686f300adb994e5b816f1/60f1f75b544f0f5bf3ec8120_Group%207038.png"
              }
              width="36px"
              height="42px"
              alt=""
            />
          </div>
          <div className="home-feature-content font-jakarta ">
            <h3 className="mb-2 text-xl font-semibold tracking-wide">
              Trusted
            </h3>
            <p className="paragraph home-feature text-gray-500  leading-7 ">
              We are proud partners with prestigious academic institutions like
              Mitacs and the University of Guelph
            </p>
          </div>
        </div>
        <div className="flex flex-col items-start">
          <div className="mb-[18px]">
            <img
              src={
                "https://uploads-ssl.webflow.com/60d686f300adb994e5b816f1/60f1f75b544f0f5bf3ec8120_Group%207038.png"
              }
              width="36px"
              height="42px"
              alt=""
            />
          </div>
          <div className="home-feature-content font-jakarta ">
            <h3 className="mb-2 text-xl font-semibold tracking-wide">
              Extendible
            </h3>
            <p className="paragraph home-feature text-gray-500  leading-7 ">
              We integrate with dozens of applications from productivity tools
              like Teams and Slack to HRIS systems like SAP SuccessFactors and
              more
            </p>
          </div>
        </div>
        <div className="flex flex-col items-start">
          <div className="mb-[18px]">
            <img
              src={
                "https://uploads-ssl.webflow.com/60d686f300adb994e5b816f1/60f1f75b544f0f5bf3ec8120_Group%207038.png"
              }
              width="36px"
              height="42px"
              alt=""
            />
          </div>
          <div className="home-feature-content font-jakarta ">
            <h3 className="mb-2 text-xl font-semibold tracking-wide">
              Compliant
            </h3>
            <p className="paragraph home-feature text-gray-500 leading-7">
              We are SOC2 II and GDPR compliant to anonymize all personal
              identifiable information and protect your privacy
            </p>
          </div>
        </div>
      </div>
    </Shell>
  );
};

export default Features;
