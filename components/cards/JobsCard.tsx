import Image from "next/image";
import React from "react";

interface IProps {
  data: {
    job_title: string;
    job_description: string;
    job_city: string | null;
    job_state: string | null;
    job_country: string | null;
    job_min_salary: number | null;
    job_max_salary: number | null;
    job_salary_currency: string | null;
    employer_logo: string;
    job_employment_type: string;
    job_apply_link: string;
  };
}

const JobsCard: React.FC<IProps> = ({ data }) => {
  let location = "";

  if (data?.job_city) {
    location += data?.job_city;
  }

  if (data?.job_state) {
    location += location ? `, ${data?.job_state}` : data?.job_state;
  }
  if (data?.job_country) {
    location += location ? `, ${data?.job_country}` : data?.job_country;
  }

  return (
    <section className="background-light900_dark200 light-border shadow-light100_darknone flex flex-col items-start gap-6 rounded-lg border p-6 sm:flex-row sm:p-8">
      <div className="flex w-full justify-end sm:hidden">
        <div className="background-light800_dark400 flex items-center justify-end gap-2 rounded-2xl px-3 py-1.5">
          <Image
            width={16}
            height={16}
            alt="country symbol"
            className="rounded-full bg-transparent"
            src={`https://flagsapi.com/${data?.job_country}/flat/64.png`}
          />
          <p className="body-medium text-dark400_light700">{location}</p>
        </div>
      </div>
      <div className="flex items-center gap-6">
        {/* <Image
        alt="site-logo"
        width={64}
        height={64}
          className="rounded-[10px] bg-transparent"
          src={data?.employer_logo}
        /> */}
      </div>
      <div className="w-full">
        <div className="flex-between flex-wrap gap-2">
          <p className="base-semibold text-dark200_light900">
            {data?.job_title}
          </p>
          <div className="hidden sm:flex">
            <div className="background-light800_dark400 flex items-center justify-end gap-2 rounded-2xl px-3 py-1.5">
              {" "}
              <Image
                width={16}
                height={16}
                alt="country symbol"
                className="rounded-full bg-transparent"
                src={`https://flagsapi.com/${data?.job_country}/flat/64.png`}
              />
              <p className="body-medium text-dark400_light700">{location}</p>
            </div>
          </div>
        </div>
        <p className="body-regular text-dark500_light700  mt-2 line-clamp-2">
          {data?.job_description}
        </p>
        <div className="flex-between mt-8 flex-wrap gap-6">
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2">
              <Image
                alt="clock"
                width={20}
                height={20}
                src="/assets/icons/clock-2.svg"
                className="bg-transparent"
              />
              <p className="body-medium text-light-500">
                {data?.job_employment_type}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Image
                alt="dollar symbol"
                width={20}
                height={20}
                src="/assets/icons/currency-dollar-circle.svg"
                className="bg-transparent"
              />
              <p className="body-medium text-light-500">Not disclosed</p>
            </div>
          </div>
          <a
            target="_blank"
            className="flex items-center gap-2"
            href={data?.job_apply_link}
          >
            <p className="body-semibold primary-text-gradient">View job</p>
            <Image
              alt="arrow up right"
              width={20}
              height={20}
              src="/assets/icons/arrow-up-right.svg"
              className="bg-transparent"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default JobsCard;
