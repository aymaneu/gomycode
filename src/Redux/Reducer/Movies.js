import { movie } from "../../modals/Movie";
import {ADD_MOVIE} from "../action/types"
import {DELETE_MOVIE} from "../action/types"
import {EDIT_MOVIE} from "../action/types"
import {FILTER_MOVIE} from "../action/types"


const FirstListMovies = [

    new movie(1, "Bleach",  "https://cdn11.bigcommerce.com/s-etaxb7aidf/images/stencil/1280x1280/products/3105/6834/DP4524-Bleach-2-__76114.1588885684.jpg?c=1", "Bleach follows the adventures of the hotheaded teenager Ichigo Kurosaki, who inherits his parents' destiny after he obtains the powers of a Soul Reaper—a death personification similar to the Grim Reaper—from another Soul Reaper, Rukia Kuchiki.", 7 ,
  "05 October 2004",
     ["adventure", "Supernatural"],
   ["Johnny Yong Bosch", "Stephanie Sheh","Yuri Lowenthal"],
    "https://www.youtube.com/watch?v=5osSMmB1zVA"),

    new movie( 2,
       "shuumatsu no valkyrie",
       
          "https://i.pinimg.com/474x/f4/3f/92/f43f92804316133061e578d0ef0c27cb.jpg",
       "Record of Ragnarok, also known as Shūmatsu no Walküre 終末のワルキューレ, Shūmatsu no Warukyūre, lit. “Valkyrie of the End”, is a Japanese manga series written by Shinya Umemura and Takumi Fukui and illustrated by Ajichika. The story begins when the gods call a conference to decide the whether to let humanity live or die, and settle on destroying humanity.", 8 ,
         "25 November 2017",
       ["adventure","Action","Supernatural"],
        ["Lü Bu", " Kazuhiro Yamaji"," Soma Saito"],
       "https://www.youtube.com/embed/XImWUxxUiCo",),


       new movie(
         3,
       "Jujutsu Kaizen",
       
          "https://fr.web.img3.acsta.net/pictures/20/09/14/10/31/4875617.jpg",
        "The story follows high school student Yuji Itadori as he joins a secret organization of Jujutsu Sorcerers in order to kill a powerful Curse named Ryomen Sukuna, of whom Yuji becomes the host.", 6 ,
        "20 October 2020",
        ["Dark Fantasy","Magie"],
         ["Yūichi Nakamura", "Kenjiro Tsuda","Junya Enoki"],
         "https://www.youtube.com/watch?v=pkKu9hLT-t8")
      ,
    
     new movie(
        4,
        "Shamn King",
        
          "https://fr.techtribune.net/wp-content/uploads/2021/08/shaman-king-2021-anime-shaman-fight-poster-1278399-1280x0.jpeg",
       "The plot of Shaman King revolves around Yoh Asakura, a shaman, a medium between the worlds of the living and the dead. ... After Yoh and his friends overcome the ten Patch Tribe members, Hao is awakened as the new Shaman King. He defeats Yoh and all his friends and absorbs their souls.", 8 ,
       "01 April 2021",
       ["adventure","Supernatural fiction","Action"],
       ["Megumi Hayashibara", "Masahiko Tanaka","Minami Takayama"],
          "https://www.youtube.com/watch?v=rV8RZrZskdk"),
    
      new movie(
        5,
       "Pandora Hearts",
       
          "https://ae01.alicdn.com/kf/HTB1ixIfNVXXXXc0XXXXq6xXFXXXz/Home-Decoration-Pandora-Hearts-Anime-Oz-90-60CM-Wall-Scroll-Poster-29883.jpg",
         "It is about a young aristocrat named Oz Bezarius, the heir of a noble house, who becomes the victim of a dark ceremony in the first episode and is cast down into the Abyss - a prison like area inhabited by monsters called Chains. While there, he meets the Chain known as Alice, the Black Rabbit.", 7 ,
        "2 avril 2009",
      ["adventure","Romance","Drama"],
      ["", "naima"],
        "https://www.youtube.com/watch?v=9Psc_hBkOoc"),

      new movie(
        6,
       "Promised Neverland",
       
          "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/9aa510ecc8177c3061392648714e3e6d98aa87776c1ab406358031fa6ab58f56._RI_V_TTW_.jpg",
         "When three gifted kids at an isolated idyllic orphanage discover the secret and sinister purpose they were raised for, they look for a way to escape from their evil caretaker and lead the other children in a risky escape plan. ... No child is ever overlooked, especially since they are all adopted by the age of 12.", 8 ,
        "10 january 2019",
        ["Science-fiction", "Aventure", "Thriller"],
         ["Mariya Ise", "Maaya Uchida","shinei ueki"],
        "")

]


export const MovieReducer = (moviestate = FirstListMovies, action) =>{

  switch(action.type){

    case ADD_MOVIE : return [...moviestate, new movie(moviestate.length+1,action.payload.title,action.payload.Poster, action.payload.rating, action.payload.description, action.payload.dateOfRelease, action.payload.type, action.payload.actors, action.payload.trailer )];

    case DELETE_MOVIE : return [...moviestate.filter(user => user.id !== action.payload.id)]


    default : return moviestate;


  }


}