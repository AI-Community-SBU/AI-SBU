/** Array of upcoming events in the form of an EventProp so it can be passed to EventSection tag.
 *  When adding an event here, add it in the beginning of the array.
 *  By adding to this array, the code in EventSection will automatically update the website, showing the new event.
 *
 *  When this array is empty (there are no upcoming events), an message will show saying to check back later
 *    This feature will be coded in the EventSection.tsx file
 *       If this feature is not working, delete any curly brackets. The array should just be [].
 *
 *  The format for an event in this array is:
 *     {
 *       image: "../assets/.../imagename.filetype",
 *       title: "TotallyRealNotFakeEventName",
 *       date: "February 29th",
 *       location: "Narnia",
 *       description: "Come by to learn about this super cool event whose description gives a clear and quick summary about it!"
 *     }
 */
export const upcomingEvents = [
  {
    image:"../assets/GBMs/ScavengerHunt.gif",
    title:"Scavenger Hunt",
    date:"August 25th",
    location:"SAC Plaza",
    description:"Join us on an adventure around the SBU campus where you hunt for rewards, discovering many of SBU's clubs along the way!"
  },
  {
    image:"../assets/GBMs/ClubTakeover.gif",
    title:"Club Takeover",
    date:"August 25th",
    location:"Club Hub",
    description:"Connect with the leaders of student organizations at SBU and expand your network! There will be food and a raffle."    
  },
];

/** Array of previous events in the form of an EventProp so it can be passed to EventSection tag.
 *  When adding an event here, add it in the beginning of the array.
 *  By adding to this array, the code in EventSection will automatically update the website, showing the new event.
 *
 *  When this array is empty (there are no previous events in the current semester), a message you choose will show up
 *     However, it's better to have some events hear, so you can use some of the better events from previous semesters
 *
 *  The format for an event in this array is:
 *     {
 *       image: "../assets/.../imagename.filetype",
 *       title: "TotallyRealNotFakeEventName",
 *       date: "February 29th", //This attribute is optional, through I recommend not having it
 *       description: "Come by to learn about this super cool event whose description gives a clear and quick summary about it!"
 *     }
 */
export const previousEvents = [
  {
    image: "../assets/GBMs/NNN.gif",
    title: "Neural Networking Night",
    description: "Join us for a night of games and challenges! There will be prizes & food, so pull up to have a good time"
  },
  {
    image: "../assets/GBMs/Elections.gif",
    title: "E-Board Elections",
    description: "Come to get your voice heard in the club's management and support your picks for next year's e-board!"
  },
  {
    image: "../assets/GBMs/Skiena.png",
    title: "Guest Speaker: Professor Skiena",
    description: "Presenting Professor Steven Skiena, an expert in algorithms! Come to ask about data science or career advice!"
  },
  {
    image: "../assets/GBMs/CNNs.png",
    title: "Introduction to CNNs",
    description: "Stop by our workshop, where you’ll label facial images, train a CNN model, and test its accuracy!"
  },
  {
    image: "../assets/GBMs/Website1.gif",
    title: "Intro to HTML & CSS",
    description: "Join us to learn beginner HTML & CSS and how to set up VSCode to develop websites!"
  },
  {
    image: "../assets/GBMs/MLBootcamp7.gif",
    title: "ML Workshop #7",
    description: "Dive into the Titanic dataset with neural networks. This adventure will help you predict fates with AI!"
  },
  {
    image: "../assets/GBMs/MLBootcamp6.png",
    title: "ML Workshop #6",
    description: "Stop by our workshop, where you’ll label facial images, train a CNN model, and test its accuracy!"
  },
  {
    image: "../assets/GBMs/MLBootcamp5.png",
    title: "ML Workshop #5",
    description: "Learn about classification and regression tasks in machine learning and train your first models!"
  },
  {
    image: "../assets/GBMs/ComputerVision.png",
    title: "Computer Vision",
    description: "Learn about neural network architecture and the latest advancements in computer vision!"
  },
  {
    image: "../assets/GBMs/MLBootcamp4.jpg",
    title: "ML Workshop #4",
    description:
      "We'll be doing out Capstone Project about data analysis and visualization to get hands-on experience!",
  },
  {
    image: "../assets/GBMs/GuestSpeakerBanerjee.gif",
    title: "Guest Speaker: Professor Banerjee",
    description:
      "Take this opportunity to hear Professor Banerjee talk about his NLP research on misinformation!",
  },
  {
    image: "../assets/GBMs/FacialRecognition.gif",
    title: "Facial Recognition",
    description:
      "Learn about facial recognition and how different facial recognition algorithms work!",
  },
];

/** Array of EBoard members written in the format of a EBoardProp so the array can be passed to the EBoardSection tag.
 *   In the event we need to fill a role in the E-Board, you may add an EBoardProp to the array with the name being "TBD" and the image being a black siloette.
 *      However, do not do this if we have not announced publicly that we are looking to fill the role
 *
 *   The format for an E-Board Member in this array is:
 *     {
 *       image: "../assets/.../imagename.filetype",
 *       name: "Your Name",
 *       role: "Webmaster",
 *     }
 */
export const eboardMembers = [
  {
    image: "../assets/eboardphotos/SeanPresident.jpg",
    name: "Sean Erfan",
    role: "President",
  },
  {
    image: "../assets/eboardphotos/RuthvickVP.jpg",
    name: "Ruthvick Bandaru",
    role: "Vice President",
  },
  {
    image: "../assets/eboardphotos/EricSecretary.jpg",
    name: "Eric Yang",
    role: "Secretary",
  },
  {
    image: "../assets/eboardphotos/NatalieTreasurer.jpg",
    name: "Natalie Sid",
    role: "Treasurer",
  },
  {
    image: "../assets/eboardphotos/EricProject.jpg",
    name: "Eric DiGiacomo",
    role: "Project Manager",
  },
  {
    image: "../assets/eboardphotos/DerrickWebmaster.jpg",
    name: "Derrick Ma",
    role: "Webmaster",
  },
  {
    image: "../assets/eboardphotos/MatthewEvent.jpg",
    name: "Matthew Zhang",
    role: "Event Coordinator",
  },
  {
    image: "../assets/eboardphotos/ShireenBranding.jpg",
    name: "Shireen Zaman",
    role: "Branding Manager",
  },
];

/** Array of former EBoard members written in the format of a EBoardProp so the array can be passed to the EBoardSection tag.
 *  The EBoardProp has an optional attribute called "link" which is only used for EBoard alumni
 *    The link can be to Instagram, LinkedIn, whatever the alum wants as their social
 *    Ask the alum you want to add to this section before actually doing it and ask what social they'd like plus the title they want
 *
 *   The format for an E-Board Member in this array is:
 *     {
 *       image: "../assets/.../imagename.filetype",
 *       name: "Your Name",
 *       role: "Webmaster",
 *       link: "Insert link to social",
 *     }
 */
export const eboardAlumni = [
  {
    image: "../assets/eboardphotos/Steven.jpg",
    name: "Steven Yu",
    role: "Founder/President",
    link: "https://www.linkedin.com/in/yuyiy/",
  },
  {
    image: "../assets/eboardphotos/Angel.jpg",
    name: "Angel Xie",
    role: "Secretary",
    link: "https://www.instagram.com/angelxie7/",
  },
  {
    image: "../assets/eboardphotos/Pooja.jpg",
    name: "Pooja Ginjupalli",
    role: "Webmaster",
    link: "https://www.linkedin.com/in/pginjupalli/",
  },
  {
    image: "../assets/eboardphotos/Katherine.jpg",
    name: "Katherine Trusinski",
    role: "Event Coordinator",
  },
];

/** Array of strings representing the photo links.
 *  The array is ordered with new photos in the beginning and older photos at the end.
 *  Always have photos here, even if you have to use photos from previous semesters
 */
export const photos = [
  "../assets/photos/photo1.jpg",
  "../assets/photos/photo2.jpg",
  "../assets/photos/photo3.jpg",
  "../assets/photos/photo4.jpg",
  "../assets/photos/photo5.jpg",
  "../assets/photos/photo6.jpg",
  "../assets/photos/photo7.jpg",
  "../assets/photos/photo8.jpg",
  "../assets/photos/photo9.jpg",
];

/** Array of BlogPost objects which represent articles relevant to AI/Tech.
 *  Make sure to update these articles every few weeks with news you find through the Eboard, club members, or just in general
 *  You can delete articles that are more than 3 months old
 *
 *  The orientation property must be alternating. So, if the previous article is leftAdjusted, then this article must be rightAdjusted.
 *
 *   The format for an article in this array is:
 *     {
 *       image: "../assets/.../imagename.filetype",
 *       title: "Totally real article name",
 *       datePosted: "February 29th",
 *       link: "www.google.com",
 *       description: "This is a general overview of the article. Sort of like a synopsis for a movie."
 *       orientation: "leftAdjusted" or "rightAdjusted"
 *       publisher: "RealNewsSource"
 *     }
 */
export const currentArticles = [
  {
    image: "../assets/blogposts/ABCNews.jpg",
    title: "2023: The Year We Played With AI",
    datePosted: "December 14th, 2023",
    link: "https://abcnews.go.com/Business/wireStory/2023-year-played-artificial-intelligence-105651001",
    description:
      "2023 saw a huge jump in popularity in AI, prompting anyone interested in technology to start learing new areas like machine learning. It seemed like there was a new development everyday, but thankfully, this article helps to put the year into perspective. Read this to learn about the major takeaways in AI from 2023!",
    orientation: "leftAdjusted",
    publisher: "ABC News",
  },
];

/** This array is a list of additional resources about anything AI related (e.g. Bootcamps, programs, etc).
 *  If a resource is expired, remove it from the list.
 *    If the resoucre if a reoccuring thing (e.g. Applications open every year), put it at the bottom of the list.
 *
 *   The format for a resource in this array is:
 *     {
 *       image: "../assets/.../imagename.filetype",
 *       title: "Totally real resource name",
 *       datePosted: "February 29th" or "N/A",
 *       link: "www.google.com",
 *       description: "This is a general overview of the resource. Pretend as if your a marketing agent for this resource."
 *       orientation: "leftAdjusted" or "rightAdjusted"
 *       publisher: "RealResourcePublisherName"
 *     }
 */
export const moreArticles = [
  {
    image: "../assets/blogposts/freeCodeCamp.png",
    title: "Machine Learning With Python",
    datePosted: "N/A",
    link: "https://www.freecodecamp.org/learn/machine-learning-with-python/",
    description:
      "freeCodeCamp is an online resource which offers courses on the different fields of computer science, all for free! One of the popular courses is Machine Learning With Python which includes lessons on TensorFlow and includes projects to test your skills and add to your portfolio! This is a great way to get started with Machine Learning, especially if you have very little background with AI!",
    orientation: "leftAdjusted",
    publisher: "freeCodeCamp",
  },
];

/** An array representing the workshops we offer as a club.
 *  If we don't have a signuplink yet, you can enter ""
 *  For the image, it better to have a small, repeating gif
 *
 *   The format for a workshop in this array is:
 *     {
 *       name: "CoolWorkshopName",
 *       image: "../assets/.../imagename.filetype",
 *       caption: "Quick statement to read as the user scrolls by",
 *       signuplink: "www.google.com" or "",
 *       description: "Whatever you write here as a description can and should be long. Promote everything about this event because we want to be the best club on campus (if not, the world)"
 *     }
 */
export const workshops = [
  {
    name: "Machine Learning",
    image: "url(../assets/GBMs/MLWorkshop.gif)",
    caption:
      "Get A Hands-On Introduction to Machine Learning Through Lessons & Real-World Projects!",
    signuplink: "",
    description:
      "Join us this spring semester for an engaging and educational Machine Learning Bootcamp, hosted by the AI community at SBU! This comprehensive workshop is designed to introduce students to the core principles of machine learning and the Python programming language. Over the course of the semester, participants will dedicate a minimum of two hours weekly to learn through dynamic, hands-on projects. Our curriculum covers a range of essential topics, including Linear Regression, K-Nearest Neighbors, Logistic Regression, and the development of Pipelines. Additionally, students will explore the intricacies of Vector-Controlled Machines and other advanced subjects. The workshop will be led by the experienced members of our club's executive board, ensuring a high-quality learning experience. What sets this bootcamp apart is its focus on practical application. Participants will sharpen their skills through significant capstone projects, designed to mimic real-world challenges. By the end of the bootcamp, students will not only grasp the basics of Machine Learning and Supervised Learning but also delve into key concepts like regression. As a bonus, the workshop will provide an introductory glimpse into deep learning. Participants will learn about the Perceptron model, a single neuron, and embark on creating a deep neural network tailored for a regression task. This bootcamp is an unmissable opportunity for anyone eager to dive into the world of machine learning and emerge with a solid foundation and practical experience. Sign up to embark on this exciting journey of discovery and innovation in the field of AI!",
  },
];

/** Array of social medias in the form of an SocialMediaProp so it can be passed to SocialMediaSection tag.
 *  By adding to this array, the code in SocialMediaSection will automatically update the website, showing the new media.
 *
 *  The format for a workshop in this array is:
 *     {
 *       icon: "url(../assets/.../filename)",
 *       background: "linear-gradient(to bottom right, color1, color2, color3, ...",
 *       name: "This is the text that will show up on the small button",
 *       title: "This is the quick phrase like 'Follow us on Instagram!"",
 *       animation: "Some time in seconds between 2-5s"
 *     }
 */
export const medias = [
  {
    icon: "url(../assets/socialmedia/discord.png)",
    background:
      "linear-gradient(to bottom right, rgb(40,43,48), rgb(66,69,73), rgb(40,43,48))",
    name: "Join Now!",
    title: "Join our Discord server!",
    link: "https://discord.gg/TF4mwgFrQ4",
    animation: "3s",
  },
  {
    icon: "url(../assets/socialmedia/instagram.png)",
    background:
      "linear-gradient(to bottom right, rgb(5, 10, 230), rgb(131, 58, 180), rgb(225, 48, 108), rgb(252, 175, 69))",
    name: "Follow Us!",
    title: "Follow us on Instagram!",
    link: "https://www.instagram.com/aicommunityatsbu/",
    animation: "3.5s",
  },
  {
    icon: "url(../assets/socialmedia/mail.png)",
    background:
      "linear-gradient(to bottom right, rgb(3,79,160), rgb(36,158,228), rgb(36,158,228), rgb(84,218,255), rgb(36,158,228)",
    name: "Email Us!",
    title: "Email us with any questions!",
    link: "mailto:aicommunitysbu@gmail.com",
    animation: "4s",
  },
];

/** Due to a bug in the image paths when the website is deployed, the image paths for the homepage need to be different.
 *    Everything in this array is identical to the previousEvents array, just with different image paths
 *  When adding previous events to the homepage, use these props instead.
 *  The image paths here just need to have '/AI-SBU' before the '/assets/...'
 *
 */
export const previousEventsHomepage = [
  {
    image: "../AI-SBU/assets/GBMs/NNN.gif",
    title: "Neural Networking Night",
    description: "Join us for a night of games and challenges! There will be prizes & food, so pull up to have a good time"
  },
  {
    image: "../AI-SBU/assets/GBMs/GuestSpeakerBanerjee.gif",
    title: "Guest Speaker: Professor Banerjee",
    description:
      "Take this opportunity to hear Professor Banerjee talk about his NLP research on misinformation!",
  },
  {
    image: "../AI-SBU/assets/GBMs/Skiena.png",
    title: "Guest Speaker: Professor Skiena",
    description: "Presenting Professor Steven Skiena, an expert in algorithms! Come to ask about data science or career advice!"
  },
  {
    image: "../AI-SBU/assets/GBMs/CNNs.png",
    title: "Introduction to CNNs",
    description: "Stop by our workshop, where you’ll label facial images, train a CNN model, and test its accuracy!"
  },
  {
    image: "../AI-SBU/assets/GBMs/Website1.gif",
    title: "Intro to HTML & CSS",
    description: "Join us to learn beginner HTML & CSS and how to set up VSCode to develop websites!"
  },
  {
    image: "../AI-SBU/assets/GBMs/MLBootcamp6.png",
    title: "ML Workshop #6",
    description: "Stop by our workshop, where you’ll label facial images, train a CNN model, and test its accuracy!"
  },
  {
    image: "../AI-SBU/assets/GBMs/ComputerVision.png",
    title: "Computer Vision",
    description: "Learn about neural network architecture and the latest advancements in computer vision!"
  },
  {
    image: "../AI-SBU/assets/GBMs/Elections.gif",
    title: "E-Board Elections",
    description: "Come to get your voice heard in the club's management and support your picks for next year's e-board!"
  },
];

/** Due to a bug in the image paths when the website is deployed, the image paths for the homepage need to be different.
 *  When adding upcoming events to the homepage, use these props instead.
 *  The image paths here just need to have '/AI-SBU' before the '/assets/...'
 *  All other information like the title and date can stay the same.
 *
 */
export const upcomingEventsHomepage = [

];
