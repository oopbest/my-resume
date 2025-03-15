import React from "react";
import { MdWork } from "react-icons/md";
import { TfiLocationPin } from "react-icons/tfi";
import PersonalProject from "./PersonalProject";

const WorksExperience = () => {
  return (
    <section className="mb-6">
      <PersonalProject />

      {/* Works Experience */}
      <h2 className="flex gap-2 items-center text-2xl font-semibold border-b-2 border-gray-300 pb-2">
        <MdWork color="brown" /> Work Experience
      </h2>

      {/* Topvalue Corporate Ltd. */}
      <div className="mt-4">
        <h3 className="text-2xl font-bold pb-2">Topvalue Corporate Ltd.</h3>
        <p className="font-bold">
          Full Stack Developer | Sep 2017 - 5 Jan 2025 ( 7 Years 5 Months )
        </p>
        <p className="flex flex-row items-center gap-2 text-gray-600">
          {" "}
          <TfiLocationPin color="red" />
          Bangkok, Thailand
        </p>

        {/* Responsibilities */}
        <ul className="list-disc ml-6 my-3">
          <li>
            Designed, developed and maintained software solutions using Next.js,
            React, Redux, Redux Toolkit, Typescript, Javascript, Bootstrap,
            Tailwind CSS, RESTful APIs, PHP, MySQL, Magento1, Magento2 and other
            tech Stacksnologies.
          </li>
          <li>
            Managed project timelines and priorities, ensuring alignment with
            business objectives.
          </li>
          <li>
            Developed and maintained <strong>e-commerce platforms</strong> using{" "}
            <strong>Next.js 12, TypeScript, Magento 2</strong>
          </li>
          <li>
            Led migration from <strong>Magento 1 to Magento 2</strong>,
            improving performance and scalability
          </li>
          <li>
            Integrated <strong>payment gateways</strong> (2C2P, Omise, Direct
            Bank Payment)
          </li>
          <li>
            Built a <strong>real-time admin dashboard</strong> with React,
            Laravel, and Firebase
          </li>
          <li>
            Collaborated with <strong>outsourced teams</strong> to develop
            hybrid mobile applications
          </li>
          <li>
            Implemented <strong>CI/CD pipelines</strong> with GitHub Actions,
            reducing deployment time by 50%
          </li>
        </ul>

        {/* Key Projects */}
        <h3 className="font-bold">Key Projects:</h3>
        <ul className="list-disc ml-6">
          <li>
            <strong>Topvalue Housebrand Websites</strong> (Switchflex, Altec,
            Alectric, Namiko, Cocugu, Fennix)
            <ul className="list-disc ml-6">
              <li>
                Tech Stacks: Next.js 14, TypeScript, Tailwind CSS, PHP (Magento
                2), MySQL
              </li>
            </ul>
          </li>
          <li>
            <strong>E-commerce website - topvalue.com</strong> (Electronics)
            <ul className="list-disc ml-6">
              <li>
                Tech Stacks: Next.js 12, Redux Toolkit, NextAuth.js, PHP
                (Magento 2), MySQL, Google Cloud Platform
              </li>
            </ul>
          </li>
          <li>
            <strong>CJ Easy Shopping</strong>
            <ul className="list-disc ml-6">
              <li>Tech Stacks: React, Bootstrap, PHP (Magento 2), MySQL</li>
            </ul>
          </li>
          <li>
            <strong>
              Dashboard Realtime Monitoring, Promotions Report can be
              Import,Export (First React Project)
            </strong>
            <ul className="list-disc ml-6">
              <li>Tech Stacks: React, Bootstrap, Laravel, Firebase</li>
            </ul>
          </li>
          <li>
            <strong>POS System (Offline store management)</strong>
            <ul className="list-disc ml-6">
              <li>Tech Stacks: PHP (Magento 2), MySQL, Docker</li>
            </ul>
          </li>
          <li>
            <strong>E-commerce website - topcosme.com</strong> (Cosmetics &
            Beauty)
            <ul className="list-disc ml-6">
              <li>Tech Stacks: PHP (Magento 1), MySQL</li>
            </ul>
          </li>
          <li>
            <strong>
              Integrated Payment Gateway e.g., 2C2P API, Omise API
            </strong>
            <ul className="list-disc ml-6">
              <li>Topvalue v.2 Magento2 (Omise)</li>
              <li>Topvalue v.1 Magento1 (2c2p)</li>
            </ul>
          </li>
          <li>
            <strong>
              Integrated Direct Bank Payment Gateway and installment payment (
              e.g., TBANK, KBANK, SCB, BAY, BBL )
            </strong>
          </li>
          <li>
            <strong>
              Developed and Integreated modules for Magento 1, Magento 2
            </strong>
            <ul className="list-disc ml-6">
              <li>Tech Stacks: PHP (Magento 1, 2), MySQL</li>
            </ul>
          </li>
        </ul>
      </div>

      {/* iBusiness Corporation */}
      <div className="mt-4">
        <h3 className="text-2xl font-bold pb-2">
          iBusiness Corporation Co., Ltd.
        </h3>
        <p className="font-bold">
          PHP Developer | June 2013 - Aug 2017 ( 4 Years 3 Months )
        </p>
        <p className="flex flex-row items-center gap-2 text-gray-600">
          {" "}
          <TfiLocationPin color="red" />
          Bangkok, Thailand
        </p>

        {/* Responsibilities */}
        <ul className="list-disc ml-6 my-4">
          <li>
            Designed, developed, and deployed web applications for clients using
            various tech Stacksnologies, including using PHP, MySQL, HTML, CSS,
            Javascript, jQuery, Ajax, SOAP, XML, Bootstrap and responsive
            design.
          </li>
          <li>
            Managed project timelines and priorities, ensuring delivery on-time.
          </li>
        </ul>
        <h3 className="font-bold">Key Projects:</h3>
        <ul className="list-disc ml-6">
          <li>
            <li>
              Developed custom CMS, e-commerce websites, and booking systems
              using PHP, MySQL
            </li>
            <li>
              Built HR payroll systems for generating salary slips and employee
              management
            </li>
            <li>
              Integrated SOAP & REST APIs for various enterprise solutions
            </li>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default WorksExperience;
