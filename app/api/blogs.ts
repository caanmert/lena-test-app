const BASE_URL = "https://www.lenasoftware.com/api/v1/en/maestro/";

export const fetchBlogsByPage = async (pageNumber: number) => {
  const response = await fetch(BASE_URL + pageNumber);
  const data = await response.json();
  return data;
};
