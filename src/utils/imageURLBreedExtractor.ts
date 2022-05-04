export default function imageURLBreedExtractor (imageURL: string) : string {
    const breedSubBreedString = "https://dog.ceo/api/breed/" + imageURL.split("/")[4].replace("-", "/") + "/images/random";
    return breedSubBreedString
}