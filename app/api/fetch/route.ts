// pages/api/fetch/route.ts

import offplanProjects from "@/data/offplan";
import { NextApiRequest, NextApiResponse } from "next";


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

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Get the page and limit from the query parameters
  const { page = 1, limit = 10 } = req.query;

  // Convert to numbers (the query params are strings by default)
  const pageNumber = parseInt(page as string, 10);
  const limitNumber = parseInt(limit as string, 10);

  // Calculate the starting index of the items to fetch
  const startIndex = (pageNumber - 1) * limitNumber;
  
  // Slice the data to get only the current page items
  const paginatedData = offplanProjects.slice(startIndex, startIndex + limitNumber);

  // Calculate total number of pages
  const totalItems = offplanProjects.length;
  const totalPages = Math.ceil(totalItems / limitNumber);

  // Return the paginated data along with the pagination info
  res.status(200).json({
    data: paginatedData,
    pagination: {
      currentPage: pageNumber,
      totalPages,
      totalItems,
    },
  });
}