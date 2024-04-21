test("Live: GET @ /api/systems/alchemy", async () => {
  const reponse = await fetch(`https://dndsuite.zue.dev/api/systems/alchemy`);
  const systemInfo = await reponse.json();

  const expectedKeys = ["name", "description", "version", "emoji"];

  expect(Object.keys(systemInfo)).toEqual(expectedKeys);
});
