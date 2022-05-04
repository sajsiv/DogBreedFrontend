import breedDisplay from './breedDisplay' 

test('it should take a string of breed-subreed and return a new string as Subreed breed ', () => { 
    expect(breedDisplay('hound-english')).toEqual('English Hound') 
    expect(breedDisplay('shepard-shetland')).toEqual('Shetland Shepard')
    expect(breedDisplay('terrier-austrailian')).toEqual('Austrailian Terrier')
    expect(breedDisplay('pug')).toEqual('Pug')

    })

