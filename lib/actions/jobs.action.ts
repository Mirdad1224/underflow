import { GetJobsParams } from "./shared.types";

export async function getJobsInfo(params: GetJobsParams) {
  try {
    const { page, filter = "India", searchQuery = "Web Developer" } = params;
    console.log("request paramas in actions", page, filter, searchQuery);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/jobs`,
      {
        method: "POST",
        body: JSON.stringify({ page, filter, searchQuery }),
      }
    );
    const responseData = await response.json();

    return responseData?.responseData?.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
