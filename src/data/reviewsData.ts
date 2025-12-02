export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  subject?: string;
  image?: string;
  class?: string;
  timeAgo?: string;
}

export const reviewsData: Review[] = [
  {
    id: '1',
    name: 'Hriday Ahuja',
    subject: 'English',
    rating: 5,
    timeAgo: '2 days ago',
    comment: 'Yogesh Sir is the Best he is one of the best teachers I have ever learned from. He explains every topic clearly and makes sure we understand everything. His teaching style is very interesting. he uses examples, stories, and fun exercises to make English easy and enjoyable. He is patient, kind, and always encourages us to speak confidently in English.'
  },
  {
    id: '2',
    name: 'Pooja Shankar',
    subject: 'English',
    rating: 5,
    timeAgo: '1 week ago',
    comment: 'I am incredibly grateful to Yogesh sir for teaching me English in my 12th standard. He explained every concept so well, which helped me improve my English. His teaching style was very simple, and he always cleared our doubts.'
  },
  {
    id: '3',
    name: 'Arjun ',
    subject: 'Overall',
    rating: 5,
    timeAgo: '3 days ago',
    comment: 'One of the best teachers I have known The amount of energy he puts in the class is huge and appreciable. I would highly recommend Yogesh sir...He is the best man for cbse 9-12 english as I studied at his coaching.'
  },
  {
    id: '4',
    name: 'Pooja Khanna',
    subject: 'Overall',
    rating: 5,
    timeAgo: '2 weeks ago',
    comment: 'My experience in Sir\'s English tuition has been truly amazing. When I first joined, I was nervous and not very confident in English, but Sir\'s way of teaching made everything so simple and clear. He is extremely patient and explains every topic in detail, making sure we understand properly.'
  },
  {
    id: '5',
    name: 'Sanjana',
    subject: 'English',
    rating: 5,
    timeAgo: '5 days ago',
    comment: 'Yogesh sir is an excellent English teacher who makes every class interesting and engaging. Their lessons are well-organized, and they explain grammar and literature clearly. They also encourage students to share their opinions and improve their communication skills.'
  },
  {
    id: '6',
    name: 'Ansh Diwakar',
    subject: 'Overall',
    rating: 5,
    timeAgo: '1 week ago',
    comment: 'Vikash Rawat Sir is a brilliant teacher. His classes are always engaging, and he encourages students to think beyond the textbook. The way he explains political theories and connects them with current events makes learning truly meaningful.'
},
 {
    id: '7',
    name: 'Aarush',
    subject: 'Overall',
    rating: 5,
    timeAgo: '4 days ago',
    comment: 'Hi Im Aarush, Im a student at Yogesh Kochar English Classes. Currently Im in 10th class and joined Yogesh sir classes in 9th class for English grammar only..but I was impressed with the way he teaches and makes intricate and monotonous rules of grammar so easy to understand with ease.'
},
 {
    id: '8',
    name: 'Dhruv Chopra',
    subject: 'Overall',
    rating: 5,
    timeAgo: '1 week ago',
    comment: 'Yogesh Sir is a remarkable teacher and i love his teaching style. He is so passionate and committed towards teaching. He not only a teacher to us but a real friend and gaurdian. I have joined him in class 12 for my board exam preparations.'
},
 {
    id: '9',
    name: 'Sahiba Ansari',
    subject: 'Overall',
    rating: 5,
    timeAgo: '6 days ago',
    comment: 'Yogesh sir is best English teacher his teaching style is clear and descriptive ,making english grammar easy to grasp. His nature is very friendly . Yogesh sir students appreciate his ability to make complex concepts simple.he is a Great teacher '
},
 {
    id: '10',
    name: 'Akansha ',
    subject: 'Overall',
    rating: 5,
    timeAgo: '3 weeks ago',
    comment: 'Sir you are excellent at making complex concepts simple and easy to grasp. Their lessons are always well-prepared, interactive, and motivating. They focus on both grammar and spoken English, which has helped gain confidence . I truly appreciate their dedication and teaching style'
},
 {
    id: '11',
    name: 'Abhyuday Gupta',
    subject: 'English',
    rating: 5,
    timeAgo: '2 days ago',
    comment: 'Yogesh Sir is an exceptional English teacher who makes learning both effective and enjoyable. His teaching style is clear, engaging, and tailored to every students level. He focuses on building strong grammar, vocabulary, and writing skills while also boosting confidence in speaking.'
},
 {
    id: '12',
    name: 'Tannu Singh',
    subject: 'Overall',
    rating: 5,
    timeAgo: '1 week ago',
    comment: 'Yogesh kocher is an excellent English teacher who explains concepts clearly and makes learning enjoyable. Their classes are engaging, and they always encourage participation and creativity. I have improved a lot in both writing and communication thanks to their support and guidance.'
},
 {
    id: '13',
    name: 'Jhankar Dhingra',
    subject: 'Overall',
    rating: 5,
    timeAgo: '5 days ago',
    comment: 'I feel really lucky to be a part of this institute. The faculty here for English, Economics, and Business Studies is truly the best. Each teacher is supportive, knowledgeable, and explains every concept in a simple and effective way'
},
 {
    id: '14',
    name: 'Sonam',
    subject: 'Pol. Sci., Economics',
    rating: 5,
    timeAgo: '2 weeks ago',
    comment: 'Myself Sonam, aur honestly bolu toh Political Science aur Economics dono subjects pehle thode confusing lagte the. Kabhi lagta tha samajh aa raha hai, kabhi bilkul nahi . Par jab Vikash Rawat Sir ki class join ki, tab laga ki haan… ab kuch toh sahi ho raha hai. Unka way of teaching itna clear aur friendly tha ki padhai ka pressure kam ho gaya.'
},
 {
    id: '15',
    name: 'Avdesh Kumar',
    subject: 'Economics',
    rating: 5,
    timeAgo: '1 week ago',
    comment: '11th mein fail hone ke baad lagta tha sab khatam ho gaya depression ne confidence chheen liya tha. Phir Vikash Rawat Sir ki class join ki, jahan sirf Economics nahi, zindagi samajhne ka nazariya mila.'
},
 {
    id: '16',
    name: 'Sunil Kanojiya',
    subject: 'Economics, Pol. Sci.',
    rating: 5,
    timeAgo: '3 days ago',
    comment: 'Vikash Sir is honestly one of the coolest teachers we have had. He does not just teach Economics and Political Science he makes them feel like stories we actually want to listen to. His way of explaining things is so smooth that even the boring parts start making sense.'
},
 {
    id: '17',
    name: 'Rohit Jatav',
    subject: 'Economics',
    rating: 5,
    timeAgo: '4 days ago',
    comment: 'Vikash Sir ke class ek journey hoti hai jahaan concepts samajh mein aate hain, aur dil ko bhi chhoote hain. Ek baar unhone worksheet ke corner par likha tha, padhai se pehle samajh, samajh se pehle insaan.Tab samjha ki sir ke liye education sirf syllabus nahi, ek feeling hai.'
},
 {
    id: '18',
    name: 'Diya',
    subject: 'English',
    rating: 5,
    timeAgo: '1 week ago',
    comment: 'Hie, Im Diya currently pursuing English speaking course and it is the best course with best teachers who builds our confidence. Shivani mam our English teacher , she is one of the most humble teacher I have ever met and Yogesh sir who helps, understand and teach so perfectly to everyone. Must join and learn new things in a joyful way.'
},
 {
    id: '19',
    name: 'Sneha Gupta',
    subject: 'Economics',
    rating: 5,
    timeAgo: '6 days ago',
    comment: 'Hey, I am Deepanshu from Darshan Public School. I got 100/100 in Economics in both 11th and 12th… and honestly, I still can not believe it sometimes . But full credit goes to Vikash Rawat Sir. His teaching style is just different'
},
 {
    id: '20',
    name: 'Subh',
    subject: 'Pol. Sci.',
    rating: 5,
    timeAgo: '2 weeks ago',
    comment: 'Vikash Rawat Sir is an excellent teacher. His classes are well-structured, and he explains every concept with clarity. There is no stress, yet everything gets covered on time. His notes and examples make revision super easy. Highly recommended for anyone serious about Political Science.'
},

 {
    id: '21',
    name: 'Pintu',
    subject: 'Mathematics, Economics',
    rating: 5,
    timeAgo: '3 days ago',
    comment: 'I am Pintu and i was always scared of maths so i thaught eco will be hard but vikash rawat sir make it simple. he is very panchual, always come on time and teach with full energy. once he explain demand n supply with chai stall example and whole class was laughing but we all remembr it in test.'
},

 {
    id: '22',
    name: 'Punya Yadav',
    subject: 'English',
    rating: 5,
    timeAgo: '1 week ago',
    comment: 'This is a fact that if you want to learn something very quickly and for a longer period of time you should learn it with some tricks. I always used to believe like everyone that English is very easy but when I started facing problems I found the most humble, honest and loveable teacher that taught me English so well that I feel always blessed and grateful. My marks got very improved.'
},{
    id: '23',
    name: 'Ziya Fatima',
    subject: 'Pol. Sci.',
    rating: 5,
    timeAgo: '5 days ago',
    comment: 'Rawat Sir makes Political Science genuinely engaging. His focus is not just on completing the syllabus but on helping students understand the subject deeply. The classroom environment is always positive and motivating. I have learned a lot beyond just textbook knowledge.'
},
{
    id: '24',
    name: 'Rohit Chauhan',
    subject: 'English',
    rating: 5,
    timeAgo: '4 days ago',
    comment: 'Yogesh Bhaiya is a very good teacher. His way of teaching is simple and clear. The institute environment is also positive and motivating. You get the best guidance for studies here'
}
];
