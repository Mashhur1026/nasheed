import { FaTelegram } from 'react-icons/fa'
import { BsYoutube } from 'react-icons/bs'

const nasheeds = [
  {
    id: 1,
    artist: "Shabbir Showne",
    category: "Sad",
    song: "https://res.cloudinary.com/dj4lkwyjd/video/upload/v1681389451/sad1_yrawt8.mp3",

    img: "https://res.cloudinary.com/dj4lkwyjd/image/upload/v1681359216/sad_rsh1bv.jpg",
    name: "The Spirit of Bravery",
    artistImg:
      "https://res.cloudinary.com/dj4lkwyjd/image/upload/v1681540337/singer_gg2ywo.jpg",
  },
  {
    id: 2,
    artist: "Muhammad Al Muqit",
    category: "Sad",
    song: "https://res.cloudinary.com/dj4lkwyjd/video/upload/v1681389446/Sad_Arabic_Nasheeds_Collection_No_Music_Nasheeds_l1LYBnOwwrE_160_mp3cut.net_8_vaqqgo.m4a",

    img: "https://res.cloudinary.com/dj4lkwyjd/image/upload/v1681359216/sad_rsh1bv.jpg",
    name: "Nasheed Elaxi Anne",
    artistImg:
      "https://res.cloudinary.com/dj4lkwyjd/image/upload/v1681540337/singer_gg2ywo.jpg",
  },
  {
    id: 3,
    artist: "Unknown",
    category: "Sad",
    song: "https://res.cloudinary.com/dj4lkwyjd/video/upload/v1681389446/Sad_Arabic_Nasheeds_Collection_No_Music_Nasheeds_l1LYBnOwwrE_160_mp3cut.net_sv0vfk.m4a",
    img: "https://res.cloudinary.com/dj4lkwyjd/image/upload/v1681359216/sad_rsh1bv.jpg",
    name: "Sad nasheed 1",
    artistImg:
      "https://res.cloudinary.com/dj4lkwyjd/image/upload/v1681540337/singer_gg2ywo.jpg",
  },
  {
    id: 4,
    artist: "Muhammad Al Muqit",
    category: "Sad",
    song: "https://res.cloudinary.com/dj4lkwyjd/video/upload/v1681389445/Sad_Arabic_Nasheeds_Collection_No_Music_Nasheeds_l1LYBnOwwrE_160_mp3cut.net_9_egdfhp.m4a",
    img: "https://res.cloudinary.com/dj4lkwyjd/image/upload/v1681359216/sad_rsh1bv.jpg",
    name: "Tear After Tear",
    artistImg:
      "https://res.cloudinary.com/dj4lkwyjd/image/upload/v1681540337/singer_gg2ywo.jpg",
  },
  {
    id: 5,
    artist: "Unknown",
    category: "Sad",
    song: "https://res.cloudinary.com/dj4lkwyjd/video/upload/v1681389444/Sad_Arabic_Nasheeds_Collection_No_Music_Nasheeds_l1LYBnOwwrE_160_mp3cut.net_1_prylni.m4a",
    img: "https://res.cloudinary.com/dj4lkwyjd/image/upload/v1681359216/sad_rsh1bv.jpg",
    name: "Sad nasheed 2",
    artistImg:
      "https://res.cloudinary.com/dj4lkwyjd/image/upload/v1681540337/singer_gg2ywo.jpg",
  },
  {
    id: 6,
    artist: "Islam Hashidov",
    category: "Sad",
    song: "https://res.cloudinary.com/dj4lkwyjd/video/upload/v1681389444/Sad_Arabic_Nasheeds_Collection_No_Music_Nasheeds_l1LYBnOwwrE_160_mp3cut.net_7_jo99fd.m4a",
    img: "https://res.cloudinary.com/dj4lkwyjd/image/upload/v1681359216/sad_rsh1bv.jpg",
    name: "Death",
    artistImg:
      "https://res.cloudinary.com/dj4lkwyjd/image/upload/v1681540337/singer_gg2ywo.jpg",
  },
  {
    id: 7,
    artist: "Muhammad Al Muqit",
    category: "Sad",
    song: "https://res.cloudinary.com/dj4lkwyjd/video/upload/v1681389444/Sad_Arabic_Nasheeds_Collection_No_Music_Nasheeds_l1LYBnOwwrE_160_mp3cut.net_2_olztbv.m4a",
    img: "https://res.cloudinary.com/dj4lkwyjd/image/upload/v1681359216/sad_rsh1bv.jpg",
    name: "The sins",
    artistImg:
      "https://res.cloudinary.com/dj4lkwyjd/image/upload/v1681540337/singer_gg2ywo.jpg",
  },
  {
    id: 8,
    artist: "Axmed Buxatir",
    category: "Sad",
    song: "https://res.cloudinary.com/dj4lkwyjd/video/upload/v1681389444/Sad_Arabic_Nasheeds_Collection_No_Music_Nasheeds_l1LYBnOwwrE_160_mp3cut.net_6_haaogj.m4a",
    img: "https://res.cloudinary.com/dj4lkwyjd/image/upload/v1681359216/sad_rsh1bv.jpg",
    name: "Ya adheeman",
    artistImg:
      "https://res.cloudinary.com/dj4lkwyjd/image/upload/v1681540337/singer_gg2ywo.jpg",
  },
  {
    id: 9,
    artist: "Unknown",
    category: "Sad",
    song: "https://res.cloudinary.com/dj4lkwyjd/video/upload/v1681389444/Sad_Arabic_Nasheeds_Collection_No_Music_Nasheeds_l1LYBnOwwrE_160_mp3cut.net_3_nyj5yr.m4a",
    img: "https://res.cloudinary.com/dj4lkwyjd/image/upload/v1681359216/sad_rsh1bv.jpg",
    name: "To him a prisoner",
    artistImg:
      "https://res.cloudinary.com/dj4lkwyjd/image/upload/v1681540337/singer_gg2ywo.jpg",
  },
  {
    id: 10,
    artist: "Ahmed Bukhatir",
    category: "Sad",
    song: "https://res.cloudinary.com/dj4lkwyjd/video/upload/v1681389443/Sad_Arabic_Nasheeds_Collection_No_Music_Nasheeds_l1LYBnOwwrE_160_mp3cut.net_4_vhssmw.m4a",
    img: "https://res.cloudinary.com/dj4lkwyjd/image/upload/v1681359216/sad_rsh1bv.jpg",
    name: "Ya adheeman",
    artistImg:
      "https://res.cloudinary.com/dj4lkwyjd/image/upload/v1681540337/singer_gg2ywo.jpg",
  },
  {
    id: 11,
    artist: "Muhammad Al Muqit",
    category: "Sad",
    song: "https://res.cloudinary.com/dj4lkwyjd/video/upload/v1681389443/Sad_Arabic_Nasheeds_Collection_No_Music_Nasheeds_l1LYBnOwwrE_160_mp3cut.net_5_gis3td.m4a",
    img: "https://res.cloudinary.com/dj4lkwyjd/image/upload/v1681359216/sad_rsh1bv.jpg",
    name: "For you oh my lord",
    artistImg:
      "https://res.cloudinary.com/dj4lkwyjd/image/upload/v1681540337/singer_gg2ywo.jpg",
  },
  {
    id: 12,
    artist: "Darmawan",
    category: "Relaxing",
    song: "https://res.cloudinary.com/dj4lkwyjd/video/upload/v1681389401/Relaxing_Nasheeds_Collection_No_Music_Nasheeds_mrWqvm7mLxI_160_1_mp3cut.net_13_gpvs1l.mp3",
    img: "https://res.cloudinary.com/dj4lkwyjd/image/upload/v1681359203/relax_mi5kp1.jpg",
    name: "Ilahana ma a'dalak",
    artistImg:
      "https://res.cloudinary.com/dj4lkwyjd/image/upload/v1681540337/singer_gg2ywo.jpg",
  },
  {
    id: 13,
    artist: "Mohamed Mourad",
    category: "Relaxing",
    song: "https://res.cloudinary.com/dj4lkwyjd/video/upload/v1681389400/Relaxing_Nasheeds_Collection_No_Music_Nasheeds_mrWqvm7mLxI_160_1_mp3cut.net_2_kcycmy.mp3",
    img: "https://res.cloudinary.com/dj4lkwyjd/image/upload/v1681359203/relax_mi5kp1.jpg",
    name: "Allah is my lord",
    artistImg:
      "https://res.cloudinary.com/dj4lkwyjd/image/upload/v1681540337/singer_gg2ywo.jpg",
  },
  {
    id: 14,
    artist: "Islam Nashidov",
    category: "Relaxing",
    song: "https://res.cloudinary.com/dj4lkwyjd/video/upload/v1681389399/relex_cmzzxd.mp3",
    img: "https://res.cloudinary.com/dj4lkwyjd/image/upload/v1681359203/relax_mi5kp1.jpg",
    name: "Powerful nasheed",
    artistImg:
      "https://res.cloudinary.com/dj4lkwyjd/image/upload/v1681540337/singer_gg2ywo.jpg",
  },
  {
    id: 15,
    artist: "Unknown",
    category: "Relaxing",
    song: "https://res.cloudinary.com/dj4lkwyjd/video/upload/v1681389398/Relaxing_Nasheeds_Collection_No_Music_Nasheeds_mrWqvm7mLxI_160_1_mp3cut.net_11_yfatm6.mp3",
    img: "https://res.cloudinary.com/dj4lkwyjd/image/upload/v1681359203/relax_mi5kp1.jpg",
    name: "Relax nasheed 1",
    artistImg:
      "https://res.cloudinary.com/dj4lkwyjd/image/upload/v1681540337/singer_gg2ywo.jpg",
  },
  {
    id: 16,
    artist: "Ahmed Al Muqit",
    category: "Relaxing",
    song: "https://res.cloudinary.com/dj4lkwyjd/video/upload/v1681389397/Relaxing_Nasheeds_Collection_No_Music_Nasheeds_mrWqvm7mLxI_160_1_mp3cut.net_qze0wv.mp3",
    img: "https://res.cloudinary.com/dj4lkwyjd/image/upload/v1681359203/relax_mi5kp1.jpg",
    name: "We rise to the sky",
    artistImg:
      "https://res.cloudinary.com/dj4lkwyjd/image/upload/v1681540337/singer_gg2ywo.jpg",
  },
  {
    id: 17,
    artist: "Ibrahim Sam",
    category: "Relaxing",
    song: "https://res.cloudinary.com/dj4lkwyjd/video/upload/v1681389396/Relaxing_Nasheeds_Collection_No_Music_Nasheeds_mrWqvm7mLxI_160_1_mp3cut.net_12_va0gyt.mp3",
    img: "https://res.cloudinary.com/dj4lkwyjd/image/upload/v1681359203/relax_mi5kp1.jpg",
    name: "Asma' Allah Alhosna",
    artistImg:
      "https://res.cloudinary.com/dj4lkwyjd/image/upload/v1681540337/singer_gg2ywo.jpg",
  },
  {
    id: 18,
    artist: "Mahmoud Eid Eprahim",
    category: "Relaxing",
    song: "https://res.cloudinary.com/dj4lkwyjd/video/upload/v1681389396/Relaxing_Nasheeds_Collection_No_Music_Nasheeds_mrWqvm7mLxI_160_1_mp3cut.net_10_xppb1r.mp3",
    img: "https://res.cloudinary.com/dj4lkwyjd/image/upload/v1681359203/relax_mi5kp1.jpg",
    name: "O nightingale of branches",
    artistImg:
      "https://res.cloudinary.com/dj4lkwyjd/image/upload/v1681540337/singer_gg2ywo.jpg",
  },
  {
    id: 19,
    artist: "Unknown",
    category: "Relaxing",
    song: "https://res.cloudinary.com/dj4lkwyjd/video/upload/v1681389393/Relaxing_Nasheeds_Collection_No_Music_Nasheeds_mrWqvm7mLxI_160_1_mp3cut.net_7_al9fez.mp3",
    img: "https://res.cloudinary.com/dj4lkwyjd/image/upload/v1681359203/relax_mi5kp1.jpg",
    name: "Relax nasheed 2",
    artistImg:
      "https://res.cloudinary.com/dj4lkwyjd/image/upload/v1681540337/singer_gg2ywo.jpg",
  },
  {
    id: 20,
    artist: "Mahmoud Eid Eprahim",
    category: "Relaxing",
    song: "https://res.cloudinary.com/dj4lkwyjd/video/upload/v1681389394/Relaxing_Nasheeds_Collection_No_Music_Nasheeds_mrWqvm7mLxI_160_1_mp3cut.net_9_lth4ih.mp3",
    img: "https://res.cloudinary.com/dj4lkwyjd/image/upload/v1681359203/relax_mi5kp1.jpg",
    name: "Whan I laugh",
    artistImg:
      "https://res.cloudinary.com/dj4lkwyjd/image/upload/v1681540337/singer_gg2ywo.jpg",
  },
  {
    id: 21,
    artist: "Omar Esa",
    category: "Relaxing",
    song: "https://res.cloudinary.com/dj4lkwyjd/video/upload/v1681389394/Relaxing_Nasheeds_Collection_No_Music_Nasheeds_mrWqvm7mLxI_160_1_mp3cut.net_1_p5uwwk.mp3",
    img: "https://res.cloudinary.com/dj4lkwyjd/image/upload/v1681359203/relax_mi5kp1.jpg",
    name: "Thanks to you Allah",
    artistImg:
      "https://res.cloudinary.com/dj4lkwyjd/image/upload/v1681540337/singer_gg2ywo.jpg",
  },
  {
    id: 22,
    artist: "Ibrahim Sam",
    category: "Relaxing",
    song: "https://res.cloudinary.com/dj4lkwyjd/video/upload/v1681389394/Relaxing_Nasheeds_Collection_No_Music_Nasheeds_mrWqvm7mLxI_160_1_mp3cut.net_5_y0a92t.mp3",
    img: "https://res.cloudinary.com/dj4lkwyjd/image/upload/v1681359203/relax_mi5kp1.jpg",
    name: "Bitheker Allah",
    artistImg:
      "https://res.cloudinary.com/dj4lkwyjd/image/upload/v1681540337/singer_gg2ywo.jpg",
  },
  {
    id: 23,
    artist: "Ahmed Bukhatir",
    category: "Relaxing",
    song: "https://res.cloudinary.com/dj4lkwyjd/video/upload/v1681389393/relax_hupe5k.mp3",
    img: "https://res.cloudinary.com/dj4lkwyjd/image/upload/v1681359203/relax_mi5kp1.jpg",
    name: "Taweel al shawq",
    artistImg:
      "https://res.cloudinary.com/dj4lkwyjd/image/upload/v1681540337/singer_gg2ywo.jpg",
  },
  {
    id: 24,
    artist: "Erwandi Tarmizi",
    category: "Relaxing",
    song: "https://res.cloudinary.com/dj4lkwyjd/video/upload/v1681389393/Relaxing_Nasheeds_Collection_No_Music_Nasheeds_mrWqvm7mLxI_160_1_mp3cut.net_8_yysias.mp3",
    img: "https://res.cloudinary.com/dj4lkwyjd/image/upload/v1681359203/relax_mi5kp1.jpg",
    name: "Hukum akad istishna bolehkah",
    artistImg:
      "https://res.cloudinary.com/dj4lkwyjd/image/upload/v1681540337/singer_gg2ywo.jpg",
  },
  {
    id: 25,
    artist: "Unknown",
    category: "Relaxing",
    song: "https://res.cloudinary.com/dj4lkwyjd/video/upload/v1681389392/Relaxing_Nasheeds_Collection_No_Music_Nasheeds_mrWqvm7mLxI_160_1_mp3cut.net_6_kfbss0.mp3",
    img: "https://res.cloudinary.com/dj4lkwyjd/image/upload/v1681359203/relax_mi5kp1.jpg",
    name: "Relax nasheed 3",
    artistImg:
      "https://res.cloudinary.com/dj4lkwyjd/image/upload/v1681540337/singer_gg2ywo.jpg",
  },
  {
    id: 26,
    artist: "Abd Al Bari Sheik",
    category: "Relaxing",
    song: "https://res.cloudinary.com/dj4lkwyjd/video/upload/v1681389390/Relaxing_Nasheeds_Collection_No_Music_Nasheeds_mrWqvm7mLxI_160_1_mp3cut.net_4_kgwuxv.mp3",
    img: "https://res.cloudinary.com/dj4lkwyjd/image/upload/v1681359203/relax_mi5kp1.jpg",
    name: "Nibras al nour",
    artistImg:
      "https://res.cloudinary.com/dj4lkwyjd/image/upload/v1681540337/singer_gg2ywo.jpg",
  },
  {
    id: 27,
    artist: "Inshad Band",
    category: "Relaxing",
    song: "https://res.cloudinary.com/dj4lkwyjd/video/upload/v1681389390/Relaxing_Nasheeds_Collection_No_Music_Nasheeds_mrWqvm7mLxI_160_1_mp3cut.net_3_gouwun.mp3",
    img: "https://res.cloudinary.com/dj4lkwyjd/image/upload/v1681359203/relax_mi5kp1.jpg",
    name: "Waqafat",
    artistImg:
      "https://res.cloudinary.com/dj4lkwyjd/image/upload/v1681540337/singer_gg2ywo.jpg",
  },
];

export default nasheeds

export const logo =
  "https://res.cloudinary.com/dj4lkwyjd/image/upload/v1681627282/logonew_n645fz.png";

export const icons = [
  {
    id: 1,
    name: 'Telegram',
    img: <FaTelegram />,
    url: 'none',
  },
  {
    id: 2,
    name: 'Youtobe',
    img: <BsYoutube />,
    url: 'none',
  },
]
