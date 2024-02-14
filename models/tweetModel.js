class Tweet {
  constructor(id, content, name, image, userId) {
    this.id = id;
    this.userId = userId; 
    this.content = content;
    this.name = name;
    this.image = image;
    this.url ="https://via.placeholder.com/600/92c952";
    this.thumbnailsUrl = "https://via.placeholder.com/150/92c952";
    this.like  = 15;
    this.repost = 20;
  
 }
}


const tweets = [
  {id:1, name:'Paulus', user:'Ndandale', password:'Paulusn@'},
  {id:2, name:'Bulani', user:'Bulani16', password:'Bulani@'},
  {id:3, name:'Kagiso', user:'Kagisa', password:'Kagisa@'}
];

module.exports = {
  Tweet,
  tweets
};
