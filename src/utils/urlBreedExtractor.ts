export default function urlBreedExtractor(endpoint: string) {
  const endpointArr = endpoint.split("/");
  return endpointArr[4];
}

urlBreedExtractor(
  "https://images.dog.ceo/breeds/hound-english/n02089973_3055.jpg"
);
