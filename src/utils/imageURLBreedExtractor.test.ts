import imageURLBreedExtractor from './imageURLBreedExtractor'

test("greet returns a string, greeting the passed name", () => {
    expect(
        imageURLBreedExtractor(
        "https://images.dog.ceo/breeds/retriever-flatcoated/n02099267_5306.jpg"
      )
    ).toBe("https://dog.ceo/api/breed/retriever/flatcoated/images/random");
    expect(
        imageURLBreedExtractor(
            "https://images.dog.ceo/breeds/retriever/n02099267_5306.jpg"
        )
    ).toBe("https://dog.ceo/api/breed/retriever/images/random")
  });
