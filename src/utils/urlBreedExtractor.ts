export default function urlBreedExtractor(endpoint: string): string {
  const endpointArr = endpoint.split("/");
  return endpointArr[4];
}
