// pages/api/fetch/route.ts

import offplanProjects from "@/data/offplan";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from 'next/server';


type OffplanProject = {
  id: number;
  type: string;
  title: string;
  slug: string;
  price_range: string;
  location: string;
  latitude: string;
  longitude: string;
  bedrooms: string;
  bathrooms: string;
  size_range: string;
  handover_date: string;
  developer: string;
  cover_image: string;
};

export async function GET(request: NextRequest) {
  // Get the page and limit from the query parameters
  const { searchParams } = new URL(request.url);
  const page = searchParams.get('page') || '1';
  const limit = searchParams.get('limit') || '10';

  // Convert to numbers
  const pageNumber = parseInt(page, 10);
  const limitNumber = parseInt(limit, 10);

  // Calculate the starting index of the items to fetch
  const startIndex = (pageNumber - 1) * limitNumber;

  // Slice the data to get only the current page items
  const paginatedData = offplanProjects.slice(startIndex, startIndex + limitNumber);

  // Calculate total number of pages
  const totalItems = offplanProjects.length;
  const totalPages = Math.ceil(totalItems / limitNumber);

  // Return the paginated data along with the pagination info
  return NextResponse.json({
    data: paginatedData,
    pagination: {
      currentPage: pageNumber,
      totalPages,
      totalItems,
    },
  });
}