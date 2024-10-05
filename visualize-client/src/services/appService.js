export const fetchStudyData = async (studyId) => {
  const response = await fetch(
    `http://127.0.0.1:5000/fetch-study-data?studyId=${studyId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch study data");
  }

  return await response.json();
};
