import urlBreedExtractor from "./urlBreedExtractor";

test("greet returns a string, greeting the passed name", () => {
  expect(
    urlBreedExtractor(
      "https://images.dog.ceo/breeds/hound-english/n02089973_3055.jpg"
    )
  ).toBe("hound-english");
});
