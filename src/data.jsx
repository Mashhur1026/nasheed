import { FaTelegram } from 'react-icons/fa'
import { BsYoutube } from 'react-icons/bs'

const nasheeds = [
  {
    id: 1,
    artist: "Haley",
    category: "Sad",
    song: "https://res.cloudinary.com/dj4lkwyjd/video/upload/v1681389451/sad1_yrawt8.mp3",

    img: "https://res.cloudinary.com/dj4lkwyjd/image/upload/v1681359216/sad_rsh1bv.jpg",
    name: "Broken Dreams",
    artistImg:
      "https://res.cloudinary.com/dj4lkwyjd/image/upload/v1681362362/Siedd_mk6bwh.jpg",
  },
  {
    id: 2,
    artist: "Haley",
    category: "Sad",
    song: "https://res.cloudinary.com/dj4lkwyjd/video/upload/v1681389446/Sad_Arabic_Nasheeds_Collection_No_Music_Nasheeds_l1LYBnOwwrE_160_mp3cut.net_8_vaqqgo.m4a",

    img: "https://res.cloudinary.com/dj4lkwyjd/image/upload/v1681359216/sad_rsh1bv.jpg",
    name: "Broken",
    artistImg:
      "https://res.cloudinary.com/dj4lkwyjd/image/upload/v1681362362/Siedd_mk6bwh.jpg",
  },
  {
    id: 3,
    artist: "Haley",
    category: "Sad",
    song: "https://res.cloudinary.com/dj4lkwyjd/video/upload/v1681389446/Sad_Arabic_Nasheeds_Collection_No_Music_Nasheeds_l1LYBnOwwrE_160_mp3cut.net_sv0vfk.m4a",
    img: "https://res.cloudinary.com/dj4lkwyjd/image/upload/v1681359216/sad_rsh1bv.jpg",
    name: "Broken Heart",
    artistImg:
      "https://res.cloudinary.com/dj4lkwyjd/image/upload/v1681362362/Siedd_mk6bwh.jpg",
  },
  {
    id: 4,
    artist: "Haley",
    category: "Sad",
    song: "https://res.cloudinary.com/dj4lkwyjd/video/upload/v1681389445/Sad_Arabic_Nasheeds_Collection_No_Music_Nasheeds_l1LYBnOwwrE_160_mp3cut.net_9_egdfhp.m4a",
    img: "https://res.cloudinary.com/dj4lkwyjd/image/upload/v1681359216/sad_rsh1bv.jpg",
    name: "Heart",
    artistImg:
      "https://res.cloudinary.com/dj4lkwyjd/image/upload/v1681362362/Siedd_mk6bwh.jpg",
  },
  {
    id: 5,
    artist: "Jhon",
    category: "Sad",
    song: "https://res.cloudinary.com/dj4lkwyjd/video/upload/v1681389444/Sad_Arabic_Nasheeds_Collection_No_Music_Nasheeds_l1LYBnOwwrE_160_mp3cut.net_1_prylni.m4a",
    img: "https://res.cloudinary.com/dj4lkwyjd/image/upload/v1681359216/sad_rsh1bv.jpg",
    name: "Together",
    artistImg:
      "https://res.cloudinary.com/dj4lkwyjd/image/upload/v1681362362/Siedd_mk6bwh.jpg",
  },
  {
    id: 6,
    artist: "Jhon",
    category: "Sad",
    song: "https://res.cloudinary.com/dj4lkwyjd/video/upload/v1681389444/Sad_Arabic_Nasheeds_Collection_No_Music_Nasheeds_l1LYBnOwwrE_160_mp3cut.net_7_jo99fd.m4a",
    img: "https://res.cloudinary.com/dj4lkwyjd/image/upload/v1681359216/sad_rsh1bv.jpg",
    name: "Together we",
    artistImg:
      "https://res.cloudinary.com/dj4lkwyjd/image/upload/v1681362362/Siedd_mk6bwh.jpg",
  },
  {
    id: 7,
    artist: "Mashhur",
    category: "Sad",
    song: "https://res.cloudinary.com/dj4lkwyjd/video/upload/v1681389444/Sad_Arabic_Nasheeds_Collection_No_Music_Nasheeds_l1LYBnOwwrE_160_mp3cut.net_2_olztbv.m4a",
    img: "https://res.cloudinary.com/dj4lkwyjd/image/upload/v1681359216/sad_rsh1bv.jpg",
    name: "I got it",
    artistImg:
      "https://res.cloudinary.com/dj4lkwyjd/image/upload/v1681362362/Siedd_mk6bwh.jpg",
  },
  {
    id: 8,
    artist: "Mashhur",
    category: "Sad",
    song: "https://res.cloudinary.com/dj4lkwyjd/video/upload/v1681389444/Sad_Arabic_Nasheeds_Collection_No_Music_Nasheeds_l1LYBnOwwrE_160_mp3cut.net_6_haaogj.m4a",
    img: "https://res.cloudinary.com/dj4lkwyjd/image/upload/v1681359216/sad_rsh1bv.jpg",
    name: "Love",
    artistImg:
      "https://res.cloudinary.com/dj4lkwyjd/image/upload/v1681362362/Siedd_mk6bwh.jpg",
  },
  {
    id: 9,
    artist: "Mashhur",
    category: "Sad",
    song: "https://res.cloudinary.com/dj4lkwyjd/video/upload/v1681389444/Sad_Arabic_Nasheeds_Collection_No_Music_Nasheeds_l1LYBnOwwrE_160_mp3cut.net_3_nyj5yr.m4a",
    img: "https://res.cloudinary.com/dj4lkwyjd/image/upload/v1681359216/sad_rsh1bv.jpg",
    name: "Love it",
    artistImg:
      "https://res.cloudinary.com/dj4lkwyjd/image/upload/v1681362362/Siedd_mk6bwh.jpg",
  },
  {
    id: 10,
    artist: "Fazliddin",
    category: "Sad",
    song: "https://res.cloudinary.com/dj4lkwyjd/video/upload/v1681389443/Sad_Arabic_Nasheeds_Collection_No_Music_Nasheeds_l1LYBnOwwrE_160_mp3cut.net_4_vhssmw.m4a",
    img: "https://res.cloudinary.com/dj4lkwyjd/image/upload/v1681359216/sad_rsh1bv.jpg",
    name: "Mother",
    artistImg:
      "https://res.cloudinary.com/dj4lkwyjd/image/upload/v1681362362/Siedd_mk6bwh.jpg",
  },
  {
    id: 11,
    artist: "Fazliddin",
    category: "Sad",
    song: "https://res.cloudinary.com/dj4lkwyjd/video/upload/v1681389443/Sad_Arabic_Nasheeds_Collection_No_Music_Nasheeds_l1LYBnOwwrE_160_mp3cut.net_5_gis3td.m4a",
    img: "https://res.cloudinary.com/dj4lkwyjd/image/upload/v1681359216/sad_rsh1bv.jpg",
    name: "Natali",
    artistImg:
      "https://res.cloudinary.com/dj4lkwyjd/image/upload/v1681362362/Siedd_mk6bwh.jpg",
  },
  {
    id: 12,
    artist: "Fazliddin",
    category: "Relaxing",
    song: "https://res.cloudinary.com/dj4lkwyjd/video/upload/v1681389401/Relaxing_Nasheeds_Collection_No_Music_Nasheeds_mrWqvm7mLxI_160_1_mp3cut.net_13_gpvs1l.mp3",
    img: "https://res.cloudinary.com/dj4lkwyjd/image/upload/v1681359203/relax_mi5kp1.jpg",
    name: "Natasha",
    artistImg:
      "https://res.cloudinary.com/dj4lkwyjd/image/upload/v1681362362/Siedd_mk6bwh.jpg",
  },
  {
    id: 13,
    artist: "Jimi",
    category: "Relaxing",
    song: "https://res.cloudinary.com/dj4lkwyjd/video/upload/v1681389400/Relaxing_Nasheeds_Collection_No_Music_Nasheeds_mrWqvm7mLxI_160_1_mp3cut.net_2_kcycmy.mp3",
    img: "https://res.cloudinary.com/dj4lkwyjd/image/upload/v1681359203/relax_mi5kp1.jpg",
    name: "Into",
    artistImg:
      "https://res.cloudinary.com/dj4lkwyjd/image/upload/v1681362362/Siedd_mk6bwh.jpg",
  },
  {
    id: 14,
    artist: "Shoh",
    category: "Relaxing",
    song: "https://res.cloudinary.com/dj4lkwyjd/video/upload/v1681389399/relex_cmzzxd.mp3",
    img: "https://res.cloudinary.com/dj4lkwyjd/image/upload/v1681359203/relax_mi5kp1.jpg",
    name: "We in",
    artistImg:
      "https://res.cloudinary.com/dj4lkwyjd/image/upload/v1681362362/Siedd_mk6bwh.jpg",
  },
  {
    id: 15,
    artist: "Jimi",
    category: "Relaxing",
    song: "https://res.cloudinary.com/dj4lkwyjd/video/upload/v1681389398/Relaxing_Nasheeds_Collection_No_Music_Nasheeds_mrWqvm7mLxI_160_1_mp3cut.net_11_yfatm6.mp3",
    img: "https://res.cloudinary.com/dj4lkwyjd/image/upload/v1681359203/relax_mi5kp1.jpg",
    name: "We in",
    artistImg:
      "https://res.cloudinary.com/dj4lkwyjd/image/upload/v1681362362/Siedd_mk6bwh.jpg",
  },
  {
    id: 16,
    artist: "Shoh",
    category: "Relaxing",
    song: "https://res.cloudinary.com/dj4lkwyjd/video/upload/v1681389397/Relaxing_Nasheeds_Collection_No_Music_Nasheeds_mrWqvm7mLxI_160_1_mp3cut.net_qze0wv.mp3",
    img: "https://res.cloudinary.com/dj4lkwyjd/image/upload/v1681359203/relax_mi5kp1.jpg",
    name: "We in",
    artistImg:
      "https://res.cloudinary.com/dj4lkwyjd/image/upload/v1681362362/Siedd_mk6bwh.jpg",
  },
  {
    id: 17,
    artist: "Shoh",
    category: "Relaxing",
    song: "https://res.cloudinary.com/dj4lkwyjd/video/upload/v1681389396/Relaxing_Nasheeds_Collection_No_Music_Nasheeds_mrWqvm7mLxI_160_1_mp3cut.net_12_va0gyt.mp3",
    img: "https://res.cloudinary.com/dj4lkwyjd/image/upload/v1681359203/relax_mi5kp1.jpg",
    name: "We in",
    artistImg:
      "https://res.cloudinary.com/dj4lkwyjd/image/upload/v1681362362/Siedd_mk6bwh.jpg",
  },
  {
    id: 18,
    artist: "Shoh",
    category: "Relaxing",
    song: "https://res.cloudinary.com/dj4lkwyjd/video/upload/v1681389396/Relaxing_Nasheeds_Collection_No_Music_Nasheeds_mrWqvm7mLxI_160_1_mp3cut.net_10_xppb1r.mp3",
    img: "https://res.cloudinary.com/dj4lkwyjd/image/upload/v1681359203/relax_mi5kp1.jpg",
    name: "We in",
    artistImg:
      "https://res.cloudinary.com/dj4lkwyjd/image/upload/v1681362362/Siedd_mk6bwh.jpg",
  },
  {
    id: 19,
    artist: "Shoh",
    category: "Relaxing",
    song: "https://res.cloudinary.com/dj4lkwyjd/video/upload/v1681389393/Relaxing_Nasheeds_Collection_No_Music_Nasheeds_mrWqvm7mLxI_160_1_mp3cut.net_7_al9fez.mp3",
    img: "https://res.cloudinary.com/dj4lkwyjd/image/upload/v1681359203/relax_mi5kp1.jpg",
    name: "We in",
    artistImg:
      "https://res.cloudinary.com/dj4lkwyjd/image/upload/v1681362362/Siedd_mk6bwh.jpg",
  },
  {
    id: 20,
    artist: "Shoh",
    category: "Relaxing",
    song: "https://res.cloudinary.com/dj4lkwyjd/video/upload/v1681389394/Relaxing_Nasheeds_Collection_No_Music_Nasheeds_mrWqvm7mLxI_160_1_mp3cut.net_9_lth4ih.mp3",
    img: "https://res.cloudinary.com/dj4lkwyjd/image/upload/v1681359203/relax_mi5kp1.jpg",
    name: "We in",
    artistImg:
      "https://res.cloudinary.com/dj4lkwyjd/image/upload/v1681362362/Siedd_mk6bwh.jpg",
  },
  {
    id: 21,
    artist: "Shoh",
    category: "Relaxing",
    song: "https://res.cloudinary.com/dj4lkwyjd/video/upload/v1681389394/Relaxing_Nasheeds_Collection_No_Music_Nasheeds_mrWqvm7mLxI_160_1_mp3cut.net_1_p5uwwk.mp3",
    img: "https://res.cloudinary.com/dj4lkwyjd/image/upload/v1681359203/relax_mi5kp1.jpg",
    name: "We in",
    artistImg:
      "https://res.cloudinary.com/dj4lkwyjd/image/upload/v1681362362/Siedd_mk6bwh.jpg",
  },
  {
    id: 22,
    artist: "Shoh",
    category: "Relaxing",
    song: "https://res.cloudinary.com/dj4lkwyjd/video/upload/v1681389394/Relaxing_Nasheeds_Collection_No_Music_Nasheeds_mrWqvm7mLxI_160_1_mp3cut.net_5_y0a92t.mp3",
    img: "https://res.cloudinary.com/dj4lkwyjd/image/upload/v1681359203/relax_mi5kp1.jpg",
    name: "We in",
    artistImg:
      "https://res.cloudinary.com/dj4lkwyjd/image/upload/v1681362362/Siedd_mk6bwh.jpg",
  },
  {
    id: 23,
    artist: "Shoh",
    category: "Relaxing",
    song: "https://res.cloudinary.com/dj4lkwyjd/video/upload/v1681389393/relax_hupe5k.mp3",
    img: "https://res.cloudinary.com/dj4lkwyjd/image/upload/v1681359203/relax_mi5kp1.jpg",
    name: "We in",
    artistImg:
      "https://res.cloudinary.com/dj4lkwyjd/image/upload/v1681362362/Siedd_mk6bwh.jpg",
  },
  {
    id: 24,
    artist: "Shoh",
    category: "Relaxing",
    song: "https://res.cloudinary.com/dj4lkwyjd/video/upload/v1681389393/Relaxing_Nasheeds_Collection_No_Music_Nasheeds_mrWqvm7mLxI_160_1_mp3cut.net_8_yysias.mp3",
    img: "https://res.cloudinary.com/dj4lkwyjd/image/upload/v1681359203/relax_mi5kp1.jpg",
    name: "We in",
    artistImg:
      "https://res.cloudinary.com/dj4lkwyjd/image/upload/v1681362362/Siedd_mk6bwh.jpg",
  },
  {
    id: 25,
    artist: "Shoh",
    category: "Relaxing",
    song: "https://res.cloudinary.com/dj4lkwyjd/video/upload/v1681389392/Relaxing_Nasheeds_Collection_No_Music_Nasheeds_mrWqvm7mLxI_160_1_mp3cut.net_6_kfbss0.mp3",
    img: "https://res.cloudinary.com/dj4lkwyjd/image/upload/v1681359203/relax_mi5kp1.jpg",
    name: "We in",
    artistImg:
      "https://res.cloudinary.com/dj4lkwyjd/image/upload/v1681362362/Siedd_mk6bwh.jpg",
  },
  {
    id: 26,
    artist: "Shoh",
    category: "Relaxing",
    song: "https://res.cloudinary.com/dj4lkwyjd/video/upload/v1681389390/Relaxing_Nasheeds_Collection_No_Music_Nasheeds_mrWqvm7mLxI_160_1_mp3cut.net_4_kgwuxv.mp3",
    img: "https://res.cloudinary.com/dj4lkwyjd/image/upload/v1681359203/relax_mi5kp1.jpg",
    name: "We in",
    artistImg:
      "https://res.cloudinary.com/dj4lkwyjd/image/upload/v1681362362/Siedd_mk6bwh.jpg",
  },
  {
    id: 27,
    artist: "Shoh",
    category: "Relaxing",
    song: "https://res.cloudinary.com/dj4lkwyjd/video/upload/v1681389390/Relaxing_Nasheeds_Collection_No_Music_Nasheeds_mrWqvm7mLxI_160_1_mp3cut.net_3_gouwun.mp3",
    img: "https://res.cloudinary.com/dj4lkwyjd/image/upload/v1681359203/relax_mi5kp1.jpg",
    name: "We in",
    artistImg:
      "https://res.cloudinary.com/dj4lkwyjd/image/upload/v1681362362/Siedd_mk6bwh.jpg",
  },
];

export default nasheeds

export const logo =
  'https://res.cloudinary.com/dj4lkwyjd/image/upload/v1681117209/logo_vl92uv.png'

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
