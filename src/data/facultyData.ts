import akshay from '../photos/akshay.png';
import pradeep from '../photos/pradeep.png';
import vikash from '../photos/vikash.jpg';
import yogesh from '../photos/yogesh.jpg';
import jaskeerat from '../photos/jaskeerat.jpg';
import jhankar from '../photos/jhankar.jpg';


export interface Faculty {
  id: string;
  name: string;
  title: string;
  mainSubject: string;
  secondarySubject: string;
  bio: string;
  quote: string;
  image: string;
}

export const facultyData: Faculty[] = [
  {
    id: 'yogesh-kochar',
    name: 'Yogesh Kochar',
    title: 'Founder & English Faculty',
    mainSubject: 'English (IX-X-XI-XII)',
    secondarySubject: 'TEFL Certified Teacher',
    bio: 'With 20+ years of teaching experience and 6500+ students taught, Yogesh Sir has built a legacy of excellence in English. He is TEFL (Certified Teacher) known for his motivational teaching style, he has guided many toppers and 100+ students scoring 90+ marks in CBSE English. He makes difficult topics simple, engaging, and fun so that students not only score well but also enjoy the learning process. Teaching for him is not just a profession—it\'s his passion and purpose.',
    quote: "Teaching English isn't just about grammar and literature – it's about giving students confidence and a voice of their own.",
    image: yogesh,
  },
  {
    id: 'akshay-sir',
    name: 'Akshay Kumar',
    title: 'Mathematics & Science Faculty',
    mainSubject: 'Mathematics & Science',
    secondarySubject: 'Classes IX-X',
    bio: 'Akshay Kumar is a dedicated educator with a B.Tech degree from MAIT, Delhi (Rohini). With a strong passion for teaching, he specializes in Mathematics and Science for Class 9th and Class 10th students. Since 2014, he has been guiding students with his in-depth subject knowledge and practical teaching approach, making learning easy, engaging, and result-oriented. Over the years, he has helped numerous students strengthen their fundamentals, improve their confidence, and achieve excellent academic results. His goal is to not only prepare students for exams but also to nurture logical thinking and problem-solving skills for life.',
    quote: "Math and Science aren't just subjects, they are mind gyms - once you crack them, you feel unstoppable.",
    image: akshay
  },
  {
    id: 'vikash-sir',
    name: 'Vikash Rawat',
    title: 'Economics & Political Science Faculty',
    mainSubject: 'Economics & Political Science',
    secondarySubject: 'Classes XI-XII',
    bio: 'Vikash Rawat Sir, an accomplished teacher of Economics and Political Science for Classes 11 and 12, holds a Bachelor\'s degree in Economics from Ramjas College, University of Delhi, a Master\'s in Economics (Honours), and a Teaching Diploma from SCERT Delhi. With over 8 years of experience teaching in both private batches and government schools, he is known for his emotionally rich, concept-driven teaching style that blends storytelling, visuals, and creative methods. With deep subject expertise, Vikash Sir simplifies complex economic theories and political concepts into easy, relatable lessons. His approach builds both exam confidence and real-world perspective.',
    quote: "Economics teaches you choices, Polity teaches power - together they teach you life.",
    image: vikash
  },
  {
    id: 'pradeep-sir',
    name: 'Pradeep Sir',
    title: 'Social Science Faculty',
    mainSubject: 'Social Science',
    secondarySubject: 'Classes IX-X',
    bio: 'Pradeep Sir brings with him over 25 years of rich teaching experience in Social Science. Having served as the Head of Department (Social Science) and attended several CBSE workshops (both online and offline), he has guided more than 2,500 students in his career. Many of his students have achieved outstanding results, with the highest score being a perfect 100/100 in Social Science. He has taught at reputed institutions like S.R.S.M. Senior Secondary School, Kasturi Ram International School and Jain Bharati Mrigavati Vidyalaya, leaving a lasting impact through his dedication and expertise. He turns history, civics, and geography into engaging stories students remember. His interactive style helps learners connect facts with understanding.',
    quote: "History is not about the past, it's about understanding today. I make sure my students see the connection.",
    image: pradeep
  },
  {
    id: 'jhankar-maam',
    name: 'Jhankar Ma\'am',
    title: 'Business Studies Faculty',
    mainSubject: 'Business Studies',
    secondarySubject: 'Classes XI-XII',
    bio: 'Teaching Business Studies for Jhankar Ma\'am is more than a profession—it\'s her passion. She aims to create a dynamic and supportive learning environment where students transform classroom knowledge into real-world skills, nurture leadership qualities, and build the confidence to excel both academically and in life. She brings the world of business alive with practical examples and simplified concepts. She ensures students not only score high but also develop a strong grasp of commerce fundamentals.',
    quote: "Business is not just theory - it's the art of thinking like an entrepreneur.",
    image: jaskeerat
  },
  {
    id: 'jaskeerat-maam',
    name: 'Jaskeerat Kaur',
    title: 'Psychology Faculty',
    mainSubject: 'Psychology',
    secondarySubject: 'Classes XI-XII',
    bio: 'Jaskeerat is a passionate Psychology tutor with a strong academic background in Applied Psychology. She makes understanding psychological concepts simple and relatable for students and focuses on creating an engaging and supportive learning environment that helps students understand both theory and practical applications of psychology. She helps students mastering the concepts while developing analytical skills.',
    quote: "Psychology is the study of the mind, but teaching it is the art of touching hearts.",
    image: jhankar
  }
];
