test("Live: /middleware-test", async () => {
  const reponse = await fetch(`https://dndsuite.zue.dev/middleware-test`);
  const systemInfo = await reponse.json();

  expect(systemInfo).toEqual({ message: "Middleware works!" });
});
