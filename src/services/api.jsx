export const fetchData = async (endpoint) => {
  const response = await fetch(endpoint, {
    headers: { Authorization: "Basic " + btoa("trial:assignment123") },
  });
  if (!response.ok) throw new Error("Failed to fetch data");
  return response.json();
};
