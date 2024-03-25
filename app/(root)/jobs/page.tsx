import JobsCard from "@/components/cards/JobsCard";
import Filter from "@/components/shared/Filter";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import { CountriesFilters } from "@/constants/filters";
import { getJobsInfo } from "@/lib/actions/jobs.action";
import { SearchParamsProps } from "@/types";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jobs | Dev overflow",
};

const Page = async ({ searchParams }: SearchParamsProps) => {
  const result = await getJobsInfo({
    searchQuery: searchParams.q,
    filter: searchParams.filter,
    page: searchParams.page ? +searchParams.page : 1,
  });
  // console.log("results--->", result[0]);
  return (
    <>
      <h1 className="h1-bold text-dark100_light900">Jobs</h1>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar
          route="/jobs"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Job Title, Company, or Keywords"
          otherClasses="flex-1"
        />

        <Filter
          filters={CountriesFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          placeholder="Select a Location"
        />
      </div>
      <section className="light-border mb-9 mt-11 flex flex-col gap-9 border-b pb-9">
        {result.length !== 0 ? (
          result?.map((item: any, idx: any) => (
            <JobsCard key={idx} data={item} />
          ))
        ) : (
          <p>
            Oops, No jobs found matching your criteria, try different location
            or keyword!!
          </p>
        )}
        {}
      </section>
      <div className="mt-10">
        {/* <Pagination
          pageNumber={searchParams?.page ? +searchParams.page : 1}
          isNext={result?.isNext}
        /> */}
      </div>
    </>
  );
};

export default Page;
