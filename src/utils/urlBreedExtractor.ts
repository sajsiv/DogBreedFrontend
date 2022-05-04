export default function urlBreedExtractor(endpoint: string) {
  const endpointArr = endpoint.split("/");
  return endpointArr[4];
}
