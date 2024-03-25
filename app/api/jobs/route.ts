import { NextResponse } from "next/server";
import axios from "axios";

export const POST = async (request: Request) => {
  const { searchQuery, filter, page } = await request.json();
  try {
    console.log("request paramas---->", searchQuery, filter, page);
    const options = {
      method: "GET",
      url: "https://jsearch.p.rapidapi.com/search",
      params: {
        query: searchQuery + " in " + filter,
      },
      headers: {
        "X-RapidAPI-Key": "24070ddb94msh8125f7539be8349p15e5f4jsnf52012de3bc7",
        "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
      },
    };
    const response = await axios.request(options);

    const responseData = response?.data;

    return NextResponse.json({ responseData });
  } catch (error: any) {
    console.log("Rapid API error", error);
    return NextResponse.json({ error: error.message });
  }
};
