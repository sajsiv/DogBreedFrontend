export default function breedDisplay(breed: string): string {
  const breedArr = breed.split("-");
  for (let i = 0; i < breedArr.length; i++) {
    breedArr[i] =
      breedArr[i].charAt(0).toUpperCase() + breedArr[i].substring(1);
  }
  return breedArr.reverse().join(" ");
}
