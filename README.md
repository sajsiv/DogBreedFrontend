# Team C4B3 - Project

Deployed Front-end: https://saj-zeri-patelman-dogvotes.netlify.app/   
Deployed Back-end: https://dog-breed-voting-backend-c4b3.herokuapp.com/dogs   
Architecture diagram: https://whimsical.com/full-architechture-diagram-Gy2fqPv3hM3RGan49fgLwo   
Project Board - FE: https://github.com/sajsiv/DogBreedFrontend/projects/1   
Repo (Back-end): https://github.com/roshnihpatel/Dog-Breed-Voting-Backend   
Repo (Front-end): https://github.com/sajsiv/DogBreedFrontend
UI Wireframe: https://whimsical.com/MD5VAUP2LUayKFLuZAbuf5    
Team: Anna-Zeri, Owen Dearman, Roshni Patel, Sajjan Sivia   

# Documentation

### UI Wireframe

[https://whimsical.com/MD5VAUP2LUayKFLuZAbuf5](https://whimsical.com/MD5VAUP2LUayKFLuZAbuf5)

### Technologies Used:

| Typescript | frontend and backend |
| --- | --- |
| React | frontend |
| Express | backend |
| Heroku | backend |
| Netlify | frontend |
| GitHub | frontend and backend |
| axios | frontend (making requests to backend) |
| Postgres | Database software |
| SQL | Database language |
| BeeKeeper | Database software |

### Database Schema:

![dogsdb-QuickDBD-export.png](Team%20C4B3%20-%20Project%209956e929ad6c4b238d58338014f6b229/dogsdb-QuickDBD-export.png)

**Problems Journal**

1. Problem with upvote put request 
    
    details: some of the upvotes werenâ€™t sending into the database after dog name clicked
    
    resolution: missing await for preceding requests so would sometimes run before response received from earlier req
    
2. Problem React child cannot be an object error
details: Problem accessing image URL from fetch from within the .map function for adding images for top 3 dogs. Async operations within map functions.
    
    resolution: resolved by combining getImageUrl with getTop10 and adding image prop to dog data object 
    
3. Issues with fetching new top 3 image when clicked
    
    details: possible lack of communication between pairs regarding completed code that would be useful for this task. Getting type errors when trying to write a function to fetch new image for one of the top 3 dogs in the leaderboard.
    
    resolution: pair familiar with completed leaderboard code refactored a function to fetch new image for one dog as opposed to all three and integrated into leaderboard component with re-rendering trigger.
    
4. Heroku timeout on initial post request of empty array
    
    details: 503 error on deployed app 30 seconds after refresh due to Heroku timing out on post request of {breedNames: []} before fetch request has completed.
    
    resolution: if-statement in frontend app before post requests to check whether breedNames is an empty array. If it is, then do not send the post request. Acknowledgement from team that this is a superficial fix - if {breedNames:[]} is manually sent, it will timeout again.
    

### API Documentation

| endpoints | description | req body example | res body example |
| --- | --- | --- | --- |
| GET /dogs | reads all the breeds form dogs table | no body | [{"breed":"dachshund"},{"breed":"beagle"},{"breed":"briard"},{"breed":"woofer"},{"breed":"pekinese"},{"breed":"terrier-kerryblue"}...] |
| GET / topten | reads the data of the top 10 rows from dogs table ordered by votes (desc) | no body | [{"id":52,"votes":15,"breed":"dingo"},{"id":68,"votes":12,"breed":"labradoodle"},{"id":185,"votes":9,"breed":"corgi-cardigan"},{"id":53,"votes":8,"breed":"bulldog-french"}...] |
| POST /  | creates a new entry of the breeds displayed on the app if they do not exist in dogs table | { breedNames: [ 'kelpie', 'corgi-cardigan' ] } | {"success":true,"data":["kelpie","corgi-cardigan"]} |
| PUT /  | increments votes count by one of a breed in dogs table | {"breedName": "havanese" } | {"success":true,"data":[{"id":234,"votes":6,"breed":"havanese"}]} |
|  |  |  |  |

### Architecture diagram

[https://whimsical.com/Gy2fqPv3hM3RGan49fgLwo](https://whimsical.com/Gy2fqPv3hM3RGan49fgLwo)

### CSS container diagram

![Untitled](Team%20C4B3%20-%20Project%209956e929ad6c4b238d58338014f6b229/Untitled.png)

![Untitled](Team%20C4B3%20-%20Project%209956e929ad6c4b238d58338014f6b229/Untitled%201.png)

![Untitled](Team%20C4B3%20-%20Project%209956e929ad6c4b238d58338014f6b229/Untitled%202.png)
