import { useState } from "react";

import Card from "../Card/Card";

const details = [
  {
    title: "About Me",
    description:
      "Hello! I’m Dave, your dedicated sales representative here at Salesforce, and I’m thrilled to be working with you. I've had the privilege of being part of this amazing company for the past 3 years, where I've helped businesses like yours thrive by leveraging the power of Salesforce's innovative tools and solutions. I love my role because it allows me to connect with people, understand their unique business challenges, and provide tailored solutions that drive success. I was born and raised in Albany, New York, a place that will always hold a special place in my heart. However, for the past 10 years, I've called Santa Carla home, where I live with my wonderful wife, Tiffany, and our lively 4-year-old twin daughters, Emma and Ella. These two keep us on our toes and bring endless joy and laughter into our lives. They’re just starting school this year, which is an exciting milestone for our family. Mornings are quite the adventure in our household, which means my calendar is usually blocked between 9-10 AM to make sure they get off to a good start each day. Outside of work, I’m passionate about technology and its ability to transform businesses. I spend a lot of my free time exploring new advancements in the tech world and figuring out how they can benefit the clients I work with. I also enjoy outdoor activities, especially hiking and biking in the beautiful surroundings of Santa Carla. I find that these moments in nature provide a great balance to my busy work schedule and help keep me refreshed and focused. Whether it's taking a brisk walk on the beach or exploring a new trail with my family, I believe in maintaining a healthy work-life balance. This balance not only keeps me grounded but also ensures that I am always at my best, ready to meet your needs and help you make the most of what Salesforce has to offer.",
  },
  {
    title: "Experience",
    description:
      "Over the past 3 years, I’ve had the incredible opportunity to serve as a sales representative at Salesforce, where I’ve been at the forefront of helping businesses transform their operations and reach new heights of success. My journey here has been nothing short of rewarding, as I’ve been able to utilize Salesforce’s cutting-edge CRM solutions to address a wide array of challenges faced by companies across different industries. Whether it's streamlining sales processes, enhancing customer engagement, or optimizing team productivity, I’ve consistently worked to tailor our solutions to meet the unique needs of each client.Before joining Salesforce, I gained valuable experience during my 5-year tenure at XYZ Corp. There, I sharpened my skills in client relationship management, digital transformation, and strategic planning. I played a key role in implementing large-scale projects that helped clients transition from outdated systems to modern, cloud-based platforms. This experience provided me with a deep understanding of the intricacies involved in driving digital change, which I now bring to my role at Salesforce. My background in both direct sales and technology solutions has equipped me with a well-rounded perspective, enabling me to guide clients effectively through their digital journeys.Throughout my career, I’ve always been driven by a passion for understanding the unique challenges that businesses face and finding the most effective ways to address them. I believe that success in sales is not just about closing deals but about building long-lasting relationships based on trust, transparency, and a genuine commitment to helping clients succeed. I’m proud of the relationships I’ve built over the years, and I look forward to continuing to make a positive impact through my work at Salesforce.",
  },
  {
    title: "Recommended",
    description:
      "Drawing from my extensive experience and deep knowledge of Salesforce’s capabilities, I’m excited to share some recommendations that could significantly benefit your business. For companies looking to take their sales processes to the next level, I highly recommend exploring Salesforce’s Sales Cloud. This powerful platform offers a comprehensive suite of tools designed to optimize every aspect of the sales cycle. From advanced analytics that provide actionable insights to customizable dashboards that allow you to monitor performance in real-time, Sales Cloud equips your team with everything they need to close deals more efficiently and drive revenue growth.But the benefits don’t stop there. If you’re aiming to enhance your marketing efforts and foster stronger customer relationships, Salesforce’s Marketing Cloud is an excellent choice. This platform enables you to create personalized, data-driven marketing campaigns that resonate with your audience and boost customer engagement. With features like journey mapping, email marketing, social media integration, and detailed analytics, Marketing Cloud empowers you to deliver the right message to the right person at the right time, leading to increased customer loyalty and higher conversion rates.For businesses focused on customer service excellence, I recommend exploring our Service Cloud. This solution provides a unified platform where your customer service team can manage and resolve customer issues quickly and efficiently. With AI-driven automation, omnichannel support, and detailed reporting tools, Service Cloud ensures that your customers receive top-notch service every time, leading to higher satisfaction and retention rates. No matter your specific goals, Salesforce offers a robust suite of solutions that can be tailored to meet your business’s unique needs and help you achieve lasting success.",
  },
];

const Tab = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Card>
      <div className="flex bg-[#171717] gap-1 items-center justify-center self-stretch rounded-2xl">
        {details.map((detail, idx) => (
          <div
            key={idx}
            onClick={() => setActiveTab(idx)}
            className={`flex py-3 px-6 justify-center items-center flex-grow rounded-2xl cursor-pointer text-[#A4ADB2] hover:bg-[#3c3e47] hover:text-white transition-all duration-300 ${
              activeTab === idx
                ? "bg-[#28292F] shadow-custom-shadow text-white"
                : ""
            }`}
          >
            <p className=" text-center text-base font-medium not-italic ">
              {detail.title}
            </p>
          </div>
        ))}
      </div>
      <p className="text-[#969696] text-lg overflow-y-scroll pr-4 custom-scrollbar">
        {details[activeTab].description}
      </p>
    </Card>
  );
};

export default Tab;
