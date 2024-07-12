import {
  notification2,
  notification3,
  notification4,
  homeSmile,
  file02,
  searchMd,
  plusSquare,
  check2,
  loading1,
  slackL,
  Google,
  Spotify,
  Steam,
  Discord,
  MessageIcon,
  PerIcon,
  SecurityIcon,
  VoiceIcon,
  UiIcon,
  PhoneIcon,
  SMask,
  messagetext,
  securityuser,
  microphone,
  messages,
  messageNotif,
  Profile2user,
  Video,
  documentCode,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "#home",
  },
  {
    id: "1",
    title: "Benefits",
    url: "#benefits",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [slackL, Google, Spotify, Discord, Steam];

export const roadmap = [
  {
    id: "0",
    title: "Instant Messaging",
    text: "Enable real-time communication between users with features like message notifications, real-time messaging, and emojis to enhance user engagement.",
    status: "done",
    imageUrl: messagetext,
    colorful: true,
  },
  {
    id: "1",
    title: "Group Chat",
    text: "Introduce group chat functionality to allow users to create groups, send messages, and communicate with multiple users simultaneously, enhancing collaborative and social interactions.",
    status: "planned",
    imageUrl: messages,
    colorful: true,
  },
  {
    id: "2",
    title: "Authentification",
    text: "Implement secure authentication with email and password login options to protect user accounts.",
    status: "done",
    imageUrl: securityuser,
    colorful: true,
  },
  {
    id: "3",
    title: "Voice and Video Calls",
    text: " the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    status: "planned",
    imageUrl: microphone,
    colorful: true,
  },
];
/**********************************************************************************/
export const benefits = [
  {
    id: "0",
    title: "Real-Time Messaging",
    text: "Enable users to communicate instantly with real-time messaging, ensuring seamless and immediate interactions.",
    backgroundUrl: "assets/benefits/card-1.svg",
    iconUrl: MessageIcon,
    imageUrl: messageNotif,
  },
  {
    id: "1",
    title: "Enhanced Security",
    text: "Protect user data with end-to-end encryption, ensuring that all conversations remain private and secure.",
    backgroundUrl: "assets/benefits/card-2.svg",
    iconUrl: SecurityIcon,
    imageUrl: securityuser,
    light: true,
  },
  {
    id: "2",
    title: "User Authentication",
    text: "Implement secure authentication methods including email and password login to safeguard user accounts.",
    backgroundUrl: "assets/benefits/card-3.svg",
    iconUrl: PerIcon,
    imageUrl: Profile2user,
  },
  {
    id: "3",
    title: "User-Friendly Interface",
    text: "Provide an intuitive and responsive UI/UX design to enhance user experience and make navigation effortless.",
    backgroundUrl: "assets/benefits/card-4.svg",
    iconUrl: UiIcon,
    imageUrl: documentCode,
    light: true,
  },
  {
    id: "4",
    title: "Voice and Video Calls",
    text: "Facilitate direct communication with voice and video calls, allowing for more personal and interactive conversations.",
    backgroundUrl: "assets/benefits/card-5.svg",
    iconUrl: PhoneIcon,
    imageUrl: Video,
  },
  {
    id: "5",
    title: "Voice Messages",
    text: "Allow users to send voice messages for quick and efficient communication without needing to type.",
    backgroundUrl: "assets/benefits/card-6.svg",
    iconUrl: VoiceIcon,
    imageUrl: microphone,
  },
];
