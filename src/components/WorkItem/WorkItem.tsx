import React from "react";

interface WorkItemProps {
  title: string;
  link: string;
  description: string;
}

const WorkItem: React.FC<WorkItemProps> = ({ title, link, description }) => {
  return (
    <div
      className="p-4 border rounded-md shadow-md min-w-[300px] max-w-xs bg-red-100 hover:bg-red-200 hover:scale-105 transform transition-all duration-300"
    >
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <a href={link} className="text-blue-500 hover:underline mb-2 block">
        {link !== "not available" ? "Link" : "No Link Available"}
      </a>
      <p className="text-gray-700 overflow-hidden text-ellipsis whitespace-normal">
        {description}
      </p>
    </div>
  );
};

const workItems: WorkItemProps[] = [
  {
    title: "Anota2seq",
    link: "https://bioconductor.org/packages/release/bioc/html/anota2seq.html#:~:text=anota2seq%20provides%20analysis%20of%20translational,RNA%20sequencing%20or%20DNA-microarray.",
    description:
      "My contribution to Bioductor, the anota2seq package. My work was to implement the anota2seq package in R, which is a package that provides analysis of translational efficiency and differential translation from ribosome profiling data using Ribo-seq, RNA sequencing or DNA-microarray.",
  },
  {
    title: "My academic publications",
    link: "https://orcid.org/0000-0001-8913-6358",
    description:
      "My academic publications can be found on my ORCID profile. I have published several papers in the field of bioinformatics and cancer biology.",
  },
  {
    title: "This Website!",
    link: "https://github.com/ChrOertlin/personal-website",
    description:
      "This website is built using React and Tailwind CSS. The source code is available on my GitHub profile.",
  },
  {
    title: "My Raspberry Pi cluster",
    link: "not available",
    description:
      "I built a Raspberry Pi cluster to learn more about Kubernetes and container orchestration. The cluster consists of 2 Raspberry Pi 5's that host this website.",
  },
  {
    title: "More Items",
    link: "not available",
    description: "Additional content for testing scrolling behavior.",
  },
];

const Works: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen overflow-x-scroll w-1/2">
      <h2 className="font-serif font-bold text-red-600 mb-4">
        Here is what I have worked on or what I am working on
      </h2>
      <div className="w-full h-100 overflow-y-auto">
        <div className="flex space-x-4 p-4 flex-nowrap">
          {workItems.map((item, index) => (
            <WorkItem
              key={index}
              title={item.title}
              link={item.link}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Works;