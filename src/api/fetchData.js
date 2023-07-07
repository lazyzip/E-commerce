async function fetchData(API_URL, entityName) {
  const res = await fetch(`${API_URL}/${entityName}/?offset=0&limit=10`);
  const json = await res.json();
  if (json.error) {
    throw new Error(json.error);
  }

  return json;
}

export default fetchData;
