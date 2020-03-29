 const Order_Data = [
    {
     id:1,
     title:'Breakfast',
     routeName:'breakfast',
     items:[
         {
             id: 1,
             name:'Dosa',
             imageUrl:'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcdn-image.myrecipes.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2Ffield%25252Fimage%25252Ftemple-canteen-hero-11.jpg%3Fitok%3DRJ3-To_y&w=450&c=sc&poi=face&q=85',
             price:40
            },
         {
             id:2,
             name:'Idly',
             imageUrl:'https://thumbs.dreamstime.com/b/south-indian-business-breakfast-rava-idli-coffee-kanjivaram-83342104.jpg',
             price:30 
                    },
         {
             id:3,
             name:'Poori',
             imageUrl:'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcdn-image.myrecipes.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2Ffield%25252Fimage%25252Fgettyimages-531941334.jpg%3Fitok%3D4KY0Q0mU&w=450&c=sc&poi=face&q=85' ,
             price:60
         }
     ]
    },
    {
        id:2,
        title:'Lunch',
        routeName:'lunch',
        items:[
            {
                id: 4,
                name:'veg meals',
                imageUrl:'https://3.imimg.com/data3/NX/GF/MY-9178041/veg-meal-250x250.png',
                price:120
            },
            {
                id:5,
                name:'veg fried rice',
                imageUrl:'https://i.ytimg.com/vi/Fpl3qy4g5OA/maxresdefault.jpg',
                price:150
            },
            {
                id:6,
                name:'panner biriyani',
                imageUrl:'https://pull-revisfoodography.netdna-ssl.com/wp-content/uploads/2017/01/paneer-biryani-1.jpg',
                price:150 
             }
        ]
       },
       {
        id:1,
        title:'Dinner',
        routeName:'dinner',
        items:[
            {
                id: 7,
                name:'parrotta',
                imageUrl:'https://i.ndtvimg.com/i/2015-06/parotta_625x350_71434518592.jpg',
                price:40
            },
            {
                id:8,
                name:'chappathi',
                imageUrl:'https://t3.ftcdn.net/jpg/02/65/60/42/240_F_265604298_OcUUyxfCQiNAw6Ep59LdC1Fpu3gwvKC9.jpg',
                price:30
            },
            {
                id:9,
                name:'Poori',
                imageUrl:'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcdn-image.myrecipes.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2Ffield%25252Fimage%25252Fgettyimages-531941334.jpg%3Fitok%3D4KY0Q0mU&w=450&c=sc&poi=face&q=85',
                price:60
            }
        ]
       }
]

export default Order_Data;