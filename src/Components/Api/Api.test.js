import Api from './Api.js';

  test('Api by passing a valid input', async () => {
    const response = await Api("elephant");
    expect(response.status).toBe(200);
    expect(response.statusText).toBe("OK");
    expect(response.url).toBe("https://api.giphy.com/v1/gifs/search?api_key=GZKGwdu6xlIM0iV58yFKJOFLqj0NLXFw&q=%22elephant%22");
    const responseObject = await response.json();
    const noOfImages = responseObject.pagination.count;
    expect(noOfImages).toBe(50);
  });
  
  test('Api fetch failure by passing empty string', async () => {
    const response = await Api("");
    expect(response.status).toBe(200);
    expect(response.statusText).toBe("OK");
    expect(response.url).toBe("https://api.giphy.com/v1/gifs/search?api_key=GZKGwdu6xlIM0iV58yFKJOFLqj0NLXFw&q=%22%22");
    const responseObject = await response.json();
    const noOfImages = responseObject.pagination.count;
    expect(noOfImages).toBe(0);
  });

  test('Api fetch failure by passing undefined', async () => {
    const response = await Api(undefined);
    expect(response.status).toBe(200);
    expect(response.statusText).toBe("OK");
    expect(response.url).toBe("https://api.giphy.com/v1/gifs/search?api_key=GZKGwdu6xlIM0iV58yFKJOFLqj0NLXFw&q=%22undefined%22");
    const responseObject = await response.json();
    const noOfImages = responseObject.pagination.count;
    expect(noOfImages).toBe(20);
  });

  test('Api fetch failure by passing null', async () => {
    const response = await Api(null);
    expect(response.status).toBe(200);
    expect(response.statusText).toBe("OK");
    expect(response.url).toBe("https://api.giphy.com/v1/gifs/search?api_key=GZKGwdu6xlIM0iV58yFKJOFLqj0NLXFw&q=%22null%22");
    const responseObject = await response.json();
    const noOfImages = responseObject.pagination.count;
    expect(noOfImages).toBe(50);
  });