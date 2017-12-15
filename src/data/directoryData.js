const DirectoryData = 
{    
    
 dropData: ['Columbus Buddy Walk Update', 'Team Amber', 'Columbus Buddy Walk Event', 'Stride'],
    
 users :[
    {
        "id": 1,
        'Name': 'Tom Hiddleston',
        'phone': '614-619-7449',
        'Team': 'Team Alex'
    },
    {
        "id": 2,
        'Name': 'Ben Cumberbatc',
        'phone': '418-545-3433',
        'Team': 'Team Amber'
    },
    {
        "id": 3,
        'Name': 'Tom Hiddleston',
        'phone': '614-574-3432',
        'Team': 'Team Stride'
    },
    {
        "id": 4,
        'Name': 'Amber Malone',
        'phone': '614-619-7449',
        'Team': 'Team Alex'
    },
    {
        "id": 5,
        'Name': 'Tom Hiddleston',
        'phone': '614-894-3432',
        'Team': 'Team Amber'
    },
    {
        "id": 6,
        'Name': 'Ben Cumberbatc',
        'phone': '614-544-4532',
        'Team': 'Team Alex'
    },
    {
        "id": 7,
        'Name': 'Kayla Malone',
        'phone': '614-382-3234',
        'Team': 'Team Stride'
    },
    {
        "id": 8,
        'Name': 'Amber Malone',
        'phone': '614-241-2342',
        'Team': 'Team Alex'
    },

    {
        "id": 9,
        'Name': 'Ben Cumberbatc',
        'phone': '614-130-2932',
        'Team': 'Team Amber'
    },
    {
        "id": 10,
        'Name': 'Kayla Malone',
        'phone': '614-030-3432',
        'Team': 'Team Alex'
    },
    {
        "id": 11,
        'Name': 'Amber Malone',
        'phone': '614-300-3423',
        'Team': 'Team Amber'
    },
    {
        "id": 12,
        'Name': 'Kayla Malone',
        'phone': '614-300-3423',
        'Team': 'Team Amber'
    },
    {
        "id": 13,
        'Name': 'Ben Cumberbatc',
        'phone': '614-300-3423',
        'Team': 'Team Alex' 
    },
    {
        "id": 14,
        'Name': 'Amber Malone',
        'phone': '614-300-3423',
        'Team': 'Team Stride'
    },
    {
        "id": 15,
        'Name': 'Kayla Malone',
        'phone': '614-300-3423',
        'Team': 'Team Alex' 
    },
    {
        "id": 16,
        'Name': 'Amber Malone',
        'phone': '614-300-3423',
        'Team': 'Team Stride'
    },
    {
        "id": 17,
        'Name': 'Ben Cumberbatc',
        'phone': '614-300-3423',
        'Team': 'Team Amber'
    },
    {
        "id": 18,
        'Name': 'Kayla Malone',
        'phone': '614-300-3423',
        'Team': 'Team Stride'
    },
        ],
   }
  
   getDirectoryData = () => {
    return new Promise((resolve, reject) => {
        if(DirectoryData){
            resolve(DirectoryData);
          } else {
            reject("error");
          };
      });
  }

    export default getDirectoryData;
  
