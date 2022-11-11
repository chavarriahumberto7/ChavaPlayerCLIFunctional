/**
 * Define and export the dummy data.
 */




export const Playlists=[
  {
    id:'001',
    name: 'Stargroves',
    songs:20,
    artwork: require('../../Assets/images/thumb_1.png')
  },
  {
    id:'002',
    name: 'So it goes',
    songs:5,
    artwork: require('../../Assets/images/thumb_2.png')
  },
  {
    id:'003',
    name: 'PlayList 3',
    songs:20,
    artwork: require('../../Assets/images/thumb_1.png')
  },
  {
    id:'004',
    name: 'PlayList 4',
    songs:5,
    artwork: require('../../Assets/images/thumb_2.png')
  },

];

export const Favorites=[
  {
    id:'001',
    url:require('../../Assets/Music/VoyAEntregar.mp3'),
    title:'Voy a entregar mi corazon',
    album:'Great Album',
    artist:'Pablo Olivares',
    artwork:require('../../Assets/images/musicImages/PabloO.jpg')
  },
  {
    id:'002',
    url:require('../../Assets/Music/YoQuieroMasDeTi.mp3'),
    title:'Yo quiero mas De ti',
    album:'Jaime Murrel Album',
    artist:'Jaime Murrel',
    artwork:require('../../Assets/images/musicImages/JaimeM.jpg')
  },
  {
    id:'003',
    url:'',
    title:'King & Queen',
    album:'Ava Max Album',
    artist:'Ava Max',
    artwork:require('../../Assets/images/thumb_3.png')
  },
]
const dummyData = {Favorites,Playlists };



export default dummyData;
